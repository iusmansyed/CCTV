import React from 'react'

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
      <select name="purpose" value={formData.purpose} onChange={handleChange}>
        {categoryOptions.map((option) => (
          <option
            style={{ padding: "20px" }}
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CCTV3