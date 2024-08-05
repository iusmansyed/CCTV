import React from 'react'
import CustomDropdown from '../Dropdown/DropDown';
const categoryOptions = [
  { value: "", label: "Purpose of CCTV" },
  { value: "Monitor entry points", label: "Monitor entry points" },
  { value: "General home surveillance", label: "General home surveillance" },
  { value: "Monitoring children's safety", label: "Monitoring children's safety" },
  { value: "Deterrence of burglaries and vandalism", label: "Deterrence of burglaries and vandalism" },
  { value: "Monitoring elderly family members", label: "Monitoring elderly family members" },
];
const CCTVC3 = ({ formData, handleChange }) => {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-lg-12">
          <CustomDropdown
            options={categoryOptions}
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  )
}

export default CCTVC3