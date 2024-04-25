import React from "react";
function Item({
    options,
    selectedValue,
    handleChange,
    title
  }) {
    const handleOptionClick = (value) => {
      handleChange(value);
      console.log(`Selected ${title}: ${value}`);
    };
    return (
      <div className='content'>
        <h2>{title}</h2>
        <div className="radio-btn">
          {Object.entries(options).map(([key,value], index) => (
            <label key={index} className="custom-radio-label">
              <span
                className={`custom-radio-text ${selectedValue === key ? 'selected' : ''}`}
                onClick={() => handleOptionClick(key)}
              >
                {` ${key}`}
              </span>
            </label>
          ))}
        </div>
      </div>
    );
  }
  export default Item;