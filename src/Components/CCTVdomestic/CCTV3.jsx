import React from 'react'
import CustomDropdown from '../Dropdown/DropDown';

const CCTV3 = ({ formData, handleChange }) => {
  const categoryOptions = [
    { value: "", label: "Purpose of CCTV" },
    { value: "Monitor entry points", label: "Monitor entry points" },
    { value: "General home surveillance", label: "General home surveillance" },
    { value: "Monitoring children's safety", label: "Monitoring children's safety" },
    { value: "Deterrence of burglaries and vandalism", label: "Deterrence of burglaries and vandalism" },
    { value: "Monitoring elderly family members", label: "Monitoring elderly family members" },
  ];
  return (
    <div>
      <CustomDropdown
       options={categoryOptions}
       name="purpose"
       value={formData.purpose}
       onChange={handleChange}
      />
    </div>
  );
};

export default CCTV3