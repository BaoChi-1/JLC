import React, { useState } from 'react';
import ChargeDetail from './ChargeDetail';
import { useTranslation } from 'react-i18next';

function SideForm({ saveJsonToFile, result }) {
  const { t } = useTranslation();
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div className="order">
      <div className='content'>
        <div className='el-detail'>
          <h2 className='fonts'>{t('price')}</h2>
          <span>{result && result.internetPayTotalmoney} ¥</span>
          <p>В рублях (RUB): {result && result.convertedAmountRub}</p>
          <h2 className='fonts'>{t('shippingEstimate')}</h2>
          <h2>{t('weight')}</h2>
          <span>{result && result.packageMass} грамм</span>
        </div>
        <div className="file-attachment" style={{ marginBottom: '20px' }}>
          <div>
            <label htmlFor="gerberFileInput" className="file-label">{t('Добавить gerber файл:')}</label>
          </div>
          <input
            id="gerberFileInput"
            type="file"
            accept=".zip,.rar"
            onChange={handleFileChange}
            lang="en"
          />
        </div>
        <button className="sub" type="submit" onClick={saveJsonToFile}>{t('addCart')}</button>
      </div>
    </div>
  );
}

export default SideForm;
