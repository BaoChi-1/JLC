import React, { useState, useEffect } from 'react';
import ModalForm from './ModalForm';
import "./Form.css"
import SideForm from "./SideForm/SideForm";
import Specifications from './Specifications';
import HighOpt from './HighOpt';
import AdvancesOptions from './AdvancesOptions';
import Header from '../Header/Header'
import { useTranslation } from 'react-i18next';
import axios from 'axios';

function TotalForm() {
  const { t } = useTranslation();
  const optionsYesNo = {
    'No': false,
    'Yes': true
  };
  const castellatedHoles = {
    'No': [false, 0],
    '1 side': [true, 1],
    '2 side': [true, 2],
    '3 side': [true, 3],
    '4 side': [true, 4]
  }
  const baseMaterialImages = {
    'FR-4': 1, 'Flex': 7, 'Aluminum': 2
  };
  const stiffener = {
    'Without': false,
    'Polyimide': 'Polyimide',
    'FR4': 'FR4',
    'Stainless Steel': 'Stainless Steel',
    '3M Tape': '3M Tape'
  };
  const emi = {
    'Without': false,
    'Both sides ( Black ,18um )': 'Both sides ( Black ,18um )',
    'Single side ( Black ,18um )': 'Single side ( Black ,18um )'
  };
  const cuttingMethod = {
    'Laser Cutting': 'Laser Cutting',
    'Punching': 'Punching'
  };
  const polyimideThickness = {
    '0.1mm': '0.1mm',
    '0.15mm': '0.15mm',
    '0.20mm': '0.20mm',
    '0.225mm': '0.225mm',
    '0.25mm': '0.25mm'
  };
  const fr4Thickness = {
    '1.6mm': '1.6mm',
    '1.2mm': '1.2mm',
    '0.8mm': '0.8mm',
    '0.6mm': '0.6mm',
    '1.0mm': '1.0mm',
    '0.4mm': '0.4mm',
    '0.2mm': '0.2mm',
    '0.1mm': '0.1mm'
  };
  const stainlessSteelThickness = {
    '0.3mm': '0.3mm',
    '0.2mm': '0.2mm',
    '0.1mm': '0.1mm'
  };
  const tapeThickness = {
    '3M 9077 (HT,0.05mm)': '3M 9077 (HT,0.05mm)',
    '3M468 (0.13mm)': '3M468 (0.13mm)'
  };
  const layers = {
    '1': '1', '2': '2', '4': '4', '6': '6', '8': '8', '10': '10',
    '12': '12', '14': '14', '16': '16', '18': '18', '20': '20'
  };
  const design = [
    1, 2, 3, 4
  ];
  const materialType = {
    'FR4-Standard TG 135-140': 'TG135',
    'FR-4 TG155': 'TG155',
    'FR-4 TG170': 'TG170'
  };
  const edgeRails = { 'No': false, 'On 2 Sides': 'On 2 Sides', 'On 4 Sides': 'On 4 Sides' };
  // const oz = {'1 oz': '1 oz', '2 oz': '2 oz'};
  // const productType = ['Industrial/Consumer electronics', 'Aerospace', 'Medical'];
  const deliveryOpt = { 'Single PCB': 'Single PCB', 'Panel By Customer': 'Panel By Customer', 'Panel By JLCPCB': 'Panel By JLCPCB' };
  const oz2 = { '0.5 oz': '0.5 oz', '1 oz': '1 oz', '2 oz': '2 oz' };
  const minVia = {
    '0.3mm/(0.4/0.45mm)': '0.3mm/(0.4/0.45mm)',
    '0.25mm/(0.35/0.4mm)': '0.25mm/(0.35/0.4mm)',
    '0.2mm/(0.3/0.35mm)': '0.2mm/(0.3/0.35mm)',
    '0.15mm/(0.25/0.3mm)': '0.15mm/(0.25/0.3mm)'
  };
  const appearanceQuality = { 'IPC Class 2 Standart': 'IPC Class 2 Standart', 'Superb Quality': 'Superb Quality' };
  // const silkscreenTechnology = ['Ink-jet/Screen Printing Silkscreen', 'High-definition Exposure Silkscreen', 'High-precision Printing Silkscreen'];
  // const packageBox = ['With JLCPCB logo', 'Blank Box'];
  const thickness = {
    '0.4': '0.4',
    '0.6': '0.6',
    '0.8': '0.8',
    '1.0': '1.0',
    '1.2': '1.2',
    '1.6': '1.6',
    '2.0': '2.0'
  };
  const color = {
    'Green': '绿',
    'Purple': '嘉立创紫',
    'Red': '红',
    'Yellow': '黄',
    'Blue': '蓝',
    'White': '白',
    'Black': '黑'
  };

  const surface = { 'HASL(with lead)': 'HASL(with lead)', 'LeadFree HASL': 'LeadFree HASL', 'ENIG': 'ENIG' };
  const stencilCountsOptions = [
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
  const goldThickness = { '1 U"': '1 U"', '2 U"': '2 U"' };
  const viaCovering = {
    'Tented': '过孔盖油',
    'Untented': "过孔开窗",
    'Plugged': "过孔塞油",
    'Epoxy Filled & Capped': "过孔塞树脂",
    'Copper paste Filled & Capped': '过孔塞铜浆'
  };
  const boardTolerance = { '±0.2 mm (Regular)': '±0.2 mm (Regular)', '±0.1 mm': '±0.1 mm' };
  const silkscreen = {
    'White': '白',
    'Black': '黑'
  };
  // const removeOrderNumber = ['No', 'Yes', 'Specify a location'];
  const flyingProbeTest = { 'Fully Test': 'Fully Test', 'Random Test': 'Fully Test', 'Not Test': 'Fully Test' };
  const cooperType = {
    'Electro-deposite': 'Electro-deposite',
    'Rolled Annealed': 'Rolled Annealed'
  };
  const coverlayThickness = {
    'PI:12.5um/AD:15um': 'PI:12.5um/AD:15um',
    'PI:25um/AD:25um': 'PI:25um/AD:25um'
  }
  const hours = {
    '24 hours (free expediting exclusive for SMT)': 20,
    '24 hours': 18,
    '12 hours': 12,
    '48 hours (free expediting)': 48,
    '72 hours (free expediting exclusive for SMT)': 70,
    '96 hours (4-5 days)': 96,
    '120 hours (5-6 days)': 120,
  }
  const [castHoles, setCastHoles] = useState({
    selectedCastellatedHoles: 'No'
  })
  const [inputValues, setInputValues] = useState({
    stencilLength: 100,
    stencilWidth: 100,
    column: null,
    row: null,
    stencilNumber: null,
    goldFingersThickness: null
  });
  const [stencilCounts, setstencilCounts] = useState(5);
  const [selectedOption, setSelectedOption] = useState("mm");
  const [selectedData, setSelectedData] = useState({
    produceOrderAccessId: "",
    addOrderSource: 4,
    guaranteeService: false,
    impedance: false,
    invoiceType: 11,
    orderType: 1,
    printHDChar: false,
    // selectedProductType: 'Industrial/Consumer electronics',
    stencilLayer: '2',
    selectedDelivery: 'Single PCB',
    plateType: 'FR-4',
    // selectedPcbQty: null,
    selectedCooperType: "Electro-deposite",
    stencilNumber: 1,
    adornColor: "Green",
    selectedSurface: "HASL(with lead)",
    stencilPly: '1.6',
    selectedGoldThickness: '1 U"',
    selectedCoverlayThickness: 'PI:12.5um/AD:15um',
    adornBestrow: 'Tented',
    selectedBoardOutlineTolerance: "±0.2 mm (Regular)",
    selectedFlyingProbeTest: "Fully Test",
    selectedLayerStackup: "No requirement",
    selectedMinVia: "0.3mm/(0.4/0.45mm)",
    selectedOz2: "0.5 oz",
    selectedEdgeRail: "No",
    selectedSilkscreen: 'White',
    selectedAppearanceQuality: "IPC Class 2 Standart",
    // selectedSilkscreenTechnology: "Ink-jet/Screen Printing Silkscreen",
    // selectedPackage: "With JLCPCB logo",
    tgBoardLevel: "FR4-Standard TG 135-140",
    selectedStiffener: "Without",
    selectedEmi: "Without",
    selectedCuttingMethod: "Laser Cutting",
    selectedEdges: null,
    selectedPolyimide: '0.1mm',
    selectedFR4: '1.6mm',
    selectedstainless: '0.3mm',
    selectedTape: '3M 9077 (HT,0.05mm)',
    selectedConductivity: '1W',
    selectedVoltage: '3000W',
    achieveHours: '24 hours',
    madeSmt: 'No',
    edgeGrinding: "No",
    halfHole: false,
    halfHoleNumber: 0,
    // confirmFile: "Yes",
    // removeOrderNumber: "Yes",
    goldFingers: "No",
    kelvinTest: "No",
    paper: "No",
    fingerChamfered: "No",
    control: "No",
    silkscreenStiffener: "No",
    madeSteel: "No",
  });

  const [currentMaterialType, setCurrentMaterialType] = useState(materialType);
  const [polyimideThicknessVisible, setpolyimideThicknessVisible] = useState(false);
  const [fr4ThicknessVisible, setfr4ThicknessVisible] = useState(false);
  const [stainlessSteelThicknessVisible, setstainlessSteelThicknessVisible] = useState(false);
  const [tapeThicknessVisible, settapeThicknessVisible] = useState(false);
  const [currentEdgePlating, setCurrentEdgePlating] = useState(optionsYesNo);
  const [currentCastellatedHoles, setCurrentCastellatedHoles] = useState(castellatedHoles);
  const [currentKelvinTest, setCurrentKelvinTest] = useState(optionsYesNo);
  const [currentViaCovering, setCurrentViaCovering] = useState(viaCovering);
  const [currentThickness, setCurrentThickness] = useState(thickness);
  const [currentGoldThickness, setCurrentGoldThickness] = useState(goldThickness);
  const [currentColor, setCurrentColor] = useState(color);
  // const [currentSilkscreenTechnology, setCurrentSilkscreenTechnology] = useState(silkscreenTechnology);
  const [currentOz2, setCurrentOz2] = useState(oz2);
  const [currentCoverlayThickness, setCurrentCoverlayThickness] = useState(coverlayThickness);
  const [currentDelivery, setCurrentDelivery] = useState(deliveryOpt);
  const [currentDesign, setCurrentDesign] = useState(design);
  const [currentCooperType, setCurrentCooperType] = useState(cooperType);
  const [currentColorSilkScreen, setCurrentColorSilkScreen] = useState(silkscreen);
  // const [currentColorOz, setCurrentOz] = useState(oz);
  const [currentFlyingProbeTest, setCurrentFlyingProbeTest] = useState(flyingProbeTest);
  const [currentSurface, setCurrentSurface] = useState(surface);
  const [currentNumbers, setCurrentNumbers] = useState(layers);
  const [currentAppearanceQuality, setCurrentAppearanceQuality] = useState(appearanceQuality);
  const [highOptVisible, setHighOptVisible] = useState(true);
  const [specificationsVisible, setSpecificationsVisible] = useState(true);
  const [pcbQtyVisible, setPcbQtyVisible] = useState(false);
  const [edgeRailVisible, setEdgeRailVisible] = useState(false);
  const [advancesOptVisible, setAdvancesOptVisible] = useState(true);
  const [panelFormat, setPanelFormat] = useState(false);
  const [inputVisible, setInputVisible] = useState(false);
  const [layerStackupVisible, setLayerStackupVisible] = useState(false);
  const [addOptVisible, setAddOptVisible] = useState(false);
  // const [edgesVisible, setEdgesVisible] = useState(false);
  const [fingerChamferedVisible, setFingerChamferedVisible] = useState(false);
  const [materialTypeVisible, setMaterialTypeVisible] = useState(false);
  const [cooperTypeVisible, setCooperTypeVisible] = useState(false);
  const [addOptFlexVisible, setAddOptFlexVisible] = useState(false);
  const [addOptFRVisible, setAddOptFRVisible] = useState(false);
  const [goldThicknessVisible, setGoldThicknessVisible] = useState(false);
  const [goldFingersThicknessVisible, setGoldFingersThicknessVisible] = useState(false);
  const [viaVisible, setViaVisible] = useState(false);
  const [addOptAluminiumVisible, setAddOptAluminiumVisible] = useState(false);
  const [currentHours, setCurrentHours] = useState(hours);
  const [inputValue, setInputValue] = useState('');
  useEffect(() => {
    if (stencilCounts < 50) {
      const updatedOptionsTest = Object.fromEntries(
        Object.entries(flyingProbeTest).slice(0, 1)
      );
      const updatedOptionsAppearanceQuality = Object.fromEntries(
        Object.entries(appearanceQuality).slice(0, 1)
      );
      setCurrentAppearanceQuality(updatedOptionsAppearanceQuality);
      setCurrentFlyingProbeTest(updatedOptionsTest);
    }
    else {
      const updatedOptionsTest = Object.fromEntries(
        Object.entries(flyingProbeTest).slice(0, 2)
      );
      setCurrentAppearanceQuality(appearanceQuality);
      setCurrentFlyingProbeTest(updatedOptionsTest);
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

    // if (selectedData.selectedProductType !== 'Industrial/Consumer electronics') {
    //   setCurrentKelvinTest(optionsYesNo.slice(1));
    //   selectedData.kelvinTest = ("Yes");
    // }
    // else {
    //   setCurrentKelvinTest(optionsYesNo);
    // }
    if (selectedData.stencilNumber > 1) {
      const updatedOptionsDelivery = Object.fromEntries(
        Object.entries(deliveryOpt).slice(1, 2)
      );
      setInputVisible(true);
      setCurrentDelivery(updatedOptionsDelivery);
    }
    else {
      setCurrentDelivery(deliveryOpt);

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
    }

    if (selectedData.control === "Yes") {
      setLayerStackupVisible(true);
    } else {
      setLayerStackupVisible(false);
    }
    if (selectedData.plateType === 'FR-4') {
      setAddOptAluminiumVisible(false)
      setViaVisible(true);
      setMaterialTypeVisible(true);
      setAddOptFRVisible(true);
      setCooperTypeVisible(false);
      setAddOptFlexVisible(false)
      if (selectedData.goldFingers === "Yes") {
        const updatedOptionsSurface = Object.fromEntries(
          Object.entries(surface).slice(2)
        );
        setCurrentSurface(updatedOptionsSurface);
        setSelectedData((prevData) => ({
          ...prevData,
          selectedSurface: "ENIG",
        }));
        setFingerChamferedVisible(true);
        if (selectedData.selectedSurface !== "ENIG") {

          alert('"ENIG" was automatically selected. If u wanna select other surface, please, select Gold Fingers with the value "No"');
        }
      }
      else {
        setCurrentSurface(surface);
        setFingerChamferedVisible(false);
      }

      if (selectedData.stencilLayer == 2) {
        if (selectedData.madeSmt === 'Yes') {
          const updatedOptionsHours = Object.fromEntries(
            Object.entries(hours).slice(0, 1)
          );
          setCurrentHours(updatedOptionsHours)
          setSelectedData((prevData) => ({
            ...prevData,
            achieveHours: "24 hours (free expediting exclusive for SMT)",
          }));
        } else {
          const updatedOptionsHours = Object.fromEntries(
            Object.entries(hours).slice(1, 4)
          );
          setCurrentHours(updatedOptionsHours)
          setSelectedData((prevData) => ({
            ...prevData,
            achieveHours: "24 hours",
          }));
        }
        const updatedOptionsMaterialType = Object.fromEntries(
          Object.entries(materialType).slice(0, 1)
        );
        setCurrentMaterialType(updatedOptionsMaterialType);
        const updatedOptionsYesNo = Object.fromEntries(
          Object.entries(optionsYesNo).slice(0, 1)
        );
        const updatedOptionsSilkscreen = Object.fromEntries(
          Object.entries(silkscreen).slice(0, 1)
        );
        const updatedOptionsVia = Object.fromEntries(
          Object.entries(viaCovering).slice(0, 4)
        );
        setCurrentEdgePlating(updatedOptionsYesNo);
        setCurrentViaCovering(updatedOptionsVia);
        setCurrentColorSilkScreen(updatedOptionsSilkscreen);
        if (selectedData.adornColor === "Red" || selectedData.adornColor === "Yellow") {
          // setCurrentOz(oz);
          const updatedOptionsThickness = Object.fromEntries(
            Object.entries(thickness).slice(1)
          );
          setCurrentThickness(updatedOptionsThickness);
        }
        else if (selectedData.adornColor === "White") {
          const updatedOptionsSilkscreen = Object.fromEntries(
            Object.entries(silkscreen).slice(1)

          );
          // setCurrentOz(oz);
          setCurrentColorSilkScreen(updatedOptionsSilkscreen);
          setSelectedData((prevData) => ({
            ...prevData,
            selectedSilkscreen: "Black",
          }));
        }
        // else if (selectedData.adornColor === "Black") {
        //   setCurrentOz(oz.slice(0, 1))
        // }
        // else {
        //   setCurrentOz(oz);
        // }

        if (selectedData.halfHole === "Yes") {
          const updatedOptionsLayers = Object.fromEntries(
            Object.entries(layers).slice(1)
          );
          // setEdgesVisible(true);
          setCurrentNumbers(updatedOptionsLayers);
        }
        else {
          // setEdgesVisible(false);
          setCurrentNumbers(layers);
        }
      }
      if (selectedData.stencilLayer == 1) {
        if (selectedData.madeSmt === 'Yes') {
          const updatedOptionsHours = Object.fromEntries(
            Object.entries(hours).slice(0, 1)
          );
          setCurrentHours(updatedOptionsHours)
          setSelectedData((prevData) => ({
            ...prevData,
            achieveHours: "24 hours (free expediting exclusive for SMT)",
          }));
        } else {
          const updatedOptionsHours = Object.fromEntries(
            Object.entries(hours).slice(3, 4)
          );
          setCurrentHours(updatedOptionsHours)
          setSelectedData((prevData) => ({
            ...prevData,
            achieveHours: "24 hours",
          }));
        }
        const updatedOptionsMaterialType = Object.fromEntries(
          Object.entries(materialType).slice(0, 1)
        );
        setCurrentMaterialType(updatedOptionsMaterialType);
        console.log(selectedData.stencilLayer, typeof selectedData.stencilLayer);
        const updatedOptions = Object.fromEntries(
          Object.entries(optionsYesNo).slice(0, 1)
        );
        const updatedOptionsCastellated = Object.fromEntries(
          Object.entries(castellatedHoles).slice(0, 1)
        );
        const updatedOptionsThickness = Object.fromEntries(
          Object.entries(thickness).slice(2)
        );
        const updatedOptionsVia = Object.fromEntries(
          Object.entries(viaCovering).slice(0, 2)
        );
        setCurrentEdgePlating(updatedOptions);
        setCurrentCastellatedHoles(updatedOptionsCastellated);
        setCurrentViaCovering(updatedOptionsVia);
        setCurrentThickness(updatedOptionsThickness);
        // setCurrentOz(oz.slice(0, 1));
        setCurrentFlyingProbeTest(flyingProbeTest);
        setSelectedData((prevData) => ({
          ...prevData,
          selectedFlyingProbeTest: "Not Test",
        }));

        if (selectedData.adornColor === "White") {
          const updatedOptionsSilkscreen = Object.fromEntries(
            Object.entries(silkscreen).slice(1)
          );
          setCurrentColorSilkScreen(updatedOptionsSilkscreen);
          setSelectedData((prevData) => ({
            ...prevData,
            selectedSilkscreen: "Black",
          }));
        }
        else {
          const updatedOptionsSilkscreen = Object.fromEntries(
            Object.entries(silkscreen).slice(0, 1)
          );
          setCurrentColorSilkScreen(updatedOptionsSilkscreen);
          setSelectedData((prevData) => ({
            ...prevData,
            selectedSilkscreen: "White",
          }));
        }

      }
      else if (selectedData.stencilLayer == 4) {
        if (selectedData.madeSmt === 'Yes') {
          const updatedOptionsHours = Object.fromEntries(
            Object.entries(hours).slice(4, 5)
          );
          setCurrentHours(updatedOptionsHours)
          setSelectedData((prevData) => ({
            ...prevData,
            achieveHours: "72 hours (free expediting exclusive for SMT)",
          }));
        } else {
          const updatedOptionsHours = {
            '48 hours (free expediting)': 48,
            '72 hours': 65,
            '24 hours': 24,
            'Normally 3-4 days': 72,
          }
          setCurrentHours(updatedOptionsHours)
          setSelectedData((prevData) => ({
            ...prevData,
            achieveHours: "24 hours",
          }));
        }
        const updatedOptionsThickness = Object.fromEntries(
          Object.entries(thickness).slice(2)
        );
        const updatedOptionsVia = Object.fromEntries(
          Object.entries(viaCovering).slice(1)
        );
        const updatedOptionsMaterialType = Object.fromEntries(
          Object.entries(materialType).slice(0, 2)
        );
        setCurrentThickness(updatedOptionsThickness);
        setCurrentViaCovering(updatedOptionsVia);
        setCurrentMaterialType(updatedOptionsMaterialType);
        setSelectedData((prevData) => ({
          ...prevData,
          adornBestrow: "Plugged",
        }));
        setAddOptVisible(true);

        if (selectedData.selectedProductType !== 'Industrial/Consumer electronics') {
          setSelectedData((prevData) => ({
            ...prevData,
            tgBoardLevel: "FR-4 TG155",
          }));
        }
        else {
          setSelectedData((prevData) => ({
            ...prevData,
            tgBoardLevel: "FR4-Standard TG 135-140",
          }));
        }

      }
      else if (selectedData.stencilLayer == 6 || selectedData.stencilLayer == 8 || selectedData.stencilLayer == 10
        || selectedData.stencilLayer == 12 || selectedData.stencilLayer == 14 || selectedData.stencilLayer == 16
        || selectedData.stencilLayer == 18 || selectedData.stencilLayer == 20) {
        const updatedOptionsSurface = Object.fromEntries(
          Object.entries(surface).slice(2)
        );
        const updatedOptionsThickness = Object.fromEntries(
          Object.entries(thickness).slice(2)
        );
        setAddOptVisible(true);
        setCurrentSurface(updatedOptionsSurface);
        setCurrentThickness(updatedOptionsThickness);
        setSelectedData((prevData) => ({
          ...prevData,
          selectedSurface: "ENIG",
        }));
        const updatedOptionsGoldThickness = Object.fromEntries(
          Object.entries(goldThickness).slice(1)
        );
        setCurrentGoldThickness(updatedOptionsGoldThickness);
        setSelectedData((prevData) => ({
          ...prevData,
          selectedGoldThickness: '2 U"',
        }));
        const filteredViaCovering = {
          'Copper paste Filled & Capped': viaCovering['Copper paste Filled & Capped'],
          'Epoxy Filled & Capped': viaCovering['Epoxy Filled & Capped']
        };
        filteredViaCovering['Epoxy Filled & Untented'] = '过孔开窗';

        setCurrentViaCovering(filteredViaCovering);
        setSelectedData((prevData) => ({
          ...prevData,
          adornBestrow: 'Epoxy Filled & Capped',
        }));

        if (selectedData.stencilLayer == 6) {
          if (selectedData.madeSmt === 'Yes') {
            const updatedOptionsHours = {
              '72 hours (free expediting exclusive for SMT)': 48,
            }
            setCurrentHours(updatedOptionsHours);
            setSelectedData((prevData) => ({
              ...prevData,
              achieveHours: "72 hours (free expediting exclusive for SMT)",
            }));
          } else {
            const updatedOptionsHours = {
              '72 hours': 72,
              '96 hours': 96,
              'Normally 5-6 days': 120
            }
            setCurrentHours(updatedOptionsHours);
            setSelectedData((prevData) => ({
              ...prevData,
              achieveHours: "Normally 5-6 days",
            }));
          }
          const updatedOptionsMaterialType = Object.fromEntries(
            Object.entries(materialType).slice(0, 2)
          );
          setCurrentMaterialType(updatedOptionsMaterialType);
          // setCurrentOz(oz);
          setCurrentOz2(oz2);
          setCurrentColor(color);
          // setCurrentSilkscreenTechnology(silkscreenTechnology.slice(0, 2));
          if (selectedData.selectedMinVia !== "0.3mm/(0.4/0.45mm)") {
            const updatedOptionsMaterialType = Object.fromEntries(
              Object.entries(materialType).slice(1, 2)
            );
            setCurrentMaterialType(updatedOptionsMaterialType);
            setSelectedData((prevData) => ({
              ...prevData,
              tgBoardLevel: "FR-4 TG155",
            }));
          } else {
            const updatedOptionsMaterialType = Object.fromEntries(
              Object.entries(materialType).slice(0, 2)
            );
            setCurrentMaterialType(updatedOptionsMaterialType);
          }

        } else if (selectedData.stencilLayer == 8 || selectedData.stencilLayer == 10 || selectedData.stencilLayer == 12
          || selectedData.stencilLayer == 14 || selectedData.stencilLayer == 16 || selectedData.stencilLayer == 18
          || selectedData.stencilLayer == 20) {
          const updated = Object.fromEntries(
            Object.entries(color).filter(([key, value]) => key !== 'White')
          );
          const updatedOptionsMaterialType = Object.fromEntries(
            Object.entries(materialType).slice(1, 2)
          );
          const updatedOptionsOz2 = Object.fromEntries(
            Object.entries(oz2).slice(0, 2)
          );
          setCurrentColor(updated);
          setCurrentMaterialType(updatedOptionsMaterialType);
          setSelectedData((prevData) => ({
            ...prevData,
            tgBoardLevel: "FR-4 TG155",
          }));
          // setCurrentOz(oz.slice(0, 1));
          setCurrentOz2(updatedOptionsOz2);
          if (selectedData.stencilLayer == 8) {
            const updatedOptionsHours = {
              'Normally 6-7 days': 144,
            }
            setCurrentHours(updatedOptionsHours)
            setSelectedData((prevData) => ({
              ...prevData,
              achieveHours: 'Normally 6-7 days',
            }));

          } else if (selectedData.stencilLayer == 10) {
            const updatedOptionsHours = {
              'Normally 7-8 days': 168,
            }
            setCurrentHours(updatedOptionsHours)
            setSelectedData((prevData) => ({
              ...prevData,
              achieveHours: 'Normally 7-8 days',
            }));

          } else if (selectedData.stencilLayer == 12) {
            const updatedOptionsHours = {
              'Normally 8-9 days': 192,
            }
            setCurrentHours(updatedOptionsHours)
            setSelectedData((prevData) => ({
              ...prevData,
              achieveHours: 'Normally 8-9 days',
            }));

          } else if (selectedData.stencilLayer == 14) {
            const updatedOptionsHours = {
              'Normally 9-10 days': 216,
            }
            setCurrentHours(updatedOptionsHours)
            setSelectedData((prevData) => ({
              ...prevData,
              achieveHours: 'Normally 9-10 days',
            }));

          } else if (selectedData.stencilLayer == 16) {
            const updatedOptionsHours = {
              'Normally 10-11 days': 240,
            }
            setCurrentHours(updatedOptionsHours)
            setSelectedData((prevData) => ({
              ...prevData,
              achieveHours: 'Normally 10-11 days',
            }));

          } else if (selectedData.stencilLayer == 18) {
            const updatedOptionsHours = {
              'Normally 11-12 days': 264,
            }
            setCurrentHours(updatedOptionsHours)
            setSelectedData((prevData) => ({
              ...prevData,
              achieveHours: 'Normally 11-12 days',
            }));

          } else if (selectedData.stencilLayer == 20) {
            const updatedOptionsHours = {
              'Normally 12-13 days': 288,
            }
            setCurrentHours(updatedOptionsHours)
            setSelectedData((prevData) => ({
              ...prevData,
              achieveHours: 'Normally 12-13 days',
            }));

          }
          if (selectedData.stencilLayer == 10 || selectedData.stencilLayer == 12 || selectedData.stencilLayer == 14
            || selectedData.stencilLayer == 16 || selectedData.stencilLayer == 18 || selectedData.stencilLayer == 20) {
            if (selectedData.stencilLayer == 10) {
              const updatedOptionsHours = {
                '72 hours (free expediting exclusive for SMT)': 168,
              }
              setCurrentHours(updatedOptionsHours)
              setSelectedData((prevData) => ({
                ...prevData,
                achieveHours: "72 hours (free expediting exclusive for SMT)",
              }));

            }
            const updatedOptionsThickness = Object.fromEntries(
              Object.entries(thickness).slice(3)
            );
            const updatedOptionsMaterialType = Object.fromEntries(
              Object.entries(materialType).slice(2)
            );
            setCurrentThickness(updatedOptionsThickness);
            setCurrentMaterialType(updatedOptionsMaterialType);
            setSelectedData((prevData) => ({
              ...prevData,
              tgBoardLevel: "FR-4 TG170",
            }));
            if (selectedData.stencilLayer == 12) {
              if (selectedData.stencilLayer == 8) {
                const updatedOptionsHours = {
                  '72 hours (free expediting exclusive for SMT)': 144,
                }
                setCurrentHours(updatedOptionsHours)
                setSelectedData((prevData) => ({
                  ...prevData,
                  achieveHours: "72 hours (free expediting exclusive for SMT)",
                }));

              }
              const filteredThickness = {
                '1.2': thickness['1.2'],
                '1.6': thickness['1.6'],
                '2.0': thickness['2.0'],
                '2.5': thickness['2.5']
              };
              setCurrentThickness(filteredThickness);
            } else if (selectedData.stencilLayer == 14 || selectedData.stencilLayer == 16) {
              const filteredThickness = {
                '1.6': thickness['1.6'],
                '2.0': thickness['2.0'],
                '2.5': thickness['2.5']
              };
              setCurrentThickness(filteredThickness);
            } else if (selectedData.stencilLayer == 18 || selectedData.stencilLayer == 20) {
              const filteredThickness = {
                '2.0': thickness['2.0'],
                '2.5': thickness['2.5']
              };
              setCurrentThickness(filteredThickness);
              setSelectedData((prevData) => ({
                ...prevData,
                stencilPly: '2.0',
              }));
            }
          }
        }
      }
      else {
        setCurrentColor(color);
        setAddOptVisible(false);
        setCurrentCastellatedHoles(castellatedHoles);
        setCurrentThickness(thickness);
        // setCurrentOz(oz);
        setCurrentGoldThickness(goldThickness)
        setSelectedData((prevData) => ({
          ...prevData,
          selectedFlyingProbeTest: "Fully Test",
        }));
        setCurrentSurface(surface);

      }

    } else if (selectedData.plateType === "Aluminum") {
      const updatedOptionsHours = {
        'Normally 3 days': 72,
      }
      setCurrentHours(updatedOptionsHours)
      setSelectedData((prevData) => ({
        ...prevData,
        achieveHours: 'Normally 3 days',
      }));
      setAddOptAluminiumVisible(true)
      // const updatedOptionsLayers = Object.fromEntries(
      //   Object.entries(layers).slice(0, 1)
      // );
      setMaterialTypeVisible(false)
      setViaVisible(false);
      setAddOptFRVisible(true)
      setAddOptFlexVisible(false)
      const filteredLayers = {
        '1': layers['1'],
      };
      setCurrentNumbers(filteredLayers);
      setSelectedData((prevData) => ({
        ...prevData,
        stencilLayer: '1',
      }));
      const updatedOptionsThickness = Object.fromEntries(
        Object.entries(thickness).slice(3, -1)
      );
      setCurrentThickness(updatedOptionsThickness);
      setSelectedData((prevData) => ({
        ...prevData,
        stencilPly: "1.6",
      }));
      const filteredColor = Object.fromEntries(
        Object.entries(color).filter(([key, value]) => key === 'White' || key === "Black")
      );
      setCurrentColor(filteredColor);
      setSelectedData((prevData) => ({
        ...prevData,
        adornColor: "White",
      }));
      const updatedOptionsSurface = Object.fromEntries(
        Object.entries(surface).slice(0, 2)
      );
      setCurrentSurface(updatedOptionsSurface);
      setSelectedData((prevData) => ({
        ...prevData,
        selectedSurface: 'HASL(with lead)',
      }));
      setCurrentFlyingProbeTest(flyingProbeTest);
      setSelectedData((prevData) => ({
        ...prevData,
        selectedFlyingProbeTest: "Fully Test",
      }));
      const filteredGoldFingers = Object.fromEntries(
        Object.entries(goldThickness).slice(0, 1)
      );
      setCurrentGoldThickness(filteredGoldFingers);
      setSelectedData((prevData) => ({
        ...prevData,
        selectedGoldThickness: 'No',
      }));
      const filteredCastellated = Object.fromEntries(
        Object.entries(castellatedHoles).slice(0, 1)
      );
      setCurrentCastellatedHoles(filteredCastellated);
      setSelectedData((prevData) => ({
        ...selectedData,
        halfHole: 'No',
      }));

      if (selectedData.adornColor === "White") {
        const updatedOptionsSilkscreen = Object.fromEntries(
          Object.entries(silkscreen).slice(1)
        );
        setCurrentColorSilkScreen(updatedOptionsSilkscreen);
        setSelectedData((prevData) => ({
          ...prevData,
          selectedSilkscreen: "Black",
        }));
      }
      else {
        const updatedOptionsSilkscreen = Object.fromEntries(
          Object.entries(silkscreen).slice(0, 1)
        );
        setCurrentColorSilkScreen(updatedOptionsSilkscreen);
        setSelectedData((prevData) => ({
          ...prevData,
          selectedSilkscreen: "White",
        }));
      }

    }
  }, [
    selectedData.plateType, selectedData.stencilLayer, selectedData.stencilNumber, selectedData.selectedDelivery,
    selectedData.adornColor, selectedData.halfHole, selectedData.goldFingers, stencilCounts,
    selectedData.selectedSurface, selectedData.selectedProductType, selectedData.control, selectedData.selectedMinVia,
    selectedData.stencilPly, inputValues.design, selectedData.selectedStiffener, selectedData.madeSmt
  ]);
  useEffect(() => {
    if (selectedData.plateType === "Flex") {
      const updatedOptionsHours = {
        '48 hours (free expediting)': 48,
        '72 hours': 72,
        'Normally 4-5 days': 96,
      }
      setCurrentHours(updatedOptionsHours)
      setSelectedData((prevData) => ({
        ...prevData,
        achieveHours: "Normally 4-5 days",
      }));
      setAddOptAluminiumVisible(false)
      console.log("selectedData.selectedStiffener:", selectedData.selectedStiffener);
      if (selectedData.selectedStiffener === 'Polyimide') {
        console.log("Setting polyimideThicknessVisible to true");
        setpolyimideThicknessVisible(true)
      } else if (selectedData.selectedStiffener === 'FR-4') {
        console.log("Setting fr4ThicknessVisible to true");
        setfr4ThicknessVisible(true);
      } else if (selectedData.selectedStiffener === 'Stainless Steel') {
        console.log("Setting stainlessSteelThicknessVisible to true");
        setstainlessSteelThicknessVisible(true);
      } else if (selectedData.selectedStiffener === '3M Tape') {
        console.log("Setting tapeThicknessVisible to true");
        settapeThicknessVisible(true);
      } else {
        console.log("Setting all thicknessVisible states to false");
        setpolyimideThicknessVisible(false);
        setfr4ThicknessVisible(false);
        setstainlessSteelThicknessVisible(false);
        settapeThicknessVisible(false);
      }

      // if (!inputValues.length && !stencilCounts.length) {
      setMaterialTypeVisible(false);
      const updatedOptionsLayers = Object.fromEntries(
        Object.entries(layers).slice(0, 2)
      );
      setAddOptFRVisible(false);
      setCurrentNumbers(updatedOptionsLayers);
      const filteredColor = Object.fromEntries(
        Object.entries(color).filter(([key, value]) => key === 'White' || key === "Yellow" || key === "Black")
      );
      setSelectedData((prevData) => ({
        ...prevData,
        stencilLayer: '2',
        adornColor: "Yellow"
      }));
      const updatedOptionsCooperType = Object.fromEntries(
        Object.entries(cooperType).slice(0, 1)
      );
      setCurrentColor(filteredColor);
      setCooperTypeVisible(true);
      setCurrentCooperType(updatedOptionsCooperType);
      setAddOptFlexVisible(true);
      const updatedOptionsSurface = Object.fromEntries(
        Object.entries(surface).slice(2)
      );
      setCurrentSurface(updatedOptionsSurface);
      setSelectedData((prevData) => ({
        ...prevData,
        selectedSurface: 'ENIG',
      }));
      if (selectedData.goldFingers === "Yes") {
        setGoldFingersThicknessVisible(true);
      } else {
        setGoldFingersThicknessVisible(false);
      }

      if (selectedData.stencilLayer == 2) {
        const filteredThickness = {
          '0.11': thickness['0.11'],
          '0.12': thickness['0.12'],
          '0.2': thickness['0.2']
        };
        setCurrentThickness(filteredThickness);
        setSelectedData((prevData) => ({
          ...prevData,
          stencilPly: '0.11'
        }));
        if (selectedData.stencilPly === 0.11) {
          const updatedOptionsCoverlayThickness = Object.fromEntries(
            Object.entries(coverlayThickness).slice(0, 1)
          );
          setCurrentCoverlayThickness(updatedOptionsCoverlayThickness);
          setSelectedData((prevData) => ({
            ...prevData,
            selectedCoverlayThickness: "PI:12.5um/AD:15um",
          }));
        } else if (selectedData.stencilPly === 0.12) {
          const updatedOptionsCoverlayThickness = Object.fromEntries(
            Object.entries(coverlayThickness).slice(0, 1)
          );
          setCurrentCoverlayThickness(updatedOptionsCoverlayThickness)
          setSelectedData((prevData) => ({
            ...prevData,
            selectedCoverlayThickness: "PI:12.5um/AD:15um",
          }));
        } else {
          const updatedOptionsCoverlayThickness = Object.fromEntries(
            Object.entries(coverlayThickness).slice(1)
          );
          setCurrentCoverlayThickness(updatedOptionsCoverlayThickness)
          setSelectedData((prevData) => ({
            ...prevData,
            selectedCoverlayThickness: "PI:25um/AD:25um",
          }));
        }
      } else {
        const filteredThickness = {
          '0.7': thickness['0.7'],
          '0.11': thickness['0.11']
        };
        setCurrentThickness(filteredThickness);
        setSelectedData((prevData) => ({
          ...prevData,
          stencilPly: '0.7'
        }));
      }
    }
    // }
  }, [
    selectedData.plateType, selectedData.stencilNumber, selectedData.selectedDelivery, selectedData.halfHole,
    selectedData.goldFingers, stencilCounts, selectedData.selectedSurface, selectedData.selectedProductType,
    selectedData.control, selectedData.selectedMinVia, inputValues.design, selectedData.selectedStiffener
  ])
  const handleCastellatedHolesChange = (field, value) => {
    const [halfHole, halfHoleNumber] = castellatedHoles[value];

    setSelectedData(prevData => ({
      ...prevData,
      halfHole: halfHole,
      halfHoleNumber: halfHoleNumber
    }));

    setCastHoles({
      ...castHoles,
      [field]: value,
    });

    console.log(halfHole, halfHoleNumber);
  };


  const handleEnterKeyPress = () => {
    if (inputValues.stencilNumber > 1) {
      const updatedOptionsDelivery = Object.fromEntries(
        Object.entries(deliveryOpt).slice(1, 2)
      );
      setCurrentDelivery(updatedOptionsDelivery);
    }
    else {
      setCurrentDelivery(deliveryOpt);
    }
  };
  const handlePcbQtyChange = (e) => {
    const selectedValue = parseInt(e.target.value);
    setSelectedData((prevData) => ({
      ...prevData,
      selectedPcbQty: selectedValue,
    }));
    setPcbQtyVisible(false);
  };
  const [errors, setErrors] = useState({
    stencilLength: null,
    stencilWidth: null,
    column: null,
    row: null,
    stencilNumber: null,
    goldFingersThickness: null
  });
  const handleInputValuesChange = (field, value) => {
    setInputValues(prevInputValues => {
      const newInputValues = {
        ...prevInputValues,
        [field]: !isNaN(value) ? Number(value) : prevInputValues[field]
      };
      if (field === 'column' || field === 'row') {
        if (isNaN(value)) {
          setErrors({ ...errors, [field]: `Значение для поля ${field} должно быть числом.` });
        } else if (field === 'column' && Number(value) < newInputValues.row) {
          setErrors({ ...errors, column: `Значение столбца должно быть больше или равно значению строки.` });
        } else {
          setErrors({ ...errors, [field]: null });
        }
      } else {
        if (isNaN(value)) {
          setErrors({ ...errors, [field]: `Значение для поля ${field} должно быть числом.` });
        } else {
          setErrors({ ...errors, [field]: null });
        }
      }
      return newInputValues;
    });
  };

  const handleOptValuesChange = (field, value) => {
    setSelectedData({
      ...selectedData,
      [field]: value,
    })
  }
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const [result, setResult] = useState(null);

  const saveJsonToFile = async() => {
    const {
      produceOrderAccessId,
      addOrderSource,
      guaranteeService,
      impedance,
      invoiceType,
      orderType,
      printHDChar,
      stencilLayer,
      plateType,
      stencilNumber,
      adornColor,
      stencilPly,
      adornBestrow,
      tgBoardLevel,
      achieveHours,
      madeSmt,
      edgeGrinding,
      halfHole,
      halfHoleNumber,
      madeSteel
    } = selectedData;
    const finalData = {
      produceOrderAccessId,
      addOrderSource,
      guaranteeService,
      impedance,
      invoiceType,
      orderType,
      printHDChar,
      stencilLayer: stencilLayer.toString(),
      plateType: baseMaterialImages[plateType],
      stencilNumber,
      adornColor: color[adornColor],
      stencilPly: stencilPly.toString(),
      adornBestrow: viaCovering[adornBestrow],
      tgBoardLevel: materialType[tgBoardLevel],
      achieveHours: hours[achieveHours],
      madeSmt: optionsYesNo[madeSmt],
      edgeGrinding: optionsYesNo[edgeGrinding],
      halfHole,
      halfHoleNumber,
      madeSteel: optionsYesNo[madeSteel],
      ...inputValues,
    };
    try {
const response = await axios.post('http://localhost:5000/calculate-internet-pay', finalData);
setResult(response.data);
} catch (error) {
console.error('Ошибка:', error);
}
    
    if (inputValues.stencilNumber !== null) {
      finalData.stencilNumber = parseInt(inputValues.stencilNumber);
    } else {
      finalData.stencilNumber = parseInt(selectedData.stencilNumber);
    }
    const jsonData = JSON.stringify(finalData, null, 2);
    const blob = new Blob([jsonData], { type: 'application/json' });
    // const url = URL.createObjectURL(blob);
    // const a = document.createElement('a');
    // a.href = url;
    // a.download = 'data.json';
    // const clickEvent = new MouseEvent('click');
    // a.dispatchEvent(clickEvent);
    // URL.revokeObjectURL(url);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handlePCBQtyValue = (value) => {
    setstencilCounts(value);
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
      <Header></Header>

      <form className="form" onSubmit={handleSubmit}>
        <ModalForm
          stencilCounts={stencilCounts}
          selectedOption={selectedOption}
          inputValuesstencilLength={inputValues.stencilLength}
          inputValuesstencilWidth={inputValues.stencilWidth}
          handlePcbQtyChange={handlePcbQtyChange}
          handleInputstencilWidthChange={(e) => handleInputValuesChange('stencilWidth', e.target.value)}
          handleInputstencilLengthChange={(e) => handleInputValuesChange('stencilLength', e.target.value)}
          handleOptionChange={handleOptionChange}
          baseMaterialImages={baseMaterialImages}
          handleImageChange={(e) => handleOptValuesChange('plateType', e.target.value)}
          plateType={selectedData.plateType}
          handleNumberChange={(e) => handleOptValuesChange('stencilLayer', e.target.value)}
          stencilLayer={selectedData.stencilLayer}
          stencilCountsOptions={stencilCountsOptions}
          // productType={productType}
          selectedProductType={selectedData.selectedProductType}
          handleProductTypeChange={(e) => handleOptValuesChange('selectedProductType', e.target.value)}
          pcbQtyVisible={pcbQtyVisible}
          setPcbQtyVisible={setPcbQtyVisible}
          handlePCBQtyValue={handlePCBQtyValue}
          selectedPcbQty={selectedData.selectedPcbQty}
          currentNumbers={currentNumbers}
          errorLength={errors.stencilLength}
          errorWidth={errors.stencilWidth}


        />
        <Specifications
          specificationsVisible={specificationsVisible}
          toggleSpecificationsVisibility={toggleSpecificationsVisibility}
          selectedDesign={selectedData.stencilNumber}
          selectedMaterialType={selectedData.tgBoardLevel}
          currentMaterialType={currentMaterialType}
          handleMaterialTypeChange={(e) => handleOptValuesChange('tgBoardLevel', e.target.value)}
          handleDesignChange={(e) => handleOptValuesChange('stencilNumber', e.target.value)}
          currentSurface={currentSurface}
          handleEnterKeyPress={handleEnterKeyPress}
          inputValuesColumn={inputValues.column}
          inputValuesRow={inputValues.row}
          handleInputDesignChange={(e) => handleInputValuesChange('stencilNumber', e.target.value)}
          handleInputColumnChange={(e) => handleInputValuesChange('column', e.target.value)}
          handleInputRowChange={(e) => handleInputValuesChange('row', e.target.value)}
          inputValueDesign={inputValues.design}
          selectedDelivery={selectedData.selectedDelivery}
          stencilPly={selectedData.stencilPly}
          handleDeliveryChange={(e) => handleOptValuesChange('selectedDelivery', e.target.value)}
          currentColor={currentColor}
          handleColorChange={(e) => handleOptValuesChange('adornColor', e.target.value)}
          handleSurfaceChange={(e) => handleOptValuesChange('selectedSurface', e.target.value)}
          selectedSurface={selectedData.selectedSurface}
          adornColor={selectedData.adornColor}
          handleThicknessChange={(e) => handleOptValuesChange('stencilPly', e.target.value)}
          handleSilkscreenChange={(e) => handleOptValuesChange('selectedSilkscreen', e.target.value)}
          selectedSilkscreen={selectedData.selectedSilkscreen}
          currentThickness={currentThickness}
          currentDelivery={currentDelivery}
          currentDesign={currentDesign}
          inputVisible={inputVisible}
          panelFormat={panelFormat}
          edgeRails={edgeRails}
          handleEdgesRailsChange={(e) => handleOptValuesChange('selectedEdgeRail', e.target.value)}
          selectedEdgeRail={selectedData.selectedEdgeRail}
          edgeRailVisible={edgeRailVisible}
          currentColorSilkScreen={currentColorSilkScreen}
          goldThicknessVisible={goldThicknessVisible}
          handleGoldThicknessChange={(e) => handleOptValuesChange('selectedGoldThickness', e.target.value)}
          currentGoldThickness={currentGoldThickness}
          selectedGoldThickness={selectedData.selectedGoldThickness}
          materialTypeVisible={materialTypeVisible}
          cooperTypeVisible={cooperTypeVisible}
          selectedCooperType={selectedData.selectedCooperType}
          currentCooperType={currentCooperType}
          handleCooperTypeChange={(e) => handleOptValuesChange('selectedCooperType', e.target.value)}
          errorNumber={errors.stencilNumber}
          errorRow={errors.row}
          errorColumn={errors.column}

        />
        <HighOpt
          addOptFRVisible={addOptFRVisible}
          selectedCoverlayThickness={selectedData.selectedCoverlayThickness}
          currentCoverlayThickness={currentCoverlayThickness}
          handleCoverlayThicknessChange={(e) => handleOptValuesChange('selectedCoverlayThickness', e.target.value)}
          layerStackup={layerStackup}
          handleMinViaChange={(e) => handleOptValuesChange('selectedMinVia', e.target.value)}
          inputValuesGoldFingersThickness={inputValues.goldFingersThickness}
          handleInputGoldFingersThicknessChange={(e) => handleInputValuesChange('goldFingersThickness', e.target.value)}
          selectedMinVia={selectedData.selectedMinVia}
          currentOz2={currentOz2}
          minVia={minVia}
          cuttingMethod={cuttingMethod}
          handleFR4Change={(e) => handleOptValuesChange('selectedFR4', e.target.value)}
          selectedFR4={selectedData.selectedFR4}
          handlePolyimideChange={(e) => handleOptValuesChange('selectedPolyimide', e.target.value)}
          selectedPolyimide={selectedData.selectedPolyimide}
          handleStainlessChange={(e) => handleOptValuesChange('selectedstainless', e.target.value)}
          selectedstainless={selectedData.selectedstainless}
          handleTapeChange={(e) => handleOptValuesChange('selectedTape', e.target.value)}
          selectedTape={selectedData.selectedTape}
          polyimideThicknessVisible={polyimideThicknessVisible}
          fr4ThicknessVisible={fr4ThicknessVisible}
          stainlessSteelThicknessVisible={stainlessSteelThicknessVisible}
          tapeThicknessVisible={tapeThicknessVisible}
          polyimideThickness={polyimideThickness}
          fr4Thickness={fr4Thickness}
          stainlessSteelThickness={stainlessSteelThickness}
          tapeThickness={tapeThickness}
          handleCuttingMethodChange={(e) => handleOptValuesChange('selectedCuttingMethod', e.target.value)}
          selectedCuttingMethod={selectedData.selectedCuttingMethod}
          handleEmiChange={(e) => handleOptValuesChange('selectedEmi', e.target.value)}
          selectedEmi={selectedData.selectedEmi}
          selectedLayerStackup={selectedData.selectedLayerStackup}
          selectedControl={selectedData.control}
          selectedOz2={selectedData.selectedOz2}
          handleLayerStackupChange={(e) => handleOptValuesChange('selectedLayerStackup', e.target.value)}
          handleControlChange={(e) => handleOptValuesChange('control', e.target.value)}
          handleOz2Change={(e) => handleOptValuesChange('selectedOz2', e.target.value)}
          layerStackupVisible={layerStackupVisible}
          addOptVisible={addOptVisible}
          addOptFlexVisible={addOptFlexVisible}
          highOptVisible={highOptVisible}
          viaVisible={viaVisible}
          addOptAluminiumVisible={addOptAluminiumVisible}
          // currentColorOz={currentColorOz}
          toggleHighOptVisibility={toggleHighOptVisibility}
          adornBestrow={selectedData.adornBestrow}
          handleStiffenerChange={(e) => handleOptValuesChange('selectedStiffener', e.target.value)}
          handleSilkscreenStiffenerChange={(e) => handleOptValuesChange('silkscreenStiffener', e.target.value)}
          selectedSilkscreenStiffener={selectedData.silkscreenStiffener}
          selectedBoardOutlineTolerance={selectedData.selectedBoardOutlineTolerance}
          selectedFlyingProbeTest={selectedData.selectedFlyingProbeTest}
          // selectedConfirmFile={selectedData.confirmFile}
          selectedStiffener={selectedData.selectedStiffener}
          // selectedRemoveOrderNumber={selectedData.removeOrderNumber}
          selectedGoldFingers={selectedData.goldFingers}
          selectedCastellatedHoles={castHoles.selectedCastellatedHoles}
          handleCastellatedHolesChange={(e) => handleCastellatedHolesChange('selectedCastellatedHoles', e.target.value)}
          // halfHoleNumber={selectedData.halfHoleNumber}
          selectedEdgePlating={selectedData.edgeGrinding}
          selectedFingerChamfered={selectedData.fingerChamfered}
          boardTolerance={boardTolerance}
          optionsYesNo={optionsYesNo}
          // removeOrderNumber={removeOrderNumber}
          handleViaCoveringChange={(e) => handleOptValuesChange('adornBestrow', e.target.value)}
          handleBoardOutlineToleranceChange={(e) => handleOptValuesChange('selectedBoardOutlineTolerance', e.target.value)}
          handleFlyingProbeTestChange={(e) => handleOptValuesChange('selectedFlyingProbeTest', e.target.value)}
          // handleConfirmFileChange={handleConfirmFileChange}
          // handleRemoveOrderNumberChange={handleRemoveOrderNumberChange}
          handleGoldFingersChange={(e) => handleOptValuesChange('goldFingers', e.target.value)}
          handleEdgeChange={(e) => handleOptValuesChange('edgeGrinding', e.target.value)}
          currentEdgePlating={currentEdgePlating}
          currentViaCovering={currentViaCovering}
          currentFlyingProbeTest={currentFlyingProbeTest}
          // edgesVisible={edgesVisible}
          handleEdgesChange={(e) => handleOptValuesChange('selectedEdges', e.target.value)}
          selectedEdges={selectedData.selectedEdges}
          design={design}
          currentCastellatedHoles={currentCastellatedHoles}
          fingerChamferedVisible={fingerChamferedVisible}
          handleFingerChamferedChange={(e) => handleOptValuesChange('fingerChamfered', e.target.value)}
          stiffener={stiffener}
          emi={emi}
          goldFingersThicknessVisible={goldFingersThicknessVisible}
          selectedConductivity={selectedData.selectedConductivity}
          selectedVoltage={selectedData.selectedVoltage}
          handleConductivityChange={(e) => handleOptValuesChange('selectedConductivity', e.target.value)}
          handleVoltageChange={(e) => handleOptValuesChange('selectedVoltage', e.target.value)}
          madeSmt={selectedData.madeSmt}
          handleMadeSmtChange={(e) => handleOptValuesChange('madeSmt', e.target.value)}
          steelMesh={selectedData.madeSteel}
          handleSteelMeshChange={(e) => handleOptValuesChange('madeSteel', e.target.value)}
          errorGoldFingersThickness={errors.goldFingersThickness}
        />
        <AdvancesOptions
          toggleAdvancesOptVisibility={toggleAdvancesOptVisibility}
          currentKelvinTest={currentKelvinTest}
          optionsYesNo={optionsYesNo}
          // selectedPackage={selectedData.selectedPackage}
          // selectedSilkscreenTechnology={selectedData.selectedSilkscreenTechnology}
          selectedKelvinTest={selectedData.kelvinTest}
          selectedPaper={selectedData.paper}
          selectedAppearanceQuality={selectedData.selectedAppearanceQuality}
          handleKelvinTestChange={(e) => handleOptValuesChange('kelvinTest', e.target.value)}
          handlePaperChange={(e) => handleOptValuesChange('paper', e.target.value)}
          handleAppearanceQualityChange={(e) => handleOptValuesChange('selectedAppearanceQuality', e.target.value)}
          // handleSilkscreenTechnologyChange={handleSilkscreenTechnologyChange}
          // handlePackageChange={handlePackageChange}
          advancesOptVisible={advancesOptVisible}
          currentAppearanceQuality={currentAppearanceQuality}
          achieveHours={selectedData.achieveHours}
          handleAchieveHoursChange={(e) => handleOptValuesChange('achieveHours', e.target.value)}
          currentHours={currentHours}
        // currentSilkscreenTechnology={currentSilkscreenTechnology}
        // packageBox={packageBox}
        />
        <div>
          <h2>{t('notes')}</h2>
          <textarea
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder=""
          />
        </div>
        <SideForm
          saveJsonToFile={saveJsonToFile}
          result={result} />
      </form>

    </div>
  );
}

export default TotalForm;

