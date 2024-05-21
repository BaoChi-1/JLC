import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Item from './Item';
function ModalForm({
  selectedOption,
  currentNumbers,
  inputValuesstencilLength,
  inputValuesstencilWidth,
  handleOptionChange,
  plateType,
  stencilLayer,
  handleNumberChange,
  handleInputstencilWidthChange,
  handleInputstencilLengthChange,
  baseMaterialImages,
  handleImageChange,
  currentSurface,
  selectedSurface,
  handleSurfaceChange,
  currentHours,
  achieveHours,
  handleAchieveHoursChange,
  pcbQtyVisible,
  setPcbQtyVisible,
  stencilCounts,
  handlePCBQtyValue,
  stencilCountsOptions,
  errorLength,
  errorWidth,
  handleMadeSmtChange,
  optionsYesNo,
  madeSmt,
  currentDelivery,
  selectedDelivery,
  handleDeliveryChange,
  handleInputDesignChange,
  errorNumber,
  currentDesign,
  selectedDesign,
  handleDesignChange,
  inputVisible,
  inputValueDesign,
  handleEnterKeyPress,
  stencilPly,
currentThickness,
handleThicknessChange
}) {
  const [isInitialRender, setIsInitialRender] = useState(true);
  const { t } = useTranslation();
  useEffect(() => {
    if (isInitialRender) {
      handlePCBQtyValue(5);
      setIsInitialRender(false);
    }
  }, [isInitialRender, handlePCBQtyValue]);

  return (
    <div>

      <div className='content image-options'>
        <h2>{t('base')}</h2>
        <div className='base-material'>
          {Object.entries(baseMaterialImages).map(([key, value], index) => (
            <label key={index} className="custom-radio-label">
              <img
                src={`${process.env.PUBLIC_URL}/images_bm/${key}.png`}
                alt={key}
                className={`custom-radio-image ${plateType === key ? 'selected' : ''}`}
                onClick={() => handleImageChange({ target: { value: key } })}
              />
              <div className={`custom-radio-text ${plateType === key ? 'selected' : ''}`}>
                {t(key)}
              </div>
            </label>
          ))}
        </div>
      </div>

      <Item
        title={t('layers')}
        options={currentNumbers}
        selectedValue={stencilLayer}
        handleChange={handleNumberChange}
      />

      <div className='dimen-opt'>
        <h2>{t('dimension')}</h2>
        {errorLength && <div style={{ color: 'red' }}>{errorLength}</div>}
        <input
          type="text"
          value={inputValuesstencilWidth}
          onChange={handleInputstencilWidthChange}
        />
        *
        <input
          type="text"
          value={inputValuesstencilLength}
          onChange={handleInputstencilLengthChange}
        />
        {errorWidth && <div style={{ color: 'red' }}>{errorWidth}</div>}
        <select value={selectedOption} onChange={handleOptionChange}>
          <option value="mm">mm</option>
          <option value="sm">sm</option>
        </select>
      </div>
      <div>
        <h2>{t('pcbQTY')}</h2>
        <div className="custom-radio-text" onClick={() => setPcbQtyVisible(true)}>
          <span>{stencilCounts}</span>
        </div>
        {pcbQtyVisible && (
          <div className="choicePcbQty h-screen w-screen">
            <div className="modal border-double">
              {stencilCountsOptions.map((value, index) => (
                <button
                  className="custom-radio-text"
                  key={index}
                  onClick={() => handlePCBQtyValue(value)}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      <Item
            title={t('pcbThickness')}
            options={currentThickness}
            selectedValue={stencilPly}
            handleChange={handleThicknessChange}
          />

      <Item
        title={t('surfaceFinish')}
        options={currentSurface}
        selectedValue={selectedSurface}
        handleChange={handleSurfaceChange}
      />
      <Item
        title={t('deliveryDate')}
        options={currentHours}
        selectedValue={achieveHours}
        handleChange={handleAchieveHoursChange}
      />
      <Item
        title={t('SMT')}
        options={optionsYesNo}
        selectedValue={madeSmt}
        handleChange={handleMadeSmtChange}
      />
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
      
    </div>
  );
}

export default ModalForm;
