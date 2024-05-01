import React from "react";
import { useTranslation } from 'react-i18next';
function ColorItem({
    options,
    selectedValue,
    handleChange,
    title
  }) {
    const {t}= useTranslation();

    const handleOptionClick = (value) => {
      handleChange({ target: { value } });
      console.log(`Selected ${title}: ${value}`);
    };
    return (
      <div className='content'>
        <h2>{title}</h2>
        <div className="color-options">
          {Object.entries(options).map(([key, value], index) => (
            <label key={index} className="color-option-label">
                
              <span
                className={`color-option-text ${selectedValue === key ? 'selected' : ''}`}
                onClick={() => handleOptionClick(key)}
              >
                <div className="color-square" style={{ backgroundColor: key.toLowerCase() }}/>
                {t(key)}
              </span>
            </label>
          ))}
        </div>
      </div>
    );
  }
  export default ColorItem;