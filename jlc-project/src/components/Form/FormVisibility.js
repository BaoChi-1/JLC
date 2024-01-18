import React from "react";
function FormVisibility({
    toggle,
    title
  }) {
    
    return (

        <div className='toggle' onClick={toggle}>
        <h2 className='fonts'>{title}</h2>
        </div>

    );
  }
  export default FormVisibility;