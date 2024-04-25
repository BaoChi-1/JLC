import React, { useState, useEffect } from "react";

function ItemCheckBox({
    options,
    selectedValue,
    handleChange,
    title
}) {
    const handleOptionClick = (key) => {
        let updatedValue = { ...selectedValue };

        if (key === 'Without') {
            // Если выбран "Without", сбрасываем все остальные выборы
            for (const optionKey in updatedValue) {
                updatedValue[optionKey] = false;
            }
        } else if (key !== 'Without' && selectedValue['Without']) {
            // Если выбран другой элемент и "Without" был выбран, сбрасываем "Without"
            updatedValue = { ...updatedValue, 'Without': false };
        }

        updatedValue = { ...updatedValue, [key]: !updatedValue[key] };
        handleChange({ target: { value: updatedValue } });
    };

    useEffect(() => {
        // Устанавливаем начальное значение в соответствии с selectedStiffener
        handleOptionClick(selectedValue);
    }, []);

    return (
        <div className='content'>
            <h2>{title}</h2>
            <div className="radio-btn">
                {Object.entries(options).map(([key, value], index) => (
                    <label key={index} className={`custom-checkbox-label ${selectedValue[key] ? 'selected' : ''}`}>
                        <input
                            type="checkbox"
                            checked={selectedValue[key]}
                            onChange={() => handleOptionClick(key)}
                        />
                        <span className="custom-checkbox-text">
                            {key}
                        </span>
                    </label>
                ))}
            </div>
        </div>
    );
}

export default ItemCheckBox;
