import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentStep } from '../../Redux/action';
const CCTVC4 = ({ formData, handleChange }) => {
  let dispatch = useDispatch();
  const { currentStep } = useSelector(state => state.currentStep)
  const Skip = () => {
    dispatch(setCurrentStep(Math.min(currentStep + 1)))
  }
  return (
    <div className='container'>
      <div className="row">

        <div className="col-lg-12">
          <div style={{ float: "right", marginTop: "-30px" }}>
            <h3 style={{ color: "#962CE9", cursor: "pointer" }} onClick={Skip}>Skip</h3>
          </div>
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
    </div>
  )
}

export default CCTVC4