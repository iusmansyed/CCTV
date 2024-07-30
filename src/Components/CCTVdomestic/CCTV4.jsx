import React from 'react'

const CCTV4 = ({ formData, handleChange }) => {
  return (
    <div>
      <div className="col-lg-12">
        <div className="inp">
          <label htmlFor="fullName">Specific Areas of Concern</label>
          <input
            type="text"
            id="specificArea"
            name="specificArea"
            placeholder="Enter a Area concern"
            value={formData.specificArea}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="col-lg-12">
        <div className="inp">
          <label htmlFor="fullName">Any Recent Security Incidents</label>
          <input
            type="text"
            id="RecentSecurity"
            name="RecentSecurity"
            placeholder="Enter a Recent Security Incident"
            value={formData.RecentSecurity}
            onChange={handleChange}
            required
          />
        </div>
      </div>
    </div>
  );
};

export default CCTV4