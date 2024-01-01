import React from 'react';


function ModalForm({
  handleSubmit,
  selectedOption,
  handlePcbQtyChange,
  inputValue,
  pcbQty,
  radioNumbers,
  handleInputChange,
  handleOptionChange,
  generatePcbQtyOptions,
  selectedImage,
  selectedNumber,
  handleNumberChange,
  baseMaterialImages,
  handleImageChange,
  layers,
  handleProductTypeChange,
  selectedProductType,
  productType
}) 

{
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className='content image-options'>
          <h2>Base Material</h2>
          {baseMaterialImages.map((imageName, index) => (
            <label key={index} className="image-option">
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
                style={{ width: '150px', height: '100px' }}
              />
               <div className='image-option'>{`${imageName}`}</div>
            </label>
          ))}
        </div>

        <div className='content'>
        <h2>Layers</h2>
        <div className="radio-btn">
            {radioNumbers.map((number, index) => (
              <label key={index}>
                <input
                   type="radio"
                   name="layers"
                   value={number}
                   checked={selectedNumber === number}
                   onChange={handleNumberChange}
                />
                {` ${layers[index]}`}
              </label>
            ))}
          </div>
        </div>
        
        <div className='content'>
        <h2>Dimensions</h2>
        <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
          />
          *
          <input
            type="text"
            placeholder="Введите что-то"
            value={inputValue}
            onChange={handleInputChange}
          />
          <select value={selectedOption} onChange={handleOptionChange}>
            <option value="100">100</option>
            <option value="200">200</option>
          </select>
        </div>


        <div className='content'>
        <h2>PCB Qty</h2>
        <select value={pcbQty} onChange={handlePcbQtyChange}>
            {generatePcbQtyOptions()}
          </select>
        </div>
        <div className='content'>
        <h2>Product Type</h2>
        <div className='product-opt'>
        {productType.map((productName, index) => (
            <label key={index}>
              <input
                type="radio"
                name="productType"
                value={productName}
                checked={selectedProductType === productName}
                onChange={handleProductTypeChange}
              />
               <div>{`${productName}`}</div>
            </label>
          ))}
        </div>
        </div>
        
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
}

export default ModalForm;
