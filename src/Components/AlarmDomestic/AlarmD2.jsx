import React from 'react'
import CustomDropdown from '../Dropdown/DropDown';

const AlarmD2 = ({ formData, handleChange }) => {
  const categoryOptions = [
    { value: "", label: "size of property" },
    { value: "'1-2 bedrooms", label: "'1-2 bedrooms" },
    { value: "3-5 bedroom", label: "3-5 bedroom" },
    { value: "5 bedroom +", label: "5 bedroom +" },
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
      <div className="container">
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
                <label htmlFor="fullName">Number Of Entry Points</label>
                <input
                  type="text"
                  id="numberOfEntry"
                  name="numberOfEntry"
                  placeholder="Enter A Number"
                  value={formData.numberOfEntry}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default AlarmD2