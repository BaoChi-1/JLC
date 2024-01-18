import React from 'react';
import ColorItem from './ColorItem';
import FormVisibility from './FormVisibility';
import Item from './Item';
function Specifications({
  deliveryOpt,
  selectedDelivery,
  thickness,
  color,
  surface,
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
  design,
  handleSilkscreenChange,
  selectedSilkscreen,
  handleDeliveryChange,
  specificationsVisible,
  toggleSpecificationsVisibility
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
                {design.map((value, index) => (
                  <label key={index} className="custom-radio-label">
                    <span
                      className={`custom-radio-text ${selectedDesign === value ? 'selected' : ''}`}
                      onClick={() => handleDesignChange({ target: { value } })}
                    >
                      {` ${design[index]}`}
                    </span>
                  </label>
                ))}
              </div>
              <div className='dimen-input'>
                <input
                  type="text"
                  value={inputValueDesign}
                  onChange={handleInputDesignChange}
                />
              </div>

            </div>

          </div>
          <Item
          title="Delivery Format"
          options={deliveryOpt}
          selectedValue={selectedDelivery}
          handleChange={handleDeliveryChange}
        />
         <Item
          title="PCB Thickness"
          options={thickness}
          selectedValue={selectedThickness}
          handleChange={handleThicknessChange}
        />
        
          <ColorItem 
          title="PCB Color"
          options={color}
          selectedValue={selectedColor}
          handleChange={handleColorChange}
          />
          <ColorItem 
          title="Silkscreen"
          options={['White', 'Black']}
          selectedValue={selectedSilkscreen}
          handleChange={handleSilkscreenChange}
          />        
          <Item
          title="Surface Finish"
          options={surface}
          selectedValue={selectedSurface}
          handleChange={handleSurfaceChange}
        />
        </div>
      )}

    </div>
  );
}

export default Specifications;
