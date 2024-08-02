import React from "react";
import CustomDropdown from "../Dropdown/DropDown";

const CCTV1 = ({ formData, handleChange }) => {
  const categoryOptions = [
    { value: "", label: "Style of House" },
    { value: "Flat", label: "Flat" },
    { value: "Detached", label: "Detached" },
    { value: "Semi Detached", label: "Semi Detached" },
    { value: "Terraced", label: "Terraced" },
  ];

  return (
    <div>
     
      <div>
        <CustomDropdown
          options={categoryOptions}
          name="house"
          value={formData.house}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default CCTV1;
