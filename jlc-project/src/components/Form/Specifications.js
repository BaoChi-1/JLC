import React from 'react';
import ColorItem from './ColorItem';
import FormVisibility from './FormVisibility';
import Item from './Item';
function Specifications({
  currentDelivery,
  selectedDelivery,
  panelFormat,
  currentColor,
  currentSurface,
  handleColorChange,
  handleSurfaceChange,
  selectedColor,
  selectedSurface,
  handleThicknessChange,
  selectedThickness,
  handleDesignChange,
  selectedDesign,
  inputValueDesign,
  handleInputDesignChange,
  currentDesign,
  handleSilkscreenChange,
  selectedSilkscreen,
  handleDeliveryChange,
  specificationsVisible,
  toggleSpecificationsVisibility,
  currentThickness,
  inputVisible,
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
handleCooperTypeChange
}) {
  return (
    <div className="specifications">
      <FormVisibility
        title="PCB Specifications"
        toggle={toggleSpecificationsVisibility}
      />
      {specificationsVisible && (
        <div>
          <div className='content'>
            <h2>Different Design</h2>
            <div className="flex items-center">
              <div className="radio-btn">
                {currentDesign.map((value, index) => (
                  <label key={index} className="custom-radio-label">
                    <span
                      className={`custom-radio-text ${selectedDesign === value ? 'selected' : ''}`}
                      onClick={() => handleDesignChange({ target: { value } })}
                    >
                      {` ${currentDesign[index]}`}
                    </span>
                  </label>
                ))}
              </div>
              {inputVisible && (
                <div className='dimen-input'>
                  <input
                    type="text"
                    value={inputValueDesign}
                    onChange={handleInputDesignChange}
                  />
                </div>
              )}


            </div>

          </div>
          <Item
            title="Delivery Format"
            options={currentDelivery}
            selectedValue={selectedDelivery}
            handleChange={handleDeliveryChange}
          />
          {panelFormat && (
            <div className='panel'>
              <h2>Panel Format</h2>
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
            </div>
          )}
          {edgeRailVisible && (
            <Item
              title="Edge Rails"
              options={edgeRails}
              selectedValue={selectedEdgeRail}
              handleChange={handleEdgesRailsChange}
            />
          )}
          <Item
            title="PCB Thickness"
            options={currentThickness}
            selectedValue={selectedThickness}
            handleChange={handleThicknessChange}
          />

          <ColorItem
            title="PCB Color"
            options={currentColor}
            selectedValue={selectedColor}
            handleChange={handleColorChange}
          />
          <ColorItem
            title="Silkscreen"
            options={currentColorSilkScreen}
            selectedValue={selectedSilkscreen}
            handleChange={handleSilkscreenChange}
          />
          {cooperTypeVisible&&(
              <Item
            title="Cooper Type"
            options={currentCooperType}
            selectedValue={selectedCooperType}
            handleChange={handleCooperTypeChange}
          />
          )}
          {materialTypeVisible && (
            <Item
            title="Material Type"
            options={currentMaterialType}
            selectedValue={selectedMaterialType}
            handleChange={handleMaterialTypeChange}
          />
          )}
          <Item
            title="Surface Finish"
            options={currentSurface}
            selectedValue={selectedSurface}
            handleChange={handleSurfaceChange}
          />
          {goldThicknessVisible && (
              <Item
                title="Gold Thickness"
                options={currentGoldThickness}
                selectedValue={selectedGoldThickness}
                handleChange={handleGoldThicknessChange}
              />
          )}


        </div>
      )}

    </div>
  );
}

export default Specifications;
