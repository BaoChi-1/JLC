import React, {useState} from 'react';
import ChargeDetail from './ChargeDetail';

function SideForm({
  saveJsonToFile
}) {
  
  const [chargeDetailVisible,setChargeDetailVisible]=useState(false);

  const handleChargeDetailVisible=()=>{
    setChargeDetailVisible((prevVisible) => !prevVisible);
  }

    
  return (
    <div className="order">
      <ChargeDetail
      handleChargeDetailVisible={handleChargeDetailVisible}
      chargeDetailVisible={chargeDetailVisible}
      setChargeDetailVisible={setChargeDetailVisible}
      />
      <h2 className='fonts'>Build Time</h2>
      <div className='el-detail'>
        <h2>PCB：</h2>
        <select></select>
        </div>
        <div className='content'>
        <div className='el-detail'>
        <h2 className='fonts'>Calculated Price</h2>
        <span></span>
        </div>
        <button className="sub" type="submit" onClick={saveJsonToFile}>ADD TO CART</button>
        </div>
    </div>
  );
}

export default SideForm;
