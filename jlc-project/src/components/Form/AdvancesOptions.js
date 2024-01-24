import React from "react";
import FormVisibility from "./FormVisibility";
import Item from "./Item";
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
  currentKelvinTest
}) {

  return (
    <div >
      <FormVisibility
        title="Advanced Options"
        toggle={toggleAdvancesOptVisibility}
      />
      {advancesOptVisible && (
        <div>
          <Item
            title="4-Wire Kelvin Test"
            options={currentKelvinTest}
            selectedValue={selectedKelvinTest}
            handleChange={handleKelvinTestChange}
          />
          <Item
            title="Paper between PCBs"
            options={optionsYesNo}
            selectedValue={selectedPaper}
            handleChange={handlePaperChange}
          />
          <Item
            title="Appearance Quality"
            options={currentAppearanceQuality}
            selectedValue={selectedAppearanceQuality}
            handleChange={handleAppearanceQualityChange}
          />
          <Item
            title="Silkscreen Technology"
            options={currentSilkscreenTechnology}
            selectedValue={selectedSilkscreenTechnology}
            handleChange={handleSilkscreenTechnologyChange}
          /><Item
            title="Package Box"
            options={packageBox}
            selectedValue={selectedPackage}
            handleChange={handlePackageChange}
          />
        </div>
      )}

    </div>

  );
}
export default AdvancesOptions;