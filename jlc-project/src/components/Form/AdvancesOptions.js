import React from "react";
import FormVisibility from "./FormVisibility";
import Item from "./Item";
import { useTranslation } from 'react-i18next';

function AdvancesOptions({
  toggleAdvancesOptVisibility,
  optionsYesNo,
  selectedKelvinTest,
  selectedPaper,
  selectedAppearanceQuality,
  selectedSilkscreenTechnology,
  selectedPackage,
  handleKelvinTestChange,
  handlePaperChange,
  handleAppearanceQualityChange,
  handleSilkscreenTechnologyChange,
  handlePackageChange,
  advancesOptVisible,
  currentAppearanceQuality,
  currentSilkscreenTechnology,
  packageBox,
  currentKelvinTest,
  achieveHours,
handleAchieveHoursChange,
currentHours
}) {
  const {t}= useTranslation();
  return (
    <div >
      <FormVisibility
        title= {t('advancedOptions')}
        toggle={toggleAdvancesOptVisibility}
      />
      {advancesOptVisible && (
        <div>
          <Item
            title={t('kelvinTest')}
            options={currentKelvinTest}
            selectedValue={selectedKelvinTest}
            handleChange={handleKelvinTestChange}
          />
          <Item
            title={t('paper')}
            options={optionsYesNo}
            selectedValue={selectedPaper}
            handleChange={handlePaperChange}
          />          
          <Item
            title={t('appearanceQuality')}
            options={currentAppearanceQuality}
            selectedValue={selectedAppearanceQuality}
            handleChange={handleAppearanceQualityChange}
          />
          <Item
            title={t('deliveryDate')}
            options={currentHours}
            selectedValue={achieveHours}
            handleChange={handleAchieveHoursChange}
          />
          {/* <Item
            title="Silkscreen Technology"
            options={currentSilkscreenTechnology}
            selectedValue={selectedSilkscreenTechnology}
            handleChange={handleSilkscreenTechnologyChange}
          /> */}
          {/* <Item
            title="Package Box"
            options={packageBox}
            selectedValue={selectedPackage}
            handleChange={handlePackageChange}
          /> */}
        </div>
      )}

    </div>

  );
}
export default AdvancesOptions;