import React from "react";
import CustomDropdown from "../Dropdown/DropDown";

const CCTV2 = ({ formData, handleChange }) => {
  const categoryOptions = [
    { value: "", label: "size of property" },
    { value: "Small", label: "Small" },
    { value: "Medium", label: "Medium" },
    { value: "Large", label: "Large" },
  ];
  return (
    <>
      <div>
        
        <CustomDropdown
          options={categoryOptions}
          name="size"
          value={formData.size}
          onChange={handleChange}
        />
      </div>
      <div className="col-lg-12">
        <div className="row">
          <div className="col-lg-6">
            <div className="inp">
              <label htmlFor="fullName">Number of Floors</label>
              <input
                type="text"
                id="numberOfFloor"
                name="numberOfFloor"
                placeholder="Enter A Number"
                value={formData.numberOfFloor}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="inp">
              <label htmlFor="fullName">Number of Entry points</label>
              <input
                type="text"
                id="numberOfEntry"
                name="numberOfEntry"
                placeholder="Enter a Number"
                value={formData.numberOfEntry}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CCTV2;
