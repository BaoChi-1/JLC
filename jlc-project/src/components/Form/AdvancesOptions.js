import React from "react";
import FormVisibility from "./FormVisibility";
import Item from "./Item";
import { useTranslation } from 'react-i18next';
import ColorItem from './ColorItem'
import ItemCheckBox from'./ItemCheckBox'
function AdvancesOptions({
  panelFormat,
  currentColor,
  handleColorChange,
  adornColor,
  handleSilkscreenChange,
  selectedSilkscreen,
  specificationsVisible,
  handleInputColumnChange,
  handleInputRowChange,
  inputValuesColumn,
  inputValuesRow,
  selectedEdgeRail,
  handleEdgesRailsChange,
  edgeRails,
  edgeRailVisible,
  currentColorSilkScreen,
  goldThicknessVisible,
  handleGoldThicknessChange,
  currentGoldThickness,
  selectedGoldThickness,
  materialTypeVisible,
  selectedMaterialType,
currentMaterialType,
handleMaterialTypeChange,
cooperTypeVisible,
selectedCooperType,
currentCooperType,
handleCooperTypeChange,
errorRow,
errorColumn,
  toggleAdvancesOptVisibility,
  optionsYesNo,
  selectedKelvinTest,
  selectedPaper,
  selectedAppearanceQuality,
  handleKelvinTestChange,
  handlePaperChange,
  handleAppearanceQualityChange,  
  advancesOptVisible,
  currentAppearanceQuality,  
  currentKelvinTest,
  adornBestrow,
  selectedBoardOutlineTolerance,
  selectedFlyingProbeTest,
  selectedGoldFingers,
  selectedCastellatedHoles,
  selectedEdgePlating,
  boardTolerance,
  handleViaCoveringChange,
  handleBoardOutlineToleranceChange,
  handleFlyingProbeTestChange,
  viaVisible,
  handleGoldFingersChange,
  handleCastellatedHolesChange,
  handleEdgeChange,
  currentEdgePlating,
  currentViaCovering,
  currentFlyingProbeTest,
  currentCastellatedHoles,
  fingerChamferedVisible,
  selectedFingerChamfered,
  handleFingerChamferedChange,
  layerStackupVisible,
  addOptVisible,
  handleLayerStackupChange,
  handleControlChange,
  handleOz2Change,
  selectedLayerStackup,
  selectedControl,
  selectedOz2,
  currentOz2,
  minVia,
  handleMinViaChange,
  selectedMinVia,
  layerStackup,
  addOptFlexVisible,
  selectedCoverlayThickness,
  currentCoverlayThickness,
  handleCoverlayThicknessChange,
  addOptFRVisible,
  handleStiffenerChange,
  selectedStiffener,
  stiffener,
  handleSilkscreenStiffenerChange,
  selectedSilkscreenStiffener,
  emi,
  handleEmiChange,
  selectedEmi,
  cuttingMethod,
  handleCuttingMethodChange,
  selectedCuttingMethod,
  polyimideThicknessVisible,
  fr4ThicknessVisible,
  stainlessSteelThicknessVisible,
  tapeThicknessVisible,
  polyimideThickness,
  fr4Thickness,
  stainlessSteelThickness,
  tapeThickness,
  handleFR4Change,
  selectedFR4,
  handlePolyimideChange,
  selectedPolyimide,
  handleStainlessChange,
  selectedstainless,
  handleTapeChange,
  selectedTape,
  goldFingersThicknessVisible,
  inputValuesGoldFingersThickness,
handleInputGoldFingersThicknessChange,
addOptAluminiumVisible,
selectedConductivity,
selectedVoltage,
handleConductivityChange,
handleVoltageChange,
steelMesh,
handleSteelMeshChange,
errorGoldFingersThickness
}) {
  const {t}= useTranslation();
  return (
    <div >
      <FormVisibility
        title= {t('advancedOptions')}
        toggle={toggleAdvancesOptVisibility}
      />
       {specificationsVisible && (
        <div>
          {panelFormat && (
            <div className='panel'>
              <h2>{t('panel')}</h2>
              {errorRow && <div style={{ color: 'red' }}>{errorRow}</div>}
              <input
                type="text"
                value={inputValuesRow}
                onChange={handleInputRowChange}
              />
              *              
              <input
                type="text"
                value={inputValuesColumn}
                onChange={handleInputColumnChange}
              />
              {errorColumn && <div style={{ color: 'red' }}>{errorColumn}</div>}
            </div>
          )}
          {edgeRailVisible && (
            <Item
              title={t('edgeRails')}
              options={edgeRails}
              selectedValue={selectedEdgeRail}
              handleChange={handleEdgesRailsChange}
            />
          )}
          
          <ColorItem
            title={t('color')}
            options={currentColor}
            selectedValue={adornColor}
            handleChange={handleColorChange}
          />
          <ColorItem
            title={t('silkscreen')}
            options={currentColorSilkScreen}
            selectedValue={selectedSilkscreen}
            handleChange={handleSilkscreenChange}
          />
          {cooperTypeVisible&&(
              <Item
            title={t('cooperType')}
            options={currentCooperType}
            selectedValue={selectedCooperType}
            handleChange={handleCooperTypeChange}
          />
          )}
          {materialTypeVisible && (
            <Item
            title={t('materialType')}
            options={currentMaterialType}
            selectedValue={selectedMaterialType}
            handleChange={handleMaterialTypeChange}
          />
          )}
         
          {goldThicknessVisible && (
              <Item
                title={t('goldThickness')}
                options={currentGoldThickness}
                selectedValue={selectedGoldThickness}
                handleChange={handleGoldThicknessChange}
              />
          )}


        </div>
      )}
       {addOptFlexVisible && (
            <div>
              <Item
                title={t('coverlay')}
                options={currentCoverlayThickness}
                selectedValue={selectedCoverlayThickness}
                handleChange={handleCoverlayThicknessChange}
              />
              <ItemCheckBox
                title={t('stiffener')}
                options={stiffener}
                selectedValue={selectedStiffener}
                handleChange={handleStiffenerChange}
              />
              {polyimideThicknessVisible || Object.keys(selectedStiffener).some(key => key !== 'Without' && selectedStiffener['Polyimide']) && (
                <Item
                  title={t('polyimide')}
                  options={polyimideThickness}
                  selectedValue={selectedPolyimide}
                  handleChange={handlePolyimideChange}
                />
              )}

              {fr4ThicknessVisible || Object.keys(selectedStiffener).some(key => key !== 'Without' && selectedStiffener['FR4']) && (
                <Item
                  title={t('FR4')}
                  options={fr4Thickness}
                  selectedValue={selectedFR4}
                  handleChange={handleFR4Change}
                />
              )}
              {stainlessSteelThicknessVisible || Object.keys(selectedStiffener).some(key => key !== 'Without' && selectedStiffener['Stainless Steel']) && (
                  <Item
                  title={t('stainlessSteel')}
                  options={stainlessSteelThickness}
                  selectedValue={selectedstainless}
                  handleChange={handleStainlessChange}
                />
              )
              }
              {tapeThicknessVisible || Object.keys(selectedStiffener).some(key => key !== 'Without' && selectedStiffener['3M Tape']) && (
                <Item
                  title={t('3MTape')}
                  options={tapeThickness}
                  selectedValue={selectedTape}
                  handleChange={handleTapeChange}
                />
              )}
              <Item
                title={t('EMI')}
                options={emi}
                selectedValue={selectedEmi}
                handleChange={handleEmiChange}
              />
              <Item
                title={t('cuttingMethod')}
                options={cuttingMethod}
                selectedValue={selectedCuttingMethod}
                handleChange={handleCuttingMethodChange}
              />
              <Item
                title={t('silkscreenStiffener')}
                options={optionsYesNo}
                selectedValue={selectedSilkscreenStiffener}
                handleChange={handleSilkscreenStiffenerChange}
              />
            </div>
          )}
          {addOptVisible && (
            <div>
              <Item
                title={t('innerCopperWeight')}
                options={currentOz2}
                selectedValue={selectedOz2}
                handleChange={handleOz2Change}
              />
              <Item
                title={t('impedanceControl')}
                options={optionsYesNo}
                selectedValue={selectedControl}
                handleChange={handleControlChange}
              />
              <Item
                title={t('minvia')}
                options={minVia}
                selectedValue={selectedMinVia}
                handleChange={handleMinViaChange}
              />
              {layerStackupVisible && (
                <Item
                  title={t('layerStackup')}
                  options={layerStackup}
                  selectedValue={selectedLayerStackup}
                  handleChange={handleLayerStackupChange}
                />
              )}

            </div>
          )}
          {addOptFRVisible && (
            <div>
               
              {viaVisible&&(
                <div>
                  <Item
                title={t('viaCovering')}
                options={currentViaCovering}
                selectedValue={adornBestrow}
                handleChange={handleViaCoveringChange}
              />
              <Item
              title={t('tolerance')}
              options={boardTolerance}
              selectedValue={selectedBoardOutlineTolerance}
              handleChange={handleBoardOutlineToleranceChange}
            />
                </div>
                
              )}           
            
              <Item
                title={t('holes')}
                options={currentCastellatedHoles}
                selectedValue={selectedCastellatedHoles}
                handleChange={handleCastellatedHolesChange}
              />
              
              <Item
                title={t('steelMesh')}
                options={optionsYesNo}
                selectedValue={steelMesh}
                handleChange={handleSteelMeshChange}
              />
              <Item
              title={t('edgePlating')}
              options={currentEdgePlating}
              selectedValue={selectedEdgePlating}
              handleChange={handleEdgeChange}
            />
            </div>
          )}
          {addOptAluminiumVisible&&(
            <div>            
              <Item
            title={t('conductivity')}
            options={{'1W':'1W'}}
            selectedValue={selectedConductivity}
            handleChange={handleConductivityChange}
          />
          <Item
            title={t('voltage')}
            options={{'3000V':'3000V'}}
            selectedValue={selectedVoltage}
            handleChange={handleVoltageChange}
          />
            </div>
          )}
          <Item
            title={t('test')}
            options={currentFlyingProbeTest}
            selectedValue={selectedFlyingProbeTest}
            handleChange={handleFlyingProbeTestChange}
          />
          <Item
            title={t('goldFingers')}
            options={optionsYesNo}
            selectedValue={selectedGoldFingers}
            handleChange={handleGoldFingersChange}
          />
          {fingerChamferedVisible && (
            <Item
              title={t('fingerChamfered')}
              options={optionsYesNo}
              selectedValue={selectedFingerChamfered}
              handleChange={handleFingerChamferedChange}
            />
          )}
          {goldFingersThicknessVisible&&(
            <div className='dimen-opt'>
            <h2>{t('goldFingersThickness')}</h2>
            {errorGoldFingersThickness && <div style={{ color: 'red' }}>{errorGoldFingersThickness}</div>}
            <input
              type="text"
              value={inputValuesGoldFingersThickness}
              onChange={handleInputGoldFingersThicknessChange}
            />
            </div>
          )}
      {advancesOptVisible && (
        <div>
          <Item
            title={t('kelvinTest')}
            options={currentKelvinTest}
            selectedValue={selectedKelvinTest}
            handleChange={handleKelvinTestChange}
          />
          <Item
            title={t('paper')}
            options={optionsYesNo}
            selectedValue={selectedPaper}
            handleChange={handlePaperChange}
          />          
          <Item
            title={t('appearanceQuality')}
            options={currentAppearanceQuality}
            selectedValue={selectedAppearanceQuality}
            handleChange={handleAppearanceQualityChange}
          />
         
        </div>
      )}

    </div>

  );
}
export default AdvancesOptions;