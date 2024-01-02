import React from 'react';

function ChargeDetail({
    chargeDetailVisible,
    handleChargeDetailVisible
}) {
  return (
    <div>
        <div>
            <h2 className='fonts' onClick={handleChargeDetailVisible}>Charge Details</h2>
            {chargeDetailVisible && (
        <div>
        <div className='el-detail'>
        <h2>Special Offer</h2>
        <span></span>
        </div>
        <div className='el-detail'>
        <h2>Via Covering</h2>
        <span></span>
        </div>
        <div className='el-detail'>
        <h2>Surface Finish</h2>
        <span></span>
        </div>
        <div className='el-detail'>
        <h2>Stencil</h2>
        <span></span>
        </div>
        </div>
      )}
        
        </div>
    </div>
  );
}

export default ChargeDetail;
