import React from "react";
import CustomDropdown from "../Dropdown/DropDown";

const categoryOptions = [
  { value: "", label: "What sector?" },
  { value: "Domestic", label: "Domestic" },
  { value: "Commercial", label: "Commercial" },
];

const Step3 = ({ formData, handleChange }) => {
  return (
      <CustomDropdown
       options={categoryOptions}
       name="sector"
       value={formData.sector}
       onChange={handleChange}
      />
  );
};

export default Step3;
