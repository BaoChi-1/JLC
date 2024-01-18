import React from "react";
function Item({
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
        <div className="radio-btn">
          {options.map((value, index) => (
            <label key={index} className="custom-radio-label">
              <span
                className={`custom-radio-text ${selectedValue === value ? 'selected' : ''}`}
                onClick={() => handleOptionClick(value)}
              >
                {` ${options[index]}`}
              </span>
            </label>
          ))}
        </div>
      </div>
    );
  }
  export default Item;