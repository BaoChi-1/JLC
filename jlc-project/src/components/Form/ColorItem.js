import React from "react";
function ColorItem({
    options,
    selectedValue,
    handleChange,
    title
  }) {
    const handleOptionClick = (value) => {
      handleChange({ target: { value } });
      console.log(`Selected ${title}: ${value}`);
    };
    return (
      <div className='content'>
        <h2>{title}</h2>
        <div className="color-options">
          {options.map((value, index) => (
            <label key={index} className="color-option-label">
                
              <span
                className={`color-option-text ${selectedValue === value ? 'selected' : ''}`}
                onClick={() => handleOptionClick(value)}
              >
                <div className="color-square" style={{ backgroundColor: value.toLowerCase() }}/>
                {` ${options[index]}`}
              </span>
            </label>
          ))}
        </div>
      </div>
    );
  }
  export default ColorItem;