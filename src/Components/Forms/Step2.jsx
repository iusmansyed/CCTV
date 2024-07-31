import React from "react";
import CustomDropdown from "../Dropdown/DropDown";

const categoryOptions = [
  { value: "", label: "Service Required" },
  { value: "CCTV", label: "CCTV" },
  { value: "Alarm", label: "Alarm" },
];

const Step2 = ({ formData, handleChange }) => {
  return (
    <CustomDropdown
      options={categoryOptions}
      name="service"
      value={formData.service}
      onChange={handleChange}
    />
  );
};

export default Step2;
