from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import requests
import logging

app = Flask(__name__)
CORS(app)

# Настройка логирования
logging.basicConfig(level=logging.DEBUG)

@app.route("/calculate-internet-pay", methods=["POST"])
def calculate_internet_pay():
    url = "https://www.jlc.com/api/newOrder/CarriageMoney/v1/calculateCustomerOrderMoneyAll"
    currency_conversion_url = "https://api.exchangerate-api.com/v4/latest/CNY"

    try:
        # Получение данных из запроса JSON от клиента
        payload = request.json
        logging.debug(f"Payload received: {payload}")

        headers = {
            "Content-Type": "application/json"
        }

        # Отправка запроса к JLCPCB API
        response = requests.post(url, json=payload, headers=headers)
        response.raise_for_status()
        response_json = response.json()
        logging.debug(f"Response from JLCPCB: {response_json}")

        internet_pay_total_money = response_json.get("carriageSystemMoneyVO", {}).get("internetPayTotalmoney")

        if internet_pay_total_money is not None:
            # Получение актуального курса обмена валют
            exchange_rate_response = requests.get(currency_conversion_url)
            exchange_rate_response.raise_for_status()
            exchange_rate_data = exchange_rate_response.json()
            exchange_rate = exchange_rate_data["rates"]["RUB"]
            logging.debug(f"Exchange rate data: {exchange_rate_data}")

            converted_amount_rub = internet_pay_total_money * exchange_rate

            package_mass = calculate_package_mass(payload)

            # Возврат результатов клиенту
            return jsonify({
                "internetPayTotalmoney": internet_pay_total_money,
                "convertedAmountRub": converted_amount_rub,
                "packageMass": package_mass
            })
        else:
            logging.error("Поле internetPayTotalmoney не найдено в ответе.")
            return jsonify({"error": "Поле internetPayTotalmoney не найдено в ответе."}), 400

    except (requests.RequestException, json.JSONDecodeError) as e:
        logging.exception("Ошибка при отправке запроса или обработке JSON")
        return jsonify({"error": f"Ошибка при отправке запроса или обработке JSON: {e}"}), 500

def calculate_package_mass(payload):
    # Масса единицы площади для разных типов платы (г/см²)
    plate_type_mass = {
        1: 1.7,  # FR-4
        2: 2.7,  # Алюминевая пластина
        3: 3.5,  # Медная подложка
        5: 2.2,  # Высокочастотная Rogers
        6: 1.5   # Высококачественная тефлоновая
    }
    # Получение данных из payload
    plate_type = payload.get("plateType")
    plate_length = payload.get("stencilLength")
    plate_width = payload.get("stencilWidth")
    plate_layer = int(payload.get("stencilLayer"))
    plate_counts = payload.get("stencilCounts")
    plate_ply = float(payload.get("stencilPly"))

    # Площадь одной платы в квадратных сантиметрах
    plate_area = plate_length * plate_width
    # Масса одной платы в граммах
    plate_mass = plate_area * plate_type_mass.get(plate_type) * plate_ply * plate_layer
    # Общая масса заказанной партии в граммах
    total_mass = plate_mass * plate_counts
    return total_mass

if __name__ == "__main__":
    app.run(debug=True)
