import React from "react";

const categoryOptions = [
  { value: "", label: "What sector?" },
  { value: "Domestic", label: "Domestic" },
  { value: "Commercial", label: "Commercial" },
];

const Step3 = ({ formData, handleChange }) => {
  return (
    <div className="select-container">
      <label htmlFor="service">Select Sector:</label>
      <select
        id="service"
        name="sector"
        value={formData.sector}
        onChange={handleChange}
      >
        {categoryOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Step3;
