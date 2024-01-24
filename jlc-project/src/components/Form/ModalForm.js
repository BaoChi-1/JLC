import React, { useState, useEffect } from 'react';
import Item from './Item';
function ModalForm({
  selectedOption,
  currentNumbers,
  inputValuesHeight,
  inputValuesWidth,
  handleOptionChange,
  selectedImage,
  selectedNumber,
  handleNumberChange,
  handleInputWidthChange,
  handleInputHeightChange,
  baseMaterialImages,
  handleImageChange,
  handleProductTypeChange,
  selectedProductType,
  productType,
  pcbQtyVisible,
  setPcbQtyVisible,
  pcbQty,
  handlePCBQtyValue,
  pcbQtyOptions
}) {
  const [isInitialRender, setIsInitialRender] = useState(true);

  useEffect(() => {
    if (isInitialRender) {
      handlePCBQtyValue(5);
      setIsInitialRender(false);
    }
  }, [isInitialRender, handlePCBQtyValue]);

  return (
    <div>
      
        <div className='content image-options'>
          <h2>Base Material</h2>
          <div className='base-material'>
            {baseMaterialImages.map((imageName, index) => (
              <label key={index} className="custom-radio-label">
                <img
                  src={`/images_bm/${imageName}.png`}
                  alt={imageName}
                  className={`custom-radio-image ${selectedImage === imageName ? 'selected' : ''}`}
                  onClick={() => handleImageChange({ target: { value: imageName } })}
                />
                <div className={`custom-radio-text ${selectedImage === imageName ? 'selected' : ''}`}>
                  {`${imageName}`}
                </div>
              </label>
            ))}
          </div>
        </div>
        
        <Item
        title="Layers"
        options={currentNumbers}
        selectedValue={selectedNumber}
        handleChange={handleNumberChange}
      />

        <div className='dimen-opt'>
          <h2>Dimensions</h2>
          <input
            type="text"
            value={inputValuesWidth}
            onChange={handleInputWidthChange}
          />
          *
          <input
            type="text"
            value={inputValuesHeight}
            onChange={handleInputHeightChange}
          />
          <select value={selectedOption} onChange={handleOptionChange}>
            <option value="mm">mm</option>
            <option value="sm">sm</option>
          </select>
        </div>


        <div>
          <h2>PCB Qty</h2>
          <div className="custom-radio-text" onClick={() => setPcbQtyVisible(true)}>
            <span>{pcbQty}</span>
          </div>
          {pcbQtyVisible && (
            <div className="choicePcbQty h-screen w-screen">
              <div className="modal border-double">
                {pcbQtyOptions.map((value, index) => (
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
        title="Product Type"
        options={productType}
        selectedValue={selectedProductType}
        handleChange={handleProductTypeChange}
      />
        
    </div>
  );
}

export default ModalForm;
