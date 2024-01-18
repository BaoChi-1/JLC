import React, { useState } from 'react';
import ModalForm from './ModalForm';
import "./Form.css"
import SideForm from "./SideForm/SideForm";
import Specifications from './Specifications';
import HighOpt from './HighOpt';


function TotalForm() {
  const [pcbQty, setPcbQty] = useState(5);
  const [selectedOption, setSelectedOption] = useState("mm");
  const [selectedProductType, setSelectedProductType] = useState("")
  const [inputValues, setInputValues] = useState({
    height: 100,
    width: 100,
    design: null
  });
  const [selectedDelivery, setSelectedDelivery] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedPcbQty, setSelectedPcbQty] = useState();
  const [selectedDesign, setSelectedDesign] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSurface, setSelectedSurface] = useState("");
  const [selectedThickness, setSelectedThickness] = useState("");
  const [selectedNumber, setSelectedNumber] = useState("");
  const [selectedOz, setSelectedOz] = useState("");
  const [selectedViaCovering, setSelectedViaCovering] = useState("");
  const [selectedBoardOutlineTolerance, setSelectedBoardOutlineTolerance] = useState("");
  const [selectedFlyingProbeTest, setSelectedFlyingProbeTest] = useState("");
  const [selectedConfirmFile, setSelectedConfirmFile] = useState("");
  const [selectedRemoveOrderNumber, setSelectedRemoveOrderNumber] = useState("");
  const [selectedGoldFingers, setSelectedGoldFingers] = useState("");
  const [selectedCastellatedHoles, setSelectedCastellatedHoles] = useState("");
  const [selectedEdgePlating, setSelectedEdgePlating] = useState("");
  const [selectedSilkscreen, setSelectedSilkscreen] = useState('White');
  const radioNumbers = Array.from({ length: 11 }, (_, index) => index + 1);
  const [highOptVisible, setHighOptVisible] = useState(false);
  const [specificationsVisible, setSpecificationsVisible] = useState(false);
  const [pcbQtyVisible, setPcbQtyVisible] = useState(false);

  const baseMaterialImages = [
    'FR-4', 'Flex', 'Aluminum',
    'Copper Core', 'Rogers', 'PTFE Teflon',
  ];
  const layers = [
    '1', '2', '4', '6', '8', '10',
    '12', '14', '16', '18', '20'
  ];
  const design = [
    1, 2, 3, 4
  ];
  const oz = ['1 oz', '2 oz'];
  const productType = [
    'Industrial/Consumer electronics', 'Aerospace', 'Medical'
  ];
  const deliveryOpt = [
    'Single PCB', 'Panel By Customer', 'Panel By JLCPCB'
  ];
  const thickness = [0.4, 0.6, 0.8, 1.0, 1.2, 1.6, 2.0];
  const color = ['Green', 'Purple', 'Red', 'Yellow', 'Blue', 'White', 'Black'];
  const surface = ['HASL(with lead)', 'LeadFree HASL', 'ENIG'];
  const pcbQtyOptions = [
    5, 10, 15, 20, 25, 50, 75, 100, 125, 150, 200,
    250, 300, 350, 400, 450, 500, 600, 700, 800,
    900, 1000, 1500, 2000, 2500, 3000, 3500,
    4000, 4500, 5000, 5500, 6000, 6500, 7000,
    7500, 8000, 8500, 9000, 9500, 10000, 11000,
    12000, 13000, 14000, 15000, 16000, 17000,
    18000, 19000, 25000, 30000, 40000, 50000,
    60000, 70000, 80000
  ];
  const viaCovering = ['Tented', 'Untented', 'Plugged', 'Epoxy Filled & Capped', 'Copper paste Filled & Capped'];
  const boardTolerance = ['±0.2 mm (Regular)', '±0.1 mm (Precision)'];
  const optionsYesNo = ['No', 'Yes'];
  const removeOrderNumber = ['No', 'Yes', 'Specify a location'];
  const flyingProbeTest = ['Fully Test', 'Random Test', 'Not Test'];

  const handleViaCoveringChange = (e) => {
    setSelectedViaCovering(e.target.value);
  };
  const handleBoardOutlineToleranceChange = (e) => {
    setSelectedBoardOutlineTolerance(e.target.value);
  };
  const handleFlyingProbeTestChange = (e) => {
    setSelectedFlyingProbeTest(e.target.value);
  };
  const handleConfirmFileChange = (e) => {
    setSelectedConfirmFile(e.target.value);
  };
  const handleRemoveOrderNumberChange = (e) => {
    setSelectedRemoveOrderNumber(e.target.value);
  };
  const handleGoldFingersChange = (e) => {
    setSelectedGoldFingers(e.target.value);
  };
  const handleCastellatedHolesChange = (e) => {
    setSelectedCastellatedHoles(e.target.value);
  };
  const handleEdgeChange = (e) => {
    setSelectedEdgePlating(e.target.value);
  };

  const handleImageChange = (e) => {
    setSelectedImage(e.target.value);
  };
  const handleOzChange = (e) => {
    setSelectedOz(e.target.value);
  };
  const handleProductTypeChange = (e) => {
     
    setSelectedProductType(e.target.value);
  };
  const handlePcbQtyChange = (e) => {
    const selectedValue = parseInt(e.target.value);
    setSelectedPcbQty(selectedValue);
    setPcbQtyVisible(false);
  };
  const handleDeliveryChange = (e) => {
    setSelectedDelivery(e.target.value);
  };
  const handleSilkscreenChange = (e) => {
    setSelectedSilkscreen(e.target.value);
  };
  const handleThicknessChange = (e) => {
    setSelectedThickness(e.target.value);
  };
  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };
  const handleSurfaceChange = (e) => {
    setSelectedSurface(e.target.value);
  };
  const handleInputValuesChange = (field, value) => {
    setInputValues({
      ...inputValues,
      [field]: value,
    });
  };
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const handleDesignChange = (e) => {
    setSelectedDesign(e.target.value);
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

  const toggleHighOptVisibility = () => {
    setHighOptVisible(!highOptVisible);
  };
  const toggleSpecificationsVisibility = () => {
    setSpecificationsVisible(!specificationsVisible);
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <ModalForm
          pcbQty={pcbQty}
          selectedOption={selectedOption}
          inputValuesHeight={inputValues.height}
          inputValuesWidth={inputValues.width}
          radioNumbers={radioNumbers}
          handlePcbQtyChange={handlePcbQtyChange}
          generatePcbQtyOptions={generatePcbQtyOptions}
          handleInputWidthChange={(e) => handleInputValuesChange('width', e.target.value)}
          handleInputHeightChange={(e) => handleInputValuesChange('height', e.target.value)}
          handleOptionChange={handleOptionChange}
          handleSubmit={handleSubmit}
          baseMaterialImages={baseMaterialImages}
          handleImageChange={handleImageChange}
          selectedImage={selectedImage}
          handleNumberChange={handleNumberChange}
          selectedNumber={selectedNumber}
          layers={layers}
          pcbQtyOptions={pcbQtyOptions}
          productType={productType}
          selectedProductType={selectedProductType}
          handleProductTypeChange={handleProductTypeChange}
          pcbQtyVisible={pcbQtyVisible}
          setPcbQtyVisible={setPcbQtyVisible}
          handlePCBQtyValue={handlePCBQtyValue}
          selectedPcbQty={selectedPcbQty}

        />
        <Specifications
          specificationsVisible={specificationsVisible}
          toggleSpecificationsVisibility={toggleSpecificationsVisibility}
          selectedDesign={selectedDesign}
          design={design}
          handleDesignChange={handleDesignChange}
          deliveryOpt={deliveryOpt}
          handleInputDesignChange={(e) => handleInputValuesChange('design', e.target.value)}
          thickness={thickness}
          inputValueDesign={inputValues.design}
          selectedDelivery={selectedDelivery}
          selectedThickness={selectedThickness}
          handleDeliveryChange={handleDeliveryChange}
          surface={surface}
          color={color}
          handleColorChange={handleColorChange}
          handleSurfaceChange={handleSurfaceChange}
          selectedSurface={selectedSurface}
          selectedColor={selectedColor}
          handleThicknessChange={handleThicknessChange}
          handleSilkscreenChange={handleSilkscreenChange}
          selectedSilkscreen={selectedSilkscreen}
        />
        <HighOpt
          highOptVisible={highOptVisible}
          oz={oz}
          toggleHighOptVisibility={toggleHighOptVisibility}
          selectedOz={selectedOz}
          handleOzChange={handleOzChange}
          selectedViaCovering={selectedViaCovering}
          selectedBoardOutlineTolerance={selectedBoardOutlineTolerance}
          selectedFlyingProbeTest={selectedFlyingProbeTest}
          selectedConfirmFile={selectedConfirmFile}
          selectedRemoveOrderNumber={selectedRemoveOrderNumber}
          selectedGoldFingers={selectedGoldFingers}
          selectedCastellatedHoles={selectedCastellatedHoles}
          selectedEdgePlating={selectedEdgePlating}
          viaCovering={viaCovering}
          boardTolerance={boardTolerance}
          optionsYesNo={optionsYesNo}
          removeOrderNumber={removeOrderNumber}
          flyingProbeTest={flyingProbeTest}
          handleViaCoveringChange={handleViaCoveringChange}
          handleBoardOutlineToleranceChange={handleBoardOutlineToleranceChange}
          handleFlyingProbeTestChange={handleFlyingProbeTestChange}
          handleConfirmFileChange={handleConfirmFileChange}
          handleRemoveOrderNumberChange={handleRemoveOrderNumberChange}
          handleGoldFingersChange={handleGoldFingersChange}
          handleCastellatedHolesChange={handleCastellatedHolesChange}
          handleEdgeChange={handleEdgeChange}
        />
        <SideForm />
      </form>

    </div>
  );
}

export default TotalForm;
