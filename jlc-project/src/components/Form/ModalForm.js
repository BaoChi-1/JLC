import React, { useState, useEffect } from 'react';

function ModalForm({
  handleSubmit,
  selectedOption,
  inputValue,
  radioNumbers,
  handleInputChange,
  handleOptionChange,
  selectedImage,
  selectedNumber,
  handleNumberChange,
  baseMaterialImages,
  handleImageChange,
  layers,
  handleProductTypeChange,
  selectedProductType,
  productType,
  pcbQtyVisible,
  setPcbQtyVisible,
  handlePcbQtyChange,
  selectedPcbQty,
  pcbQty,
  handlePCBQtyValue,
  pcbQtyOptions
})


{
  const [isInitialRender, setIsInitialRender] = useState(true);

  useEffect(() => {
    if (isInitialRender) {
      handlePCBQtyValue(5);
      setIsInitialRender(false);
    }
  }, [isInitialRender, handlePCBQtyValue]);

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className='content image-options'>
          <h2>Base Material</h2>
          <div className='base-material'>
          {baseMaterialImages.map((imageName, index) => (
            <label key={index} className="custom-radio-label">
              <input
                type="radio"
                name="baseMaterial"
                value={imageName}
                checked={selectedImage === imageName}
                onChange={handleImageChange}
              />
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

        <div className='content'>
          <h2>Layers</h2>
          <div className="radio-btn">
            {radioNumbers.map((number, index) => (
              <label key={index} className="custom-radio-label">
                <input
                  type="radio"
                  name="layers"
                  value={number}
                  checked={selectedNumber === number}
                  onChange={handleNumberChange}
                  style={{ display: 'none' }}
                />
                <span
                  className={`custom-radio-text ${selectedNumber === number ? 'selected' : ''}`}
                  onClick={() => handleNumberChange({ target: { value: number } })}
                >
                  {` ${layers[index]}`}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className='dimen-opt'>
          <h2>Dimensions</h2>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
          />
          *
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
          />
          <select value={selectedOption} onChange={handleOptionChange}>
            <option value="mm">mm</option>
            <option value="inch">inch</option>
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

        <div className='content'>
          <h2>Product Type</h2>
          <div className='product-opt'>
            {productType.map((productName, index) => (
              <label key={index} className="custom-radio-label">
                <span
                  className={`custom-radio-text ${selectedProductType === productName ? 'selected' : ''}`}
                  onClick={() => handleProductTypeChange({ target: { value: productName } })}
                >
                  {`${productName}`}
                </span>
              </label>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
}

export default ModalForm;
