import React from "react";
import { useTranslation } from 'react-i18next';
function Item({
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
        <div className="radio-btn">
          {Object.entries(options).map(([key,value], index) => (
            <label key={index} className="custom-radio-label">
              <span
                className={`custom-radio-text ${selectedValue === key ? 'selected' : ''}`}
                onClick={() => handleOptionClick(key)}
              >
                {t(key)}
              </span>
            </label>
          ))}
        </div>
      </div>
    );
  }
  export default Item;