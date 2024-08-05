import React from 'react'

const AlarmD3 = ({ formData, handleChange }) => {
  return (
    <div className="container">
      <div className="row">
      <div className="col-lg-12">
            <div className="inp">
              <label htmlFor="fullName">Control panel Location</label>
              <input
                type="text"
                id="ControlLocation"
                name="ControlLocation"
                placeholder="Enter control panel location"
                value={formData.ControlLocation}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="inp">
              <label htmlFor="fullName">Local Power Description</label>
              <input
                type="text"
                id="localPower"
                name="localPower"
                placeholder="Enter a Recent Security Incident"
                value={formData.localPower}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="inp">
              <label htmlFor="fullName">Description of connection to Power</label>
              <input
                type="text"
                id="DescriptionConnection"
                name="DescriptionConnection"
                placeholder="Enter a Recent Security Incident"
                value={formData.DescriptionConnection}
                onChange={handleChange}
                required
              />
            </div>
          </div>
      </div>
    </div>
  )
}

export default AlarmD3