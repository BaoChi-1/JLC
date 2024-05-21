import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import TotalForm from './components/Form/TotalForm';
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';
import PREMALSYSCalculator from './components/Calculator/PREMALSYSCalculator';

function App() {
  return (
    <Router>
      <div className="App">
        <I18nextProvider i18n={i18n}>
          <Routes>
            <Route path="/" element={<TotalForm />} />
            <Route path="/calculator" element={<PREMALSYSCalculator />} />
          </Routes>
        </I18nextProvider>
      </div>
    </Router>
  );
}

export default App;
