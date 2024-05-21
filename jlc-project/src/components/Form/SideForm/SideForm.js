import React from 'react';
import { useTranslation } from 'react-i18next';
function SideForm({
  saveJsonToFile,
  result
}) {
  
  const {t}= useTranslation();
    
  return (
    <div className="order">
        <div className='content'>
          <div className='el-detail'>
            <h2 className='fonts'>{t('price')}</h2>
            <span>{result && result.internetPayTotalmoney}</span>
            <p>{t('conv')}</p>
            <span> {result && result.convertedAmountRub}</span>
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
