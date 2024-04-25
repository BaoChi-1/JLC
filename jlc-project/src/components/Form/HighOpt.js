import React from 'react';
import FormVisibility from './FormVisibility';
import Item from './Item';
import ItemCheckBox from './ItemCheckBox';
function HighOpt({
  handleEdgesChange,
  selectedEdges,
  handleOzChange,
  selectedOz,
  adornBestrow,
  selectedBoardOutlineTolerance,
  selectedFlyingProbeTest,
  selectedConfirmFile,
  // selectedRemoveOrderNumber,
  selectedGoldFingers,
  selectedCastellatedHoles,
  selectedEdgePlating,
  currentColorOz,
  boardTolerance,
  optionsYesNo,
  // removeOrderNumber,
  edgesVisible,
  handleViaCoveringChange,
  handleBoardOutlineToleranceChange,
  handleFlyingProbeTestChange,
  handleConfirmFileChange,
  viaVisible,
  // handleRemoveOrderNumberChange,
  handleGoldFingersChange,
  handleCastellatedHolesChange,
  handleEdgeChange,
  highOptVisible,
  toggleHighOptVisibility,
  currentEdgePlating,
  currentViaCovering,
  currentFlyingProbeTest,
  design,
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
 madeSmt,
handleMadeSmtChange,
}) {
  return (
    <div className="high-opt">
      <FormVisibility
        title="High-spec Options"
        toggle={toggleHighOptVisibility}
      />
      {highOptVisible && (
        <div>
          {/* <Item
          title="Outer Copper Weight"
          options={currentColorOz}
          selectedValue={selectedOz}
          handleChange={handleOzChange}
        /> */}
          {addOptFlexVisible && (
            <div>
              <Item
                title="Coverlay Thickness"
                options={currentCoverlayThickness}
                selectedValue={selectedCoverlayThickness}
                handleChange={handleCoverlayThicknessChange}
              />
              <ItemCheckBox
                title="Stiffener"
                options={stiffener}
                selectedValue={selectedStiffener}
                handleChange={handleStiffenerChange}
              />
              {polyimideThicknessVisible || Object.keys(selectedStiffener).some(key => key !== 'Without' && selectedStiffener['Polyimide']) && (
                <Item
                  title="Polyimide Thickness"
                  options={polyimideThickness}
                  selectedValue={selectedPolyimide}
                  handleChange={handlePolyimideChange}
                />
              )}

              {fr4ThicknessVisible || Object.keys(selectedStiffener).some(key => key !== 'Without' && selectedStiffener['FR4']) && (
                <Item
                  title="FR4 Thickness"
                  options={fr4Thickness}
                  selectedValue={selectedFR4}
                  handleChange={handleFR4Change}
                />
              )}
              {stainlessSteelThicknessVisible || Object.keys(selectedStiffener).some(key => key !== 'Without' && selectedStiffener['Stainless Steel']) && (
                  <Item
                  title="Stainless Steel Thickness"
                  options={stainlessSteelThickness}
                  selectedValue={selectedstainless}
                  handleChange={handleStainlessChange}
                />
              )
              }
              {tapeThicknessVisible || Object.keys(selectedStiffener).some(key => key !== 'Without' && selectedStiffener['3M Tape']) && (
                <Item
                  title="3M Tape Thickness"
                  options={tapeThickness}
                  selectedValue={selectedTape}
                  handleChange={handleTapeChange}
                />
              )}
              <Item
                title="EMI Shielding Film"
                options={emi}
                selectedValue={selectedEmi}
                handleChange={handleEmiChange}
              />
              <Item
                title="Cutting Method"
                options={cuttingMethod}
                selectedValue={selectedCuttingMethod}
                handleChange={handleCuttingMethodChange}
              />
              <Item
                title="Silkscreen on Stiffener"
                options={optionsYesNo}
                selectedValue={selectedSilkscreenStiffener}
                handleChange={handleSilkscreenStiffenerChange}
              />
            </div>
          )}
          {addOptVisible && (
            <div>
              <Item
                title="Inner Copper Weight"
                options={currentOz2}
                selectedValue={selectedOz2}
                handleChange={handleOz2Change}
              />
              <Item
                title="Impedance Control"
                options={optionsYesNo}
                selectedValue={selectedControl}
                handleChange={handleControlChange}
              />
              <Item
                title="Min via hole size/diameter"
                options={minVia}
                selectedValue={selectedMinVia}
                handleChange={handleMinViaChange}
              />
              {layerStackupVisible && (
                <Item
                  title="Layer Stackup"
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
                title="Via Covering"
                options={currentViaCovering}
                selectedValue={adornBestrow}
                handleChange={handleViaCoveringChange}
              />
              <Item
              title="Board Outline Tolerance"
              options={boardTolerance}
              selectedValue={selectedBoardOutlineTolerance}
              handleChange={handleBoardOutlineToleranceChange}
            />
                </div>
                
              )}           
            
              <Item
                title="Castellated Holes"
                options={currentCastellatedHoles}
                selectedValue={selectedCastellatedHoles}
                handleChange={handleCastellatedHolesChange}
              />
              <Item
                title="SMT Patch"
                options={optionsYesNo}
                selectedValue={madeSmt}
                handleChange={handleMadeSmtChange}
              />
              <Item
              title="Edge Plating"
              options={currentEdgePlating}
              selectedValue={selectedEdgePlating}
              handleChange={handleEdgeChange}
            />
            </div>
          )}
          {addOptAluminiumVisible&&(
            <div>            
              <Item
            title="Thermal Conductivity"
            options={{'1W':'1W'}}
            selectedValue={selectedConductivity}
            handleChange={handleConductivityChange}
          />
          <Item
            title="Breakdown Voltage"
            options={{'3000V':'3000V'}}
            selectedValue={selectedVoltage}
            handleChange={handleVoltageChange}
          />
            </div>
          )}
          <Item
            title="Flying Probe Test"
            options={currentFlyingProbeTest}
            selectedValue={selectedFlyingProbeTest}
            handleChange={handleFlyingProbeTestChange}
          />

          {/* <Item
          title="Confirm Production file"
          options={optionsYesNo}
          selectedValue={selectedConfirmFile}
          handleChange={handleConfirmFileChange}
        /> */}
          {/* <Item
          title="Remove Order Number"
          options={removeOrderNumber}
          selectedValue={selectedRemoveOrderNumber}
          handleChange={handleRemoveOrderNumberChange}
        /> */}
          <Item
            title="Gold Fingers"
            options={optionsYesNo}
            selectedValue={selectedGoldFingers}
            handleChange={handleGoldFingersChange}
          />
          {fingerChamferedVisible && (
            <Item
              title="30°finger chamfered"
              options={optionsYesNo}
              selectedValue={selectedFingerChamfered}
              handleChange={handleFingerChamferedChange}
            />
          )}
          {goldFingersThicknessVisible&&(
            <div className='dimen-opt'>
            <h2>Gold Fingers Thickness</h2>
            <input
              type="text"
              value={inputValuesGoldFingersThickness}
              onChange={handleInputGoldFingersThicknessChange}
            />
            </div>
          )}

          {edgesVisible && (
            <Item
              title="Edges"
              options={design}
              selectedValue={selectedEdges}
              handleChange={handleEdgesChange}
            />
          )}

        </div>
      )}

    </div>
  );
}

export default HighOpt;
