import React from "react";

const categoryOptions = [
  { value: "", label: "Service Required" },
  { value: "CCTV", label: "CCTV" },
  { value: "Alarm", label: "Alarm" },
];

const Step2 = ({ formData, handleChange }) => {
  return (
    <div>
      <select name="service" value={formData.service} onChange={handleChange}>
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

export default Step2;
