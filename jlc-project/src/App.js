import React from 'react';
import TotalForm from './components/Form/TotalForm';
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';
function App() {
  return (
    <div className="App">
      <I18nextProvider i18n={i18n}>
      <TotalForm />
    </I18nextProvider>
    </div>
  );
}

export default App;
