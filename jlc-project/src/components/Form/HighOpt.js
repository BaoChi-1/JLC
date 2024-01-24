import React from 'react';
import FormVisibility from './FormVisibility';
import Item from './Item';
function HighOpt({
  handleEdgesChange,
  selectedEdges,
  handleOzChange,
  selectedOz,
  selectedViaCovering,
  selectedBoardOutlineTolerance,
  selectedFlyingProbeTest,
  selectedConfirmFile,
  selectedRemoveOrderNumber,
  selectedGoldFingers,
  selectedCastellatedHoles,
  selectedEdgePlating,
  currentColorOz,
  boardTolerance,
  optionsYesNo,
  removeOrderNumber,
  edgesVisible,
  handleViaCoveringChange,
  handleBoardOutlineToleranceChange,
  handleFlyingProbeTestChange,
  handleConfirmFileChange,
  handleRemoveOrderNumberChange,
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
selectedSilkscreenStiffener,
stiffener,
emi,
}) {
  return (
    <div className="high-opt">
      <FormVisibility 
      title="High-spec Options"
      toggle={toggleHighOptVisibility}
      />
      {highOptVisible && (
      <div>
        <Item
          title="Outer Copper Weight"
          options={currentColorOz}
          selectedValue={selectedOz}
          handleChange={handleOzChange}
        />
        {addOptFlexVisible &&(
          <div>
            <Item
          title="Coverlay Thickness"
          options={currentCoverlayThickness}
          selectedValue={selectedCoverlayThickness}
          handleChange={handleCoverlayThicknessChange}
        />
        <Item
          title="Stiffener"
          options={stiffener}
          selectedValue={selectedCoverlayThickness}
          handleChange={handleCoverlayThicknessChange}
        />
        <Item
          title="EMI Shielding Film"
          options={emi}
          selectedValue={selectedCoverlayThickness}
          handleChange={handleCoverlayThicknessChange}
        />
        <Item
          title="Cutting Method"
          options={currentCoverlayThickness}
          selectedValue={selectedCoverlayThickness}
          handleChange={handleCoverlayThicknessChange}
        />
        <Item
          title="Silkscreen on Stiffener"
          options={optionsYesNo}
          selectedValue={selectedSilkscreenStiffener}
          handleChange={handleStiffenerChange}
        />
          </div>
        )}
      {addOptVisible&&(
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
        {layerStackupVisible&&(
            <Item
          title="Layer Stackup"
          options={layerStackup}
          selectedValue={selectedLayerStackup}
          handleChange={handleLayerStackupChange}
        />
        )}
        
        </div>
      )}
        {addOptFRVisible&&(
          <div>
            <Item
          title="Via Covering"
          options={currentViaCovering}
          selectedValue={selectedViaCovering}
          handleChange={handleViaCoveringChange}
        />
        <Item
          title="Board Outline Tolerance"
          options={boardTolerance}
          selectedValue={selectedBoardOutlineTolerance}
          handleChange={handleBoardOutlineToleranceChange}
        />        
        <Item
          title="Castellated Holes"
          options={currentCastellatedHoles}
          selectedValue={selectedCastellatedHoles}
          handleChange={handleCastellatedHolesChange}
        />
         <Item
          title="Edge Plating"
          options={currentEdgePlating}
          selectedValue={selectedEdgePlating}
          handleChange={handleEdgeChange}
        />
          </div>
        )}
        <Item
          title="Flying Probe Test"
          options={currentFlyingProbeTest}
          selectedValue={selectedFlyingProbeTest}
          handleChange={handleFlyingProbeTestChange}
        />
        <Item
          title="Confirm Production file"
          options={optionsYesNo}
          selectedValue={selectedConfirmFile}
          handleChange={handleConfirmFileChange}
        />
        <Item
          title="Remove Order Number"
          options={removeOrderNumber}
          selectedValue={selectedRemoveOrderNumber}
          handleChange={handleRemoveOrderNumberChange}
        />
        <Item
          title="Gold Fingers"
          options={optionsYesNo}
          selectedValue={selectedGoldFingers}
          handleChange={handleGoldFingersChange}
        />
        {fingerChamferedVisible &&(
            <Item
          title="30°finger chamfered"
          options={optionsYesNo}
          selectedValue={selectedFingerChamfered}
          handleChange={handleFingerChamferedChange}
        />
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
