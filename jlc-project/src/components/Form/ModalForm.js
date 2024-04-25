import React, { useState, useEffect } from 'react';
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
  handleProductTypeChange,
  selectedProductType,
  productType,
  pcbQtyVisible,
  setPcbQtyVisible,
  stencilCounts,
  handlePCBQtyValue,
  stencilCountsOptions
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
            {Object.entries(baseMaterialImages).map(([key, value], index) => (
              <label key={index} className="custom-radio-label">
                <img
                  src={`/images_bm/${key}.png`}
                  alt={key}
                  className={`custom-radio-image ${plateType === key ? 'selected' : ''}`}
                  onClick={() => handleImageChange({ target: { value: key } })}
                />
                <div className={`custom-radio-text ${plateType === key ? 'selected' : ''}`}>
                  {`${key}`}
                </div>
              </label>
            ))}
          </div>
        </div>
        
        <Item
        title="Layers"
        options={currentNumbers}
        selectedValue={stencilLayer}
        handleChange={handleNumberChange}
      />

        <div className='dimen-opt'>
          <h2>Dimensions</h2>
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
          <select value={selectedOption} onChange={handleOptionChange}>
            <option value="mm">mm</option>
            <option value="sm">sm</option>
          </select>
        </div>


        <div>
          <h2>PCB Qty</h2>
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
        {/* <Item
        title="Product Type"
        options={productType}
        selectedValue={selectedProductType}
        handleChange={handleProductTypeChange}
      /> */}
        
    </div>
  );
}

export default ModalForm;
