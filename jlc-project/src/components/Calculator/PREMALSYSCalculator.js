import React, { useState } from 'react';
import Header from '../Header/Header';
import './Calculator.css';
const PREMALSYSCalculator = () => {
  const [inputValues_1, setInputValues_1] = useState({
    Tj_1: 110,
    Rjs_1: 2,
    Lled_1: 3.3,
    Wled_1: 1.3,
    Pled_1: 3,
    Nled_1: 5,
    Gap_1: 25.4,
    hcopper_1: 35,
    lambdacopper_1: 400,
    hdiel_1: 100,
    lambdadiel_1: 1,
    hbase_1: 1.5,
    lambdabase_1: 200,
    hTIM_1: 20,
    lambdaTIM_1: 1,
    Ta_1: 45,
  });
  const [inputValues_2, setInputValues_2] = useState({
    Tj_2: 120,
    Rjs_2: 2,
    Lled_2: 3.3,
    Wled_2: 1.3,
    Pled_2: 3,
    Nled_2: 5,
    Gap_2: 25.4,
    hcopper_2: 35,
    lambdacopper_2: 400,
    hdiel_2: 100,
    lambdadiel_2: 2,
    hbase_2: 1.5,
    lambdabase_2: 200,
    hTIM_2: 20,
    lambdaTIM_2: 1,
    Ta_2: 45,
    p: 0.8,
    P_t: 3000,
    t: 8700,
    a: 0.5,
  });
  const [lifetime, setLifetime] = useState({
    a: 0.5,
    P_t: 2000,
    p: 0.8,
    t:1000
  });

  const [result, setResults] = useState(null);
  const handleInputValues_1 = (field, value) => {
    setInputValues_1(prevData => ({
      ...prevData,
      [field]:parseFloat(value)
    }));
  };
  const handleInputValues_2 = (field, value) => {
    setInputValues_2(prevData => ({
      ...prevData,
      [field]:parseFloat(value)
    }));
  };
  const handleLifetimeChange = (field, value) => {
    setLifetime(prevLifetime => ({
      ...prevLifetime,
      [field]: parseFloat(value),
    }));
  };
  const calculateResults = () => {
    const { 
      Tj_1, Rjs_1, Lled_1, Wled_1, Pled_1, Nled_1, Gap_1, hcopper_1, 
      lambdacopper_1, hdiel_1, lambdadiel_1, hbase_1, lambdabase_1, 
      hTIM_1, lambdaTIM_1, Ta_1, a1, B1
    } = inputValues_1;
    const { 
      Tj_2, Rjs_2, Lled_2, Wled_2, Pled_2, Nled_2, Gap_2, hcopper_2, 
      lambdacopper_2, hdiel_2, lambdadiel_2, hbase_2, lambdabase_2, 
      hTIM_2, lambdaTIM_2, Ta_2, a2, B2
    } = inputValues_2;
    const {a, p, P_t, t} = lifetime;
    const lambdaHS_1= 200;
    const Gapmm = Gap_1 / 1000;
    
    const AnglCoDi = 45;
    let LCopper = 2 * (Math.tan((AnglCoDi  * Math.PI) / 180) * hcopper_1 / 1000000) + Lled_1 / 1000;
    if (LCopper > Gapmm) {
      LCopper = Gapmm;
    }
    let WCopper = 2 * (Math.tan((AnglCoDi * Math.PI) / 180) * hcopper_1 / 1000000) + Wled_1 / 1000;
    if (WCopper > Gapmm) {
      WCopper = Gapmm;
    }
    const SCopper=LCopper*WCopper;
    const SCopperE = Math.pow(Lled_1 / 1000 * Wled_1 / 1000 * SCopper, 0.5);
    const SCopperEmm = Math.round(SCopperE * 1000000, 1);
    
    const AnglDiAl = Math.atan(lambdadiel_1 / lambdabase_1) * 180 / Math.PI;
    let LDi = 2 * (Math.tan((AnglDiAl * Math.PI) / 180) * hdiel_1 / 1000000) + LCopper;
    if (LDi > Gapmm) {
      LDi = Gapmm;
    }
    let WDi = 2 * (Math.tan((AnglDiAl * Math.PI) / 180) * hdiel_1 / 1000000) + WCopper;
    if (WDi > Gapmm) {
      WDi = Gapmm;
    }
    const SDiE = Math.pow(SCopper * LDi * WDi, 0.5);
    const SDiEmm = Math.round(SDiE * 1000000, 1);
    
    const AnglBaTIM = 26.6;
    let Lbase = 2 * (Math.tan((AnglBaTIM * Math.PI) / 180) * hbase_1 / 1000) + LDi;
    if (Lbase > Gapmm) {
      Lbase = Gapmm;
    }
    let Wbase = 2 * (Math.tan((AnglBaTIM * Math.PI) / 180) * hbase_1 / 1000) + WDi;
    if (Wbase > Gapmm) {
      Wbase = Gapmm;
    }
    const SbaseE = Math.pow(LDi * WDi * Lbase * Wbase, 0.5);
    const SbaseEmm = Math.round(SbaseE * 1000000, 1);
    
    const AnglTIMHS = Math.atan(lambdaTIM_1 / lambdaHS_1) * 180 / Math.PI;
    let LTIM = 2 * (Math.tan((AnglTIMHS * Math.PI) / 180) * hTIM_1 / 1000000) + Lbase;
    if (LTIM > Gapmm) {
      LTIM = Gapmm;
    }
    let WTIM = 2 * (Math.tan((AnglTIMHS * Math.PI) / 180) * hTIM_1 / 1000000) + Wbase;
    if (WTIM > Gapmm) {
      WTIM = Gapmm;
    }
    const STIME = Math.pow(Lbase * Wbase * LTIM * WTIM, 0.5);
    const STIMEmm = Math.round(STIME * 1000000, 1);
    
    const Rcopper = hcopper_1 / 1000000 / (lambdacopper_1 * SCopperE);
    const Rdiel = hdiel_1 / 1000000 / (lambdadiel_1 * SDiE);
    const Rbase = hbase_1 / 1000 / (lambdabase_1 * SbaseE);
    const RTIM = hTIM_1 / 1000000 / (lambdaTIM_1 * STIME);
    const Rj_tim = (Rjs_1 + Rcopper + Rdiel + Rbase + RTIM) / Nled_1;
    const deltaT = (273 + Tj_1) - (273 + Ta_1);
    const P_acceptable = deltaT / Rj_tim;
    const P_required = Pled_1 * Nled_1;
    
    let Rhsout;
    if (P_acceptable > P_required) {
      const Rhs= (deltaT / P_required - Rj_tim).toFixed(2);
      Rhsout = `" < ${Rhs}"`;
    } else {
      Rhsout = `"NO WAY"`;
    }

    const Gapmm_2 = Gap_2 / 1000;

  const AnglCoDi_2 = 45;
  const LCopper_2 = 2 * (Math.tan((AnglCoDi_2 * Math.PI) / 180) * hcopper_2 / 1000000) + Lled_2 / 1000;
  if (LCopper_2>Gapmm_2){
    LCopper_2=Gapmm_2;
} 
  const WCopper_2 = 2 * (Math.tan((AnglCoDi_2 * Math.PI) / 180) * hcopper_2 / 1000000) + Wled_2 / 1000;
  if (WCopper_2>Gapmm_2){
    WCopper_2=Gapmm_2;
}
const SCopper_2=LCopper_2*WCopper_2;
  const SCopperE_2 = Math.pow((Lled_2 / 1000) * (Wled_2 / 1000) * SCopper_2, 0.5);
  const SCopperEmm_2 = Math.round(SCopperE_2 * 1000000, 1);

  const AnglDiAl_2 = Math.atan(lambdadiel_2 / lambdabase_2) * 180 / Math.PI;
  const LDi_2 = 2 * (Math.tan((AnglDiAl_2 * Math.PI) / 180) * hdiel_2 / 1000000) + LCopper_2;
  if (LDi_2>Gapmm_2){
    LDi_2=Gapmm_2;
}
  const WDi_2 = 2 * (Math.tan((AnglDiAl_2 * Math.PI) / 180) * hdiel_2 / 1000000) + WCopper_2;
  if (WDi_2>Gapmm_2){
    WDi_2=Gapmm_2;
}
  const SDiE_2 = Math.pow(SCopper_2 * LDi_2 * WDi_2, 0.5);
  const SDiEmm_2 = Math.round(SDiE_2 * 1000000, 1);

  const AnglBaTIM_2 = 26.6;
  const Lbase_2 = 2 * (Math.tan((AnglBaTIM_2 * Math.PI) / 180) * hbase_2 / 1000) + LDi_2;
  if (Lbase_2>Gapmm_2){
    Lbase_2=Gapmm_2;
}
  const Wbase_2 = 2 * (Math.tan((AnglBaTIM_2 * Math.PI) / 180) * hbase_2 / 1000) + WDi_2;
  if (Wbase_2>Gapmm_2){
    Wbase_2=Gapmm_2;
}
  const SbaseE_2 = Math.pow(LDi_2 * WDi_2 * Lbase_2 * Wbase_2, 0.5);
  const SbaseEmm_2 = Math.round(SbaseE_2 * 1000000, 1);

  const AnglTIMHS_2 = Math.atan(lambdaTIM_2 / lambdaHS_1) * 180 / Math.PI;
  const LTIM_2 = 2 * (Math.tan((AnglTIMHS_2 * Math.PI) / 180) * hTIM_2 / 1000000) + Lbase_2;
  if (LTIM_2>Gapmm_2){
    LTIM_2=Gapmm_2;
}
  const WTIM_2 = 2 * (Math.tan((AnglTIMHS_2 * Math.PI) / 180) * hTIM_2 / 1000000) + Wbase_2;
  if (WTIM_2>Gapmm_2){
    WTIM_2=Gapmm_2;
}
  const STIME_2 = Math.pow(Lbase_2 * Wbase_2 * LTIM_2 * WTIM_2, 0.5);
  const STIMEmm_2 = Math.round(STIME_2 * 1000000, 1);

  const Rcopper_2 = hcopper_2 / 1000000 / (lambdacopper_2 * SCopperE_2);
  const Rdiel_2 = hdiel_2 / 1000000 / (lambdadiel_2 * SDiE_2);
  const Rbase_2 = hbase_2 / 1000 / (lambdabase_2 * SbaseE_2);
  const RTIM_2 = hTIM_2 / 1000000 / (lambdaTIM_2 * STIME_2);
  const Rj_tim_2 = (Rjs_2 + Rcopper_2 + Rdiel_2 + Rbase_2 + RTIM_2) / Nled_2;
  const deltaT_2 = (273 + Tj_2) - (273 + Ta_2);
  const P_acceptable_2 = deltaT_2 / Rj_tim_2;
  const P_required_2 = Pled_2 * Nled_2;
  let Rhsout_2 = '';
  if (P_acceptable_2 > P_required_2) {
    const Rhs_2 = (deltaT_2 / P_required_2 - Rj_tim_2).toFixed(2);
        Rhsout_2 = `< ${Rhs_2}`;
  } else {
    Rhsout_2 = 'NO WAY';
  }
   
// const p = 0.8;
// const P_t = 2000;
// const t = 1300;
// const a = 0.5;

const exponent = -a * t;
let B0;

if (exponent > 709) {
    B0 = 0;
    console.log("Экспонента слишком большая. Проверьте значения переменных.");
} else {
    B0 = P_t / Math.exp(exponent);
}

if (B0 === 0) {
    console.log("Деление на 0. Проверьте значения переменных.");
}
    const Lp_1 = Math.round(Math.log((100 * B0) / p) / a);
console.log(B0, -a * t );

  return {
    SCopperEmm,
    SDiEmm,
    SbaseEmm,
    STIMEmm,
    Rcopper,
    Rdiel,
    Rbase,
    RTIM,
    Rj_tim,
    P_acceptable,
    P_required,
    Rhsout,
    SCopperEmm_2, SDiEmm_2, SbaseEmm_2, STIMEmm_2, Rcopper_2, Rdiel_2, Rbase_2, RTIM_2, Rj_tim_2, P_acceptable_2, P_required_2, 
    Rhsout_2, Lp_1
    // , Lp_2
  };
};

  const fields = [
    { label: 'LED-Tj', name1: 'Tj_1', name2: 'Tj_2' },
    { label: 'LED-Rj-s', name1: 'Rjs_1', name2: 'Rjs_2' },
    { label: 'LED-lpad', name1: 'Lled_1', name2: 'Lled_2' },
    { label: 'LED-wpad', name1: 'Wled_1', name2: 'Wled_2' },
    { label: 'LED-P', name1: 'Pled_1', name2: 'Pled_2' },
    { label: 'LED-N', name1: 'Nled_1', name2: 'Nled_2' },
    { label: 'LED-Dist.', name1: 'Gap_1', name2: 'Gap_2' },
    { label: 'MCPCB-dcopper', name1: 'hcopper_1', name2: 'hcopper_2' },
    { label: 'MCPCB-λcopper', name1: 'lambdacopper_1', name2: 'lambdacopper_2' },
    { label: 'MCPCB-ddiel', name1: 'hdiel_1', name2: 'hdiel_2' },
    { label: 'MCPCB-λdiel', name1: 'lambdadiel_1', name2: 'lambdadiel_2' },
    { label: 'MCPCB-dbase', name1: 'hbase_1', name2: 'hbase_2' },
    { label: 'MCPCB-λbase', name1: 'lambdabase_1', name2: 'lambdabase_2' },
    { label: 'TIM-dTIM', name1: 'hTIM_1', name2: 'hTIM_2' },
    { label: 'TIM-λTIM', name1: 'lambdaTIM_1', name2: 'lambdaTIM_2' },
    { label: 'Amb.-Ta', name1: 'Ta_1', name2: 'Ta_2'},
    ];

    const handleCalculate = () => {
      const results = calculateResults();
      setResults(results);    };
  return (
    <div>
      <Header></Header>
      <div className="container">
    {fields.map(({ label, name1, name2 }) => (
      <div className="input-wrapper" key={label}>
        <label>{label}</label>
        <input
          type="text"
          value={inputValues_1[name1] || ''}
          onChange={(e) => handleInputValues_1(name1, e.target.value, setInputValues_1)}
        />
        <input
          type="text"
          value={inputValues_2[name2] || ''}
          onChange={(e) => handleInputValues_2(name2, e.target.value, setInputValues_2)}
        />
      </div>
    ))}
    <div className="input-wrapper-time">
        <label>a:</label>
        <input
          type="text"
          value={lifetime.a}
          onChange={(e) => handleLifetimeChange('a', e.target.value)}
        />
      </div>
      <div className="input-wrapper-time">
        <label>B:</label>
        <input
          type="text"
          value={lifetime.P_t}
          onChange={(e) => handleLifetimeChange('P_t', e.target.value)}
        />
      </div>
      <div className="input-wrapper-time">
        <label>t:</label>
        <input
          type="text"
          value={lifetime.t}
          onChange={(e) => handleLifetimeChange('t', e.target.value)}
        />
      </div>
      <div className="input-wrapper-time">
        <label>p:</label>
        <input
          type="text"
          value={lifetime.p}
          onChange={(e) => handleLifetimeChange('p', e.target.value)}
        />
      </div>
    <div className="button-wrapper">
      <button onClick={handleCalculate}>Calculate</button>
    </div>
    {result && (
    <div className="result">
        <h2>Results:</h2>
        <div className="result-row">
            <p>Rhs:</p>
            <p>{result.Rhsout}</p>
            <p>{result.Rhsout_2}</p>
        </div>
        <div className="flex font-medium">
            <p>Lp (h):</p>
            <p>{result.Lp_1}</p>
        </div>
    </div>
)}
  </div>
    </div>
  );
};

export default PREMALSYSCalculator;
