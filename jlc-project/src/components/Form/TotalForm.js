import React, { useState } from 'react';
import ModalForm from './ModalForm';
import "./Form.css"
import SideForm from "./SideForm/SideForm";


function TotalForm() {
  const [pcbQty, setPcbQty] = useState(5);
  const [selectedOption, setSelectedOption] = useState("mm");
  const [selectedProductType, setSelectedProductType] = useState("")
  const [inputValue, setInputValue] = useState(100);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedPcbQty, setSelectedPcbQty] = useState(5);
  const [selectedNumber, setSelectedNumber] = useState("");
  const radioNumbers = Array.from({ length: 11 }, (_, index) => index + 1);
  const [specificationsVisible, setSpecificationsVisible] = useState(false);
  const [highOptVisible, setHighOptVisible] = useState(false);
  const [advanceOptVisible, setAdvanceOptVisible] = useState(false);
  const [sideFormVisible, setSideFormVisible] = useState(false);
  const [pcbQtyVisible, setPcbQtyVisible] = useState(false);

  const baseMaterialImages = [
    'FR-4',
    'Flex',
    'Aluminum',
    'Copper Core',
    'Rogers',
    'PTFE Teflon',
  ];
  const layers = [
    '1',
    '2',
    '4',
    '6',
    '8',
    '10',
    '12',
    '14',
    '16',
    '18',
    '20'
  ];
  const productType = [
    'Industrial/Consumer electronics',
    'Aerospace',
    'Medical'
  ]
  const pcbQtyOptions = [
    5, 10, 15, 20, 25, 50, 75, 100, 125, 150, 200,
    250, 300, 350, 400, 450, 500, 600, 700, 800,
    900, 1000, 1500, 2000, 2500, 3000, 3500,
    4000, 4500, 5000, 5500, 6000, 6500, 7000,
    7500, 8000, 8500, 9000, 9500, 10000, 11000,
    12000, 13000, 14000, 15000, 16000, 17000,
    18000, 19000, 25000, 30000, 40000, 50000,
    60000, 70000, 80000
  ]
  const handleImageChange = (e) => {
    setSelectedImage(e.target.value);
  };
  const handleProductTypeChange = (e) => {
    setSelectedProductType(e.target.value);
  };
  const handlePcbQtyChange = (e) => {
    const selectedValue = parseInt(e.target.value, 10);
    setSelectedPcbQty(selectedValue);
    setPcbQtyVisible(false);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const handleNumberChange = (e) => {
    setSelectedNumber(parseInt(e.target.value, 10));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const generatePcbQtyOptions = () => {
    const options = [];
    let value = pcbQty;

    for (let i = 0; i < 5; i++) {
      options.push(<option key={value} value={value}>{value}</option>);
      value += (i % 2 === 0) ? 25 : 5;
    }

    return options;
  };
  const handlePCBQtyValue = (value) => {
    setPcbQty(value);
    setPcbQtyVisible(false);
  };
  return (
    <div>
      <ModalForm
        pcbQty={pcbQty}
        setPcbQty={setPcbQty}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        inputValue={inputValue}
        setInputValue={setInputValue}
        radioNumbers={radioNumbers}
        handlePcbQtyChange={handlePcbQtyChange}
        generatePcbQtyOptions={generatePcbQtyOptions}
        handleInputChange={handleInputChange}
        handleOptionChange={handleOptionChange}
        handleSubmit={handleSubmit}
        baseMaterialImages={baseMaterialImages}
        handleImageChange={handleImageChange}
        selectedImage={selectedImage}
        handleNumberChange={handleNumberChange}
        selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}
        layers={layers}
        pcbQtyOptions={pcbQtyOptions}
        productType={productType}
        setSelectedProductType={setSelectedProductType}
        selectedProductType={selectedProductType}
        handleProductTypeChange={handleProductTypeChange}
        pcbQtyVisible={pcbQtyVisible}
        setPcbQtyVisible={setPcbQtyVisible}
        handlePCBQtyValue={handlePCBQtyValue}
        selectedPcbQty={selectedPcbQty}
        setSelectedPcbQty={setSelectedPcbQty}
      />
      <SideForm />
    </div>
  );
}

export default TotalForm;
