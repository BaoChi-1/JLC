import React, { useState, useEffect } from 'react';
import ModalForm from './ModalForm';
import "./Form.css"
import SideForm from "./SideForm/SideForm";
import Specifications from './Specifications';
import HighOpt from './HighOpt';
import AdvancesOptions from './AdvancesOptions';


function TotalForm() {
  const optionsYesNo = ['No', 'Yes'];
  const baseMaterialImages = [
    'FR-4', 'Flex', 'Aluminum',
    'Copper Core', 'Rogers', 'PTFE Teflon',
  ];
  const stiffener = ['Without', 'Polyimide', 'FR4', 'Stainless Steel', '3M Tape'];
  const emi = ['Without', 'Both sides ( Black ,18um )', 'Single side ( Black ,18um )'];
  const cuttingMethod = ['Laser Cutting', 'Punching'];
  const polyimideThickness = ['0.1mm', '0.15mm', '0.20mm', '0.225mm', '0.25mm'];

  const layers = [
    1, 2, 4, 6, 8, 10,
    12, 14, 16, 18, 20
  ];
  const design = [
    1, 2, 3, 4
  ];
  const materialType = ['FR4-Standard TG 135-140', 'FR-4 TG155', 'FR-4 TG170'];
  const edgeRails = ['No', 'On 2 Sides', 'On 4 Sides'];
  const oz = ['1 oz', '2 oz'];
  const productType = ['Industrial/Consumer electronics', 'Aerospace', 'Medical'];
  const deliveryOpt = ['Single PCB', 'Panel By Customer', 'Panel By JLCPCB'];
  const oz2 = ['0.5 oz', '1 oz', '2 oz'];
  const minVia = ['0.3mm/(0.4/0.45mm)', '0.25mm/(0.35/0.4mm)', '0.2mm/(0.3/0.35mm)', '0.15mm/(0.25/0.3mm)'];
  const appearanceQuality = ['IPC Class 2 Standart', 'Superb Quality'];
  const silkscreenTechnology = ['Ink-jet/Screen Printing Silkscreen', 'High-definition Exposure Silkscreen', 'High-precision Printing Silkscreen'];
  const packageBox = ['With JLCPCB logo', 'Blank Box'];
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
  const layerStackup = ['No requirement', 'JLC04161H-7628', 'JLC04161H-3313', 'JLC04161H-1080', 'JLC04161H-7628A',
    'JLC04161H-7628B', 'JLC04161H-3313A', 'JLC04161H-1080A', 'JLC04161H-2116A', 'JLC04161H-2116B', 'JLC04161H-2116C'];
  const goldThickness = ['1 U"', '2 U"'];
  const viaCovering = ['Tented', 'Untented', 'Plugged', 'Epoxy Filled & Capped', 'Copper paste Filled & Capped'];
  const boardTolerance = ['±0.2 mm (Regular)', '±0.1 mm (Precision)'];
  const silkscreen = ['White', 'Black'];
  const removeOrderNumber = ['No', 'Yes', 'Specify a location'];
  const flyingProbeTest = ['Fully Test', 'Random Test', 'Not Test'];
  const cooperType = ['Electro-deposite', 'Rolled Annealed'];
  const coverlayThickness = ['PI:12.5um/AD:15um', 'PI:25um/AD:25um'];

  const [edgeAndCastellatedState, setEdgeAndCastellatedState] = useState({
    edgePlating: "No",
    castellatedHoles: "No",
    confirmFile: "No",
    removeOrderNumber: "No",
    goldFingers: "No",
    kelvinTest: "No",
    paper: "No",
    fingerChamfered: "No",
    control: "No",
    stiffener: "No"
  });
  const [inputValues, setInputValues] = useState({
    height: 100,
    width: 100,
    design: null,
    column: null,
    row: null
  });
  const [pcbQty, setPcbQty] = useState(5);
  const [selectedOption, setSelectedOption] = useState("mm");
  const [selectedData, setSelectedData] = useState({
    selectedProductType: 'Industrial/Consumer electronics',
    selectedNumber: 2,
    selectedDelivery: 'Single PCB',
    selectedImage: 'FR-4',
    selectedPcbQty: null,
    selectedCooperType: "Electro-deposite",
    selectedDesign: 1,
    selectedColor: "Green",
    selectedSurface: "HASL(with lead)",
    selectedThickness: 1.6,
    selectedGoldThickness: '1 U"',
    selectedCoverlayThickness: 'PI:12.5um/AD:15um',
    selectedOz: "1 oz",
    selectedViaCovering: "Tented",
    selectedBoardOutlineTolerance: "±0.2 mm (Regular)",
    selectedFlyingProbeTest: "Fully Test",
    selectedLayerStackup: "No requirement",
    selectedMinVia: "0.3mm/(0.4/0.45mm)",
    selectedOz2: "0.5 oz",
    selectedEdgeRail: "No",
    selectedSilkscreen: 'White',
    selectedAppearanceQuality: "IPC Class 2 Standart",
    selectedSilkscreenTechnology: "Ink-jet/Screen Printing Silkscreen",
    selectedPackage: "With JLCPCB logo",
    selectedMaterialType: "FR4-Standard TG 135-140",
    selectedStiffener: "Without",
    selectedEmi: "Without",
    selectedCuttingMethod: "Laser Cutting",
  });
  const [selectedEdges, setSelectedEdges] = useState();

  const [currentMaterialType, setCurrentMaterialType] = useState(materialType);
  const [currentEdgePlating, setCurrentEdgePlating] = useState(optionsYesNo);
  const [currentCastellatedHoles, setCurrentCastellatedHoles] = useState(optionsYesNo);
  const [currentKelvinTest, setCurrentKelvinTest] = useState(optionsYesNo);
  const [currentViaCovering, setCurrentViaCovering] = useState(viaCovering);
  const [currentThickness, setCurrentThickness] = useState(thickness);
  const [currentGoldThickness, setCurrentGoldThickness] = useState(goldThickness);
  const [currentColor, setCurrentColor] = useState(color);
  const [currentSilkscreenTechnology, setCurrentSilkscreenTechnology] = useState(silkscreenTechnology);
  const [currentOz2, setCurrentOz2] = useState(oz2);
  const [currentCoverlayThickness, setCurrentCoverlayThickness] = useState(coverlayThickness);
  const [currentDelivery, setCurrentDelivery] = useState(deliveryOpt);
  const [currentDesign, setCurrentDesign] = useState(design);
  const [currentCooperType, setCurrentCooperType] = useState(cooperType);
  const [currentColorSilkScreen, setCurrentColorSilkScreen] = useState(silkscreen);
  const [currentColorOz, setCurrentOz] = useState(oz);
  const [currentFlyingProbeTest, setCurrentFlyingProbeTest] = useState(flyingProbeTest);
  const [currentSurface, setCurrentSurface] = useState(surface);
  const [currentNumbers, setCurrentNumbers] = useState(layers);
  const [currentAppearanceQuality, setCurrentAppearanceQuality] = useState(appearanceQuality);
  const [highOptVisible, setHighOptVisible] = useState(false);
  const [specificationsVisible, setSpecificationsVisible] = useState(false);
  const [pcbQtyVisible, setPcbQtyVisible] = useState(false);
  const [edgeRailVisible, setEdgeRailVisible] = useState(false);
  const [advancesOptVisible, setAdvancesOptVisible] = useState(false);
  const [panelFormat, setPanelFormat] = useState(false);
  const [inputVisible, setInputVisible] = useState(false);
  const [layerStackupVisible, setLayerStackupVisible] = useState(false);
  const [addOptVisible, setAddOptVisible] = useState(false);
  const [edgesVisible, setEdgesVisible] = useState(false);
  const [fingerChamferedVisible, setFingerChamferedVisible] = useState(false);
  const [materialTypeVisible, setMaterialTypeVisible] = useState(false);
  const [cooperTypeVisible, setCooperTypeVisible] = useState(false);
  const [addOptFlexVisible, setAddOptFlexVisible] = useState(false);
  const [addOptFRVisible, setAddOptFRVisible] = useState(false);
  const [goldThicknessVisible, setGoldThicknessVisible] = useState(false);

  useEffect(() => {

    // const serverData = {
    //   "produceOrderAccessId": "",
    //   "achieveHours": 48,
    //   "adornColor": "绿",
    //   "adornPut": "有铅喷锡",
    //   "adornBestrow": "过孔盖油",
    //   "cascadeStructure": null,
    //   "impedanceLaminatedConstructionDto": null,
    //   "halfHole": false,
    //   "madeSmt": false,
    //   "impedance": false,
    //   "confirmProductionFile": "",
    //   "confirmProductionFileType": null,
    //   "cuprumThickness": 1,
    //   "insideCuprumThickness": 0.5,
    //   "halfHoleNumber": 0,
    //   "isNeedBook": "no",
    //   "isNewOrder": "yes",
    //   "specifyBoard": false,
    //   "specifyBoardName": "无要求",
    //   "specifyBoardCode": "无要求",
    //   "invoiceType": 99,
    //   "orderType": 1,
    //   "printHDChar": false,
    //   "stencilCounts": 5,
    //   "stencilLayer": "2",
    //   "stencilLength": 11,
    //   "stencilNumber": 1,
    //   "stencilPly": "1.6",
    //   "stencilWidth": 11,
    //   "sestencilCountX": null,
    //   "sestencilCountY": null,
    //   "testProduct": 2,
    //   "addOrderSource": 4,
    //   "collarCouponNo": "",
    //   "deviceId": null,
    //   "pcHelperDeviceInfoType": null,
    //   "receivePhone": "",
    //   "isBackOrder": "no",
    //   "isStencilType": "no",
    //   "historyStencilType": null,
    //   "historyStencilCounts": 5,
    //   "historyStencilLength": "11",
    //   "historyStencilWidth": "11",
    //   "edgeGrinding": false,
    //   "lowResistanceTest": false,
    //   "isMakeup": null,
    //   "tgBoardLevel": "TG135",
    //   "guaranteeService": false,
    //   "guaranteeCount": null,
    //   "guaranteeUnitPrice": null,
    //   "timeStamp": "0.6595454801328777",
    //   "rimCutMoney": null,
    //   "uploadFileAfterProcess": true,
    //   "plateType": 1,
    //   "serviceMoneyId": [
    //     806200,
    //     806206,
    //     806213,
    //     806218,
    //     806225,
    //     806239,
    //     806247,
    //     806251,
    //     806259,
    //     806121,
    //     806086,
    //     806092,
    //     806210,
    //     806263
    //   ],
    //   "filePreverifyUUID": null,
    //   "collarCouponVo": null,
    //   "printMethod": "",
    //   "intialMadeSmtFlag": false,
    //   "madeSteel": false
    // }

    // setSelectedData({
    //   selectedColor: serverData.adornColor, 
    // selectedProductType: serverData.,
    // selectedNumber: serverData.stencilLayer,
    // selectedDelivery: serverData.,
    // selectedImage: serverData.,
    // selectedPcbQty: serverData.,
    // selectedCooperType: serverData.,
    // selectedDesign: serverData.,
    // selectedSurface: serverData.,
    // selectedThickness: serverData.,
    // selectedGoldThickness: serverData.,
    // selectedCoverlayThickness: serverData.,
    // selectedOz: serverData.,
    // selectedViaCovering: serverData.,
    // selectedBoardOutlineTolerance: serverData.,
    // selectedFlyingProbeTest: serverData.,
    // selectedLayerStackup: serverData.,
    // selectedMinVia: serverData.,
    // selectedOz2: serverData.,
    // selectedEdgeRail: serverData.,
    // selectedSilkscreen: serverData.,
    // selectedAppearanceQuality: serverData.,
    // selectedSilkscreenTechnology: serverData.,
    // selectedPackage: serverData.,
    // selectedMaterialType: serverData.,
    // selectedStiffener: serverData.,
    // selectedEmi: serverData.,
    // selectedCuttingMethod: serverData.,
    // });
    
    if (pcbQty < 50) {
      setCurrentAppearanceQuality(appearanceQuality.slice(0, 1));
      setCurrentFlyingProbeTest(flyingProbeTest.slice(0, 1));
    }
    else {
      setCurrentAppearanceQuality(appearanceQuality);
      setCurrentFlyingProbeTest(flyingProbeTest.slice(0, 2));
      setSelectedData((prevData) => ({
        ...prevData,
        selectedFlyingProbeTest: "Random Test",
      }));
    }
    if (selectedData.selectedSurface === 'ENIG') {
      setGoldThicknessVisible(true);
    } else {
      setGoldThicknessVisible(false);
    }

    if (selectedData.selectedProductType !== 'Industrial/Consumer electronics') {
      setCurrentKelvinTest(optionsYesNo.slice(1));
      edgeAndCastellatedState.kelvinTest = ("Yes");
    }
    else {
      setCurrentKelvinTest(optionsYesNo);
    }
    if (selectedData.selectedDesign > 1) {
      setCurrentDelivery(deliveryOpt.slice(1, 2));
    }
    else {
      setCurrentDelivery(deliveryOpt);
    }
    if (selectedData.selectedDelivery === 'Panel By JLCPCB') {
      setCurrentDesign(design.slice(0, 1));
      setInputVisible(false);
      setPanelFormat(true);
      setEdgeRailVisible(true)
    }
    else if (selectedData.selectedDelivery === 'Panel By Customer') {
      setPanelFormat(true);
      setEdgeRailVisible(false);
    }
    else {
      setCurrentDelivery(deliveryOpt);
      setCurrentDesign(design);
      setInputVisible(true);
      setPanelFormat(false);
      setEdgeRailVisible(false);
    }

    if (edgeAndCastellatedState.control === "Yes") {
      setLayerStackupVisible(true);
    } else {
      setLayerStackupVisible(false);
    }
    if (selectedData.selectedImage === 'FR-4') {
      setAddOptFRVisible(true);
      setCooperTypeVisible(false);
      setAddOptFlexVisible(false)
      if (edgeAndCastellatedState.goldFingers === "Yes") {
        setCurrentSurface(surface.slice(2));
        setSelectedData((prevData) => ({
          ...prevData,
          selectedSurface: "ENIG",
        }));
        setFingerChamferedVisible(true);
      }
      else {
        setCurrentSurface(surface);
        setFingerChamferedVisible(false);
      }
      if (selectedData.selectedNumber === 2) {
        setCurrentEdgePlating(optionsYesNo.slice(0, 1));
        setCurrentViaCovering(viaCovering.slice(0, 4));
        setCurrentColorSilkScreen(silkscreen.slice(0, 1));
        if (selectedData.selectedColor === "Red" || selectedData.selectedColor === "Yellow") {
          setCurrentOz(oz);
          setCurrentThickness(thickness.slice(1));
        }
        else if (selectedData.selectedColor === "White") {
          setCurrentOz(oz);
          setCurrentColorSilkScreen(silkscreen.slice(1));
        }
        else if (selectedData.selectedColor === "Black") {
          setCurrentOz(oz.slice(0, 1))
        }
        else {
          setCurrentOz(oz);
        }

        if (edgeAndCastellatedState.castellatedHoles === "Yes") {
          setEdgesVisible(true);
          setCurrentNumbers(layers.slice(1));
        }
        else {
          setEdgesVisible(false);
          setCurrentNumbers(layers);
        }
      }
      if (selectedData.selectedNumber === 1) {
        setCurrentEdgePlating(optionsYesNo.slice(0, 1));
        setCurrentCastellatedHoles(optionsYesNo.slice(0, 1));
        setCurrentViaCovering(viaCovering.slice(0, 2));
        setCurrentThickness(thickness.slice(2));
        setCurrentOz(oz.slice(0, 1));
        setCurrentFlyingProbeTest(flyingProbeTest);
        setSelectedData((prevData) => ({
          ...prevData,
          selectedFlyingProbeTest: "Not Test",
        }));

        if (selectedData.selectedColor === "White") {
          setCurrentColorSilkScreen(silkscreen.slice(1));
        }
        else {
          setCurrentColorSilkScreen(silkscreen.slice(0, 1));
        }

      }
      else if (selectedData.selectedNumber === 4) {
        setCurrentThickness(thickness.slice(2));
        setMaterialTypeVisible(true);
        setCurrentViaCovering(viaCovering.slice(1));
        setCurrentMaterialType(materialType.slice(0, 2));
        setSelectedData((prevData) => ({
          ...prevData,
          selectedViaCovering: "Plugged",
        }));
        setAddOptVisible(true);

        if (selectedData.selectedProductType !== 'Industrial/Consumer electronics') {
          setSelectedData((prevData) => ({
            ...prevData,
            selectedMaterialType: "FR-4 TG155",
          }));
        }
        else {
          setSelectedData((prevData) => ({
            ...prevData,
            selectedMaterialType: "FR4-Standard TG 135-140",
          }));
        }

      }
      else if (selectedData.selectedNumber === 6 || selectedData.selectedNumber === 8 || selectedData.selectedNumber === 10
        || selectedData.selectedNumber === 12 || selectedData.selectedNumber === 14 || selectedData.selectedNumber === 16
        || selectedData.selectedNumber === 18 || selectedData.selectedNumber === 20) {
        setMaterialTypeVisible(true);
        setAddOptVisible(true);
        setCurrentSurface(surface.slice(2));
        setCurrentThickness(thickness.slice(2));
        setSelectedData((prevData) => ({
          ...prevData,
          selectedSurface: "ENIG",
        }));
        setCurrentGoldThickness(goldThickness.slice(1));
        setSelectedData((prevData) => ({
          ...prevData,
          selectedGoldThickness: '2 U"',
        }));
        const filteredViaCovering = viaCovering.filter(item => item === 'Copper paste Filled & Capped' || item === 'Epoxy Filled & Capped');
        const updatedViaCovering = filteredViaCovering.concat('Epoxy Filled & Untented');
        setCurrentViaCovering(updatedViaCovering);
        setSelectedData((prevData) => ({
          ...prevData,
          selectedViaCovering: 'Epoxy Filled & Capped',
        }));
        if (selectedData.selectedNumber === 6) {
          setCurrentMaterialType(materialType.slice(0, 2));
          setCurrentOz(oz);
          setCurrentOz2(oz2);
          setCurrentColor(color);
          setCurrentSilkscreenTechnology(silkscreenTechnology.slice(0, 2));
          if (selectedData.selectedMinVia !== "0.3mm/(0.4/0.45mm)") {
            setCurrentMaterialType(materialType.slice(1, 2));
            setSelectedData((prevData) => ({
              ...prevData,
              selectedMaterialType: "FR-4 TG155",
            }));
          } else {
            setCurrentMaterialType(materialType.slice(0, 2));
          }

        } else if (selectedData.selectedNumber === 8 || selectedData.selectedNumber === 10 || selectedData.selectedNumber === 12
          || selectedData.selectedNumber === 14 || selectedData.selectedNumber === 16 || selectedData.selectedNumber === 18
          || selectedData.selectedNumber === 20) {
          const updated = color.filter(item => item !== 'White');
          setCurrentColor(updated);
          setCurrentMaterialType(materialType.slice(1, 2));
          setSelectedData((prevData) => ({
            ...prevData,
            selectedMaterialType: "FR-4 TG155",
          }));
          setCurrentOz(oz.slice(0, 1));
          setCurrentOz2(oz2.slice(0, 2));
          if (selectedData.selectedNumber === 10 || selectedData.selectedNumber === 12 || selectedData.selectedNumber === 14
            || selectedData.selectedNumber === 16 || selectedData.selectedNumber === 18 || selectedData.selectedNumber === 20) {
            setCurrentThickness(thickness.slice(3));
            setCurrentMaterialType(materialType.slice(2));
            setSelectedData((prevData) => ({
              ...prevData,
              selectedMaterialType: "FR-4 TG170",
            }));
            if (selectedData.selectedNumber === 12) {
              const filtered = thickness.filter(item => item === 1.2 || item === 1.6 || item === 2.0);
              const updated = filtered.concat(2.5);
              setCurrentThickness(updated);
            } else if (selectedData.selectedNumber === 14 || selectedData.selectedNumber === 16) {
              const filtered = thickness.filter(item => item === 1.6 || item === 2.0);
              const updated = filtered.concat(2.5);
              setCurrentThickness(updated);
            } else if (selectedData.selectedNumber === 18 || selectedData.selectedNumber === 20) {
              const filtered = thickness.filter(item => item === 2.0);
              const updated = filtered.concat(2.5);
              setCurrentThickness(updated);
              setSelectedData((prevData) => ({
                ...prevData,
                selectedMaterialType: 2.0,
              }));
            }
          }
        }
      }
      else {
        setMaterialTypeVisible(false);
        setAddOptVisible(false);
        setCurrentCastellatedHoles(optionsYesNo);
        setCurrentThickness(thickness);
        setCurrentOz(oz);
        setSelectedData((prevData) => ({
          ...prevData,
          selectedFlyingProbeTest: "Fully Test",
        }));
        setCurrentSurface(surface);

      }

    } else if (selectedData.selectedImage === "Flex") {
      setAddOptFRVisible(false);
      setCurrentNumbers(layers.slice(0, 2));
      setSelectedData((prevData) => ({
        ...prevData,
        selectedNumber: 2,
      }));
      const filtered = thickness.concat(0.11, 0.12, 0.2);
      const updated = filtered.slice(7);
      setCurrentThickness(updated);
      const filteredColor = color.filter(item => item === "Yellow" || item === "Black" || item === "White");
      setCurrentColor(filteredColor);
      setSelectedData((prevData) => ({
        ...prevData,
        selectedColor: "Yellow",
      }));
      setMaterialTypeVisible(false);
      setCooperTypeVisible(true);
      setCurrentCooperType(cooperType.slice(0, 1));
      const filteredOz = oz.filter(item => item === "1 oz");
      const updatedOz = filteredOz.concat("1/3 oz", "0.5 oz");
      setCurrentOz(updatedOz);
      setAddOptFlexVisible(true);
      if (edgeAndCastellatedState.goldFingers === "Yes") {
        setCurrentSurface(surface.slice(2));
        setSelectedData((prevData) => ({
          ...prevData,
          selectedSurface: 'ENIG',
        }));
        setFingerChamferedVisible(true);
      }
      else {
        setFingerChamferedVisible(false);
      }
      if (selectedData.selectedThickness === 0.11) {
        setCurrentOz(updatedOz.slice(1, 2));
        setSelectedData((prevData) => ({
          ...prevData,
          selectedOz: "1/3 oz",
        }));
        setCurrentCoverlayThickness(coverlayThickness.slice(0, 1));
        setSelectedData((prevData) => ({
          ...prevData,
          selectedCoverlayThickness: "PI:12.5um/AD:15um",
        }));
      } else if (selectedData.selectedThickness === 0.12) {
        setCurrentOz(updatedOz.slice(2));
        setSelectedData((prevData) => ({
          ...prevData,
          selectedOz: "0.5 oz",
        }));
        setCurrentCoverlayThickness(coverlayThickness.slice(0, 1))
        setSelectedData((prevData) => ({
          ...prevData,
          selectedCoverlayThickness: "PI:12.5um/AD:15um",
        }));
      } else {
        setCurrentOz(updatedOz.slice(0, 1));
        setCurrentCoverlayThickness(coverlayThickness.slice(1))
        setSelectedData((prevData) => ({
          ...prevData,
          selectedOz: "1 oz",
        }));
        setSelectedData((prevData) => ({
          ...prevData,
          selectedCoverlayThickness: "PI:25um/AD:25um",
        }));
      }
    }
  }, [selectedData.selectedImage, selectedData.selectedNumber, selectedData.selectedDesign, selectedData.selectedDelivery,
  selectedData.selectedColor, edgeAndCastellatedState.castellatedHoles, edgeAndCastellatedState.goldFingers, pcbQty,
  selectedData.selectedSurface, selectedData.selectedProductType, edgeAndCastellatedState.control, selectedData.selectedMinVia,
  selectedData.selectedThickness]);


  const handleMinViaChange = (e) => {
    setSelectedData((prevData) => ({
      ...prevData,
      selectedMinVia: e.target.value,
    }));
  };

  const handleLayerStackupChange = (e) => {
    setSelectedData((prevData) => ({
      ...prevData,
      selectedLayerStackup: e.target.value,
    }));
  };
  const handleControlChange = (e) => {
    const selectedValue = e.target.value;
    setEdgeAndCastellatedState({
      ...edgeAndCastellatedState,
      control: selectedValue
    });
  };
  const handleStiffenerChange = (e) => {
    const selectedValue = e.target.value;
    setEdgeAndCastellatedState({
      ...edgeAndCastellatedState,
      stiffener: selectedValue
    });
  };
  const handleOz2Change = (e) => {
    setSelectedData((prevData) => ({
      ...prevData,
      selectedOz2: e.target.value,
    }));
  };

  const handleKelvinTestChange = (e) => {
    const selectedValue = e.target.value;
    setEdgeAndCastellatedState({
      ...edgeAndCastellatedState,
      kelvinTest: selectedValue
    });
  };
  const handlePaperChange = (e) => {
    const selectedValue = e.target.value;
    setEdgeAndCastellatedState({
      ...edgeAndCastellatedState,
      paper: selectedValue
    });
  };
  const handleAppearanceQualityChange = (e) => {
    setSelectedData((prevData) => ({
      ...prevData,
      selectedAppearanceQuality: e.target.value,
    }));
  };
  const handleSilkscreenTechnologyChange = (e) => {
    setSelectedData((prevData) => ({
      ...prevData,
      selectedSilkscreenTechnology: e.target.value,
    }));
  };
  const handlePackageChange = (e) => {
    setSelectedData((prevData) => ({
      ...prevData,
      selectedPackage: e.target.value,
    }));
  };
  const handleMaterialTypeChange = (e) => {
    setSelectedData((prevData) => ({
      ...prevData,
      selectedMaterialType: e.target.value,
    }));
  };
  const handleViaCoveringChange = (e) => {
    setSelectedData((prevData) => ({
      ...prevData,
      selectedViaCovering: e.target.value,
    }));
  };
  const handleGoldThicknessChange = (e) => {
    setSelectedData((prevData) => ({
      ...prevData,
      selectedGoldThickness: e.target.value,
    }));
  };
  const handleBoardOutlineToleranceChange = (e) => {
    setSelectedData((prevData) => ({
      ...prevData,
      selectedBoardOutlineTolerance: e.target.value,
    }));
  };
  const handleFlyingProbeTestChange = (e) => {
    setSelectedData((prevData) => ({
      ...prevData,
      selectedFlyingProbeTest: e.target.value,
    }));
  };
  const handleEdgesRailsChange = (e) => {
    setSelectedData((prevData) => ({
      ...prevData,
      selectedEdgesRails: e.target.value,
    }));
  };
  const handleConfirmFileChange = (e) => {
    const selectedValue = e.target.value;
    setEdgeAndCastellatedState({
      ...edgeAndCastellatedState,
      confirmFile: selectedValue
    });
  };
  const handleRemoveOrderNumberChange = (e) => {
    const selectedValue = e.target.value;
    setEdgeAndCastellatedState({
      ...edgeAndCastellatedState,
      removeOrderNumber: selectedValue
    });
  };
  const handleGoldFingersChange = (e) => {
    const selectedValue = e.target.value;
    setEdgeAndCastellatedState({
      ...edgeAndCastellatedState,
      goldFingers: selectedValue
    });
  };
  const handleCastellatedHolesChange = (e) => {
    const selectedValue = e.target.value;
    setEdgeAndCastellatedState({
      ...edgeAndCastellatedState,
      castellatedHoles: selectedValue
    });
  };
  const handleFingerChamferedChange = (e) => {
    const selectedValue = e.target.value;
    setEdgeAndCastellatedState({
      ...edgeAndCastellatedState,
      fingerChamfered: selectedValue
    });
  };
  const handleEdgeChange = (e) => {
    const selectedValue = e.target.value;
    setEdgeAndCastellatedState({
      ...edgeAndCastellatedState,
      edgePlating: selectedValue
    });
  };
  const handleImageChange = (e) => {
    setSelectedData((prevData) => ({
      ...prevData,
      selectedImage: e.target.value,
    }));
  };

  const handleOzChange = (e) => {
    setSelectedData((prevData) => ({
      ...prevData,
      selectedOz: e.target.value,
    }));
  };
  const handleProductTypeChange = (e) => {
    setSelectedData((prevData) => ({
      ...prevData,
      selectedProductType: e.target.value,
    }));
  };
  const handleEdgesChange = (e) => {
    setSelectedData((prevData) => ({
      ...prevData,
      selectedEdges: e.target.value,
    }));
  };
  const handlePcbQtyChange = (e) => {
    const selectedValue = parseInt(e.target.value);
    setSelectedData((prevData) => ({
      ...prevData,
      selectedPcbQty: selectedValue,
    }));
    setPcbQtyVisible(false);
  };
  const handleDeliveryChange = (e) => {
    setSelectedData((prevData) => ({
      ...prevData,
      selectedDelivery: e.target.value,
    }));
  };
  const handleSilkscreenChange = (e) => {
    setSelectedData((prevData) => ({
      ...prevData,
      selectedSilkscreen: e.target.value,
    }));
  };
  const handleThicknessChange = (e) => {
    setSelectedData((prevData) => ({
      ...prevData,
      selectedThickness: e.target.value,
    }));
  };
  const handleColorChange = (e) => {
    setSelectedData((prevData) => ({
      ...prevData,
      selectedColor: e.target.value,
    }));
  };
  const handleSurfaceChange = (e) => {
    setSelectedData((prevData) => ({
      ...prevData,
      selectedSurface: e.target.value,
    }));
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
  const handleCooperTypeChange = (e) => {
    setSelectedData((prevData) => ({
      ...prevData,
      selectedCooperType: e.target.value,
    }));
  };
  const handleDesignChange = (e) => {
    setSelectedData((prevData) => ({
      ...prevData,
      selectedDesign: e.target.value,
    }));
  };
  const handleCoverlayThicknessChange = (e) => {
    setSelectedData((prevData) => ({
      ...prevData,
      selectedCoverlayThickness: e.target.value,
    }));
  };
  const handleNumberChange = (e) => {
    setSelectedData((prevData) => ({
      ...prevData,
      selectedNumber: parseInt(e.target.value, 10),
    }));
  };
  const saveJsonToFile = () => {
  const jsonData1 = JSON.stringify(selectedData, null, 27);
  const jsonData2 = JSON.stringify(edgeAndCastellatedState, null, 10);
  const jsonData3 = JSON.stringify(inputValues, null, 5);

  const blob = new Blob([jsonData1, jsonData2, jsonData3 ], { type: 'application/json' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'data.json';

  const clickEvent = new MouseEvent('click');
  a.dispatchEvent(clickEvent);

  URL.revokeObjectURL(url);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
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
  const toggleAdvancesOptVisibility = () => {
    setAdvancesOptVisible(!advancesOptVisible);
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <ModalForm
          pcbQty={pcbQty}
          selectedOption={selectedOption}
          inputValuesHeight={inputValues.height}
          inputValuesWidth={inputValues.width}
          handlePcbQtyChange={handlePcbQtyChange}
          handleInputWidthChange={(e) => handleInputValuesChange('width', e.target.value)}
          handleInputHeightChange={(e) => handleInputValuesChange('height', e.target.value)}
          handleOptionChange={handleOptionChange}
          baseMaterialImages={baseMaterialImages}
          handleImageChange={handleImageChange}
          selectedImage={selectedData.selectedImage}
          handleNumberChange={handleNumberChange}
          selectedNumber={selectedData.selectedNumber}
          pcbQtyOptions={pcbQtyOptions}
          productType={productType}
          selectedProductType={selectedData.selectedProductType}
          handleProductTypeChange={handleProductTypeChange}
          pcbQtyVisible={pcbQtyVisible}
          setPcbQtyVisible={setPcbQtyVisible}
          handlePCBQtyValue={handlePCBQtyValue}
          selectedPcbQty={selectedData.selectedPcbQty}
          currentNumbers={currentNumbers}

        />
        <Specifications
          specificationsVisible={specificationsVisible}
          toggleSpecificationsVisibility={toggleSpecificationsVisibility}
          selectedDesign={selectedData.selectedDesign}
          selectedMaterialType={selectedData.selectedMaterialType}
          currentMaterialType={currentMaterialType}
          handleMaterialTypeChange={handleMaterialTypeChange}
          handleDesignChange={handleDesignChange}
          currentSurface={currentSurface}
          inputValuesColumn={inputValues.column}
          inputValuesRow={inputValues.row}
          handleInputDesignChange={(e) => handleInputValuesChange('design', e.target.value)}
          handleInputColumnChange={(e) => handleInputValuesChange('column', e.target.value)}
          handleInputRowChange={(e) => handleInputValuesChange('row', e.target.value)}
          inputValueDesign={inputValues.design}
          selectedDelivery={selectedData.selectedDelivery}
          selectedThickness={selectedData.selectedThickness}
          handleDeliveryChange={handleDeliveryChange}
          currentColor={currentColor}
          handleColorChange={handleColorChange}
          handleSurfaceChange={handleSurfaceChange}
          selectedSurface={selectedData.selectedSurface}
          selectedColor={selectedData.selectedColor}
          handleThicknessChange={handleThicknessChange}
          handleSilkscreenChange={handleSilkscreenChange}
          selectedSilkscreen={selectedData.selectedSilkscreen}
          currentThickness={currentThickness}
          currentDelivery={currentDelivery}
          currentDesign={currentDesign}
          inputVisible={inputVisible}
          panelFormat={panelFormat}
          edgeRails={edgeRails}
          handleEdgesRailsChange={handleEdgesRailsChange}
          selectedEdgeRail={selectedData.selectedEdgeRail}
          edgeRailVisible={edgeRailVisible}
          currentColorSilkScreen={currentColorSilkScreen}
          goldThicknessVisible={goldThicknessVisible}
          handleGoldThicknessChange={handleGoldThicknessChange}
          currentGoldThickness={currentGoldThickness}
          selectedGoldThickness={selectedData.selectedGoldThickness}
          materialTypeVisible={materialTypeVisible}
          cooperTypeVisible={cooperTypeVisible}
          selectedCooperType={selectedData.selectedCooperType}
          currentCooperType={currentCooperType}
          handleCooperTypeChange={handleCooperTypeChange}
        />
        <HighOpt
          addOptFRVisible={addOptFRVisible}
          selectedCoverlayThickness={selectedData.selectedCoverlayThickness}
          currentCoverlayThickness={currentCoverlayThickness}
          handleCoverlayThicknessChange={handleCoverlayThicknessChange}
          layerStackup={layerStackup}
          handleMinViaChange={handleMinViaChange}
          selectedMinVia={selectedData.selectedMinVia}
          currentOz2={currentOz2}
          minVia={minVia}
          selectedLayerStackup={selectedData.selectedLayerStackup}
          selectedControl={edgeAndCastellatedState.control}
          selectedOz2={selectedData.selectedOz2}
          handleLayerStackupChange={handleLayerStackupChange}
          handleControlChange={handleControlChange}
          handleOz2Change={handleOz2Change}
          layerStackupVisible={layerStackupVisible}
          addOptVisible={addOptVisible}
          addOptFlexVisible={addOptFlexVisible}
          highOptVisible={highOptVisible}
          currentColorOz={currentColorOz}
          toggleHighOptVisibility={toggleHighOptVisibility}
          selectedOz={selectedData.selectedOz}
          handleOzChange={handleOzChange}
          selectedViaCovering={selectedData.selectedViaCovering}
          handleStiffenerChange={handleStiffenerChange}
          selectedBoardOutlineTolerance={selectedData.selectedBoardOutlineTolerance}
          selectedFlyingProbeTest={selectedData.selectedFlyingProbeTest}
          selectedConfirmFile={edgeAndCastellatedState.confirmFile}
          selectedSilkscreenStiffener={edgeAndCastellatedState.stiffener}
          selectedRemoveOrderNumber={edgeAndCastellatedState.removeOrderNumber}
          selectedGoldFingers={edgeAndCastellatedState.goldFingers}
          selectedCastellatedHoles={edgeAndCastellatedState.castellatedHoles}
          selectedEdgePlating={edgeAndCastellatedState.edgePlating}
          selectedFingerChamfered={edgeAndCastellatedState.fingerChamfered}
          boardTolerance={boardTolerance}
          optionsYesNo={optionsYesNo}
          removeOrderNumber={removeOrderNumber}
          handleViaCoveringChange={handleViaCoveringChange}
          handleBoardOutlineToleranceChange={handleBoardOutlineToleranceChange}
          handleFlyingProbeTestChange={handleFlyingProbeTestChange}
          handleConfirmFileChange={handleConfirmFileChange}
          handleRemoveOrderNumberChange={handleRemoveOrderNumberChange}
          handleGoldFingersChange={handleGoldFingersChange}
          handleCastellatedHolesChange={handleCastellatedHolesChange}
          handleEdgeChange={handleEdgeChange}
          currentEdgePlating={currentEdgePlating}
          currentViaCovering={currentViaCovering}
          currentFlyingProbeTest={currentFlyingProbeTest}
          edgesVisible={edgesVisible}
          handleEdgesChange={handleEdgesChange}
          selectedEdges={selectedEdges}
          design={design}
          currentCastellatedHoles={currentCastellatedHoles}
          fingerChamferedVisible={fingerChamferedVisible}
          handleFingerChamferedChange={handleFingerChamferedChange}
          stiffener={stiffener}
          emi={emi}
        />
        <AdvancesOptions
          toggleAdvancesOptVisibility={toggleAdvancesOptVisibility}
          currentKelvinTest={currentKelvinTest}
          optionsYesNo={optionsYesNo}
          selectedPackage={selectedData.selectedPackage}
          selectedSilkscreenTechnology={selectedData.selectedSilkscreenTechnology}
          selectedKelvinTest={edgeAndCastellatedState.kelvinTest}
          selectedPaper={edgeAndCastellatedState.paper}
          selectedAppearanceQuality={selectedData.selectedAppearanceQuality}
          handleKelvinTestChange={handleKelvinTestChange}
          handlePaperChange={handlePaperChange}
          handleAppearanceQualityChange={handleAppearanceQualityChange}
          handleSilkscreenTechnologyChange={handleSilkscreenTechnologyChange}
          handlePackageChange={handlePackageChange}
          advancesOptVisible={advancesOptVisible}
          currentAppearanceQuality={currentAppearanceQuality}
          currentSilkscreenTechnology={currentSilkscreenTechnology}
          packageBox={packageBox}
        />
        <SideForm
        saveJsonToFile={saveJsonToFile} />
      </form>

    </div>
  );
}

export default TotalForm;

