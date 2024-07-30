import React from "react";

const CCTV5 = ({ formData, handleChange }) => {
  const categoryOptions = [
    { value: "", label: "camera location" },
    { value: "Indoor", label: "Indoor" },
    { value: "Outdoor", label: "Outdoor" },
  ];
  return (
    <>
      <div>
        <select name="size" value={formData.size} onChange={handleChange}>
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
      <div className="col-lg-12">
        <div className="row">
          <div className="col-lg-6">
            <div className="inp">
              <label htmlFor="fullName">Height of Installation</label>
              <input
                type="text"
                id="numberOfFloor"
                name="numberOfFloor"
                placeholder="Enter a height"
                value={formData.numberOfFloor}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-lg-6">
            <h3>Feature to take a picture</h3>
            <input type="file" accept="image/*" capture="camera"></input>
          </div>
        </div>
      </div>
    </>
  );
};

export default CCTV5;
