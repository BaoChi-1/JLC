import React, { useState }  from 'react';
import ModalForm from './ModalForm';
import "./Form.css"


function WindowForm() {
    const [pcbQty, setPcbQty] = useState(5); 
    const [selectedOption, setSelectedOption] = useState("mm");
    const [selectedProductType,setSelectedProductType]=useState("")
    const [inputValue, setInputValue] = useState(100);
    const [selectedImage,setSelectedImage]=useState("");
    const [selectedNumber, setSelectedNumber] = useState(""); 
    const radioNumbers = Array.from({ length: 11 }, (_, index) => index + 1);

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
      const productType=[
        'Industrial/Consumer electronics',
        'Aerospace',
        'Medical'
      ]
      const handleImageChange = (e) => {
        setSelectedImage(e.target.value);
      };
      const handleProductTypeChange = (e) => {
        setSelectedProductType(e.target.value);
      };
    const handlePcbQtyChange = (e) => {
        const selectedPcbQty = parseInt(e.target.value, 10);
        setPcbQty(selectedPcbQty);
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
            productType={productType}
            setSelectedProductType={setSelectedProductType}
            selectedProductType={selectedProductType}
            handleProductTypeChange={handleProductTypeChange}
            />
        </div>
    );
}

export default WindowForm;
