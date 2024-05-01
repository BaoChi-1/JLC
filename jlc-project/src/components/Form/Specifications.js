import React from 'react';
import ColorItem from './ColorItem';
import FormVisibility from './FormVisibility';
import Item from './Item';
import { useTranslation } from 'react-i18next';
function Specifications({
  currentDelivery,
  selectedDelivery,
  panelFormat,
  currentColor,
  handleEnterKeyPress,
  currentSurface,
  handleColorChange,
  handleSurfaceChange,
  adornColor,
  selectedSurface,
  handleThicknessChange,
  stencilPly,
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
handleCooperTypeChange,
errorNumber,
errorRow,
errorColumn
}) {
  const {t}= useTranslation();

  return (
    <div className="specifications">
      <FormVisibility
        title={t('spec')}
        toggle={toggleSpecificationsVisibility}
      />
      {specificationsVisible && (
        <div>
          <div className='content'>
            <h2>{t('design')}</h2>
            {errorNumber && <div style={{ color: 'red' }}>{errorNumber}</div>}
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
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleEnterKeyPress();
                      }
                    }}
                    
                  />
                </div>
              )}
            </div>
          </div>
          <Item
            title={t('delivery')}
            options={currentDelivery}
            selectedValue={selectedDelivery}
            handleChange={handleDeliveryChange}
          />
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
          <Item
            title={t('pcbThickness')}
            options={currentThickness}
            selectedValue={stencilPly}
            handleChange={handleThicknessChange}
          />

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
          <Item
            title={t('surfaceFinish')}
            options={currentSurface}
            selectedValue={selectedSurface}
            handleChange={handleSurfaceChange}
          />
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

    </div>
  );
}

export default Specifications;
