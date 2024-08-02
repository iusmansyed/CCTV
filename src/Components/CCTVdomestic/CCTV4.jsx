import React from 'react'
import { useSelector } from 'react-redux';

const CCTV4 = ({ formData, handleChange }) => {
  const { data: forms } = useSelector((state) => state.formData);

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