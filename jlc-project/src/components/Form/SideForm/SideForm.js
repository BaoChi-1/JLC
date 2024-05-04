import React, {useState} from 'react';
import ChargeDetail from './ChargeDetail';
import { useTranslation } from 'react-i18next';
function SideForm({
  saveJsonToFile,
  result
}) {
  
  // const [chargeDetailVisible,setChargeDetailVisible]=useState(false);

  // const handleChargeDetailVisible=()=>{
  //   setChargeDetailVisible((prevVisible) => !prevVisible);
  // }
  const {t}= useTranslation();
    
  return (
    <div className="order">
      {/* <ChargeDetail
      handleChargeDetailVisible={handleChargeDetailVisible}
      chargeDetailVisible={chargeDetailVisible}
      setChargeDetailVisible={setChargeDetailVisible}
      /> */}
      {/* <h2 className='fonts'>Build Time</h2> */}
      {/* <div className='el-detail'>
        <h2>PCB：</h2>
        <select></select>
        </div> */}
        <div className='content'>
          <div className='el-detail'>
            <h2 className='fonts'>{t('price')}</h2>
            <span>{result && result.internetPayTotalmoney}</span>
            <p>Converted amount (RUB): {result && result.convertedAmountRub}</p>
            <h2 className='fonts'>{t('shippingEstimate')}</h2>
            <h2>{t('weight')}</h2>
            <span>{result && result.packageMass}</span>
            <span></span>
          </div>
          <button className="sub" type="submit" onClick={saveJsonToFile}>{t('addCart')}</button>
        </div>
      </div>
  );
}

export default SideForm;
