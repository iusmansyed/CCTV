import React from 'react'
import { MdAttachFile } from "react-icons/md";
const AlarmD4 = ({ formData, handleChange }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        handleChange({ target: { name: "capturedImage", value: reader.result } });
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="inp">
            <label htmlFor="fullName">Add Description</label>
            <input
              type="text"
              id="description"
              name="description"
              placeholder="Enter a Recent Security Incident"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="inp">
            <label htmlFor="fullName">Approx distance from Control Panel</label>
            <input
              type="text"
              id="approxDistance"
              name="approxDistance"
              placeholder="Approx distance from Control Panel"
              value={formData.approxDistance}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="inp">
            <label htmlFor="fullName">Match Similar CCTV</label>
            <div className="tooked">
              <div className='inert'>
                <p>Enter images to match similar to the cctv</p>
                <p><MdAttachFile fontSize={"25px"} /></p>
              </div>
              <input
                type="file"
                accept="image/*"
                capture="environment"
                className="takingPhoto2"
                onChange={handleFileChange}
              />
            </div>
            {formData.capturedImage && (
              <img src={formData.capturedImage} alt="Captured" style={{ width: "100px", marginTop: "10px" }} />
            )}
          </div>
        </div>
        <div className="col-lg-12">
          <label htmlFor="fullName">Match Similar CCTV</label>
          <div className="row">
            <div className="col-lg-4">
              <label htmlFor="">
                <input
                  type="checkbox"
                  name="Sensors"
                  checked={formData.Sensors}
                  onChange={(e) => handleChange({
                    target: {
                      name: e.target.name,
                      value: e.target.checked,
                    }
                  })}
                />
                Sensors
              </label>
            </div>
            <div className="col-lg-4">
              <label htmlFor="">
                <input
                  type="checkbox"
                  name="Doorcontacts"
                  checked={formData.Doorcontacts}
                  onChange={(e) => handleChange({
                    target: {
                      name: e.target.name,
                      value: e.target.checked,
                    }
                  })}
                />
                Door contacts
              </label>
            </div>
            <div className="col-lg-4">
              <label htmlFor="">
                <input
                  type="checkbox"
                  name="AddShockSensor"
                  checked={formData.AddShockSensor}
                  onChange={(e) => handleChange({
                    target: {
                      name: e.target.name,
                      value: e.target.checked,
                    }
                  })}
                />
                Add Shock Sensor
              </label>
            </div>
            <div className="col-lg-4">
              <div className="inp">
                <label htmlFor="fullName">Other</label>
                <input
                  type="text"
                  id="sensorsOther"
                  name="sensorsOther"
                  placeholder="Other..."
                  value={formData.sensorsOther}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AlarmD4