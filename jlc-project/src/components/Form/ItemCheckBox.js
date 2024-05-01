import React, {useEffect } from "react";
import { useTranslation } from 'react-i18next';

function ItemCheckBox({
    options,
    selectedValue,
    handleChange,
    title
}) {
    const {t}= useTranslation();
    const handleOptionClick = (key) => {
        let updatedValue = { ...selectedValue };
        if (key === 'Without') {
            for (const optionKey in updatedValue) {
                updatedValue[optionKey] = false;            }
        } else if (key !== 'Without' && selectedValue['Without']) {
            updatedValue = { ...updatedValue, 'Without': false };
        }
        updatedValue = { ...updatedValue, [key]: !updatedValue[key] };
        handleChange({ target: { value: updatedValue } });
    };
    useEffect(() => {
        handleOptionClick(selectedValue);
    }, []);

    return (
        <div className='content'>
            <h2>{title}</h2>
            <div className="radio-btn">
                {Object.entries(options).map(([key, value], index) => (
                    <label key={index} className={`custom-checkbox-label ${selectedValue[key] ? 'selected' : ''}`}>
                        <input
                            type="checkbox"
                            checked={selectedValue[key]}
                            onChange={() => handleOptionClick(key)}
                        />
                        <span className="custom-checkbox-text">
                        {t(key)}
                        </span>
                    </label>
                ))}
            </div>
        </div>
    );
}

export default ItemCheckBox;
