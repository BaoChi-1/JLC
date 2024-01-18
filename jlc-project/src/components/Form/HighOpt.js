import React from 'react';
import FormVisibility from './FormVisibility';
import Item from './Item';
function HighOpt({
  oz,
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
  viaCovering,
  boardTolerance,
  optionsYesNo,
  removeOrderNumber,
  flyingProbeTest,
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
  selectedImage

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
          options={oz}
          selectedValue={selectedOz}
          handleChange={handleOzChange}
        />

        <Item
          title="Via Covering"
          options={viaCovering}
          selectedValue={selectedViaCovering}
          handleChange={handleViaCoveringChange}
          isDisabled={selectedImage === 'FR-4'}
        />

        <Item
          title="Board Outline Tolerance"
          options={boardTolerance}
          selectedValue={selectedBoardOutlineTolerance}
          handleChange={handleBoardOutlineToleranceChange}
        />
        <Item
          title="Flying Probe Test"
          options={flyingProbeTest}
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
        <Item
          title="Castellated Holes"
          options={optionsYesNo}
          selectedValue={selectedCastellatedHoles}
          handleChange={handleCastellatedHolesChange}
        />
        <Item
          title="Edge Plating"
          options={optionsYesNo}
          selectedValue={selectedEdgePlating}
          handleChange={handleEdgeChange}
          isDisabled={selectedImage === 'FR-4'}
        />

      </div>
      )}

    </div>
  );
}

export default HighOpt;
