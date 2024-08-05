import React from 'react'
import CustomDropdown from '../Dropdown/DropDown';
const categoryOptions = [
  { value: "", label: "What Sector" },
  { value: "Retail", label: "Retail" },
  { value: "Hospitality", label: "Hospitality" },
  { value: "Healthcare", label: "Healthcare" },
  { value: "Finance and Banking ", label: "Finance and Banking " },
];
const Step1 = ({ formData, handleChange }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
          <CustomDropdown
          options={categoryOptions}
          name="selectSector"
          value={formData.selectSector}
          onChange={handleChange}
        />
          </div>
          <div className="col-lg-6">
            <div className="inp">
              <label htmlFor="fullName">others</label>
              <input
                type="text"
                id="selectSector"
                name="selectSector"
                placeholder="others.."
                value={formData.selectSector}
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

export default Step1