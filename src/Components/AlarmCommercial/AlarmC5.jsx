import React from 'react'
import { MdAttachFile } from "react-icons/md";

const AlarmC5 = ({ formData, handleChange }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        handleChange({ target: { name: "keyPad", value: reader.result } });
      };
      reader.readAsDataURL(file);
    }
  };
  const handleFileChange2 = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        handleChange({ target: { name: "siren", value: reader.result } });
      };
      reader.readAsDataURL(file);
    }
  };
  const price = 300
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="inp">
            <label htmlFor="fullName">Keypad Location</label>
            <div className="tooked">
              <div className='inert'>
                <p>Enter siren location</p>
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
            {formData.keyPad && (
              <img src={formData.keyPad} alt="Captured" style={{ width: "100px", marginTop: "10px" }} />
            )}
          </div>
        </div>
        <div className="col-lg-12">
          <div className="inp">
            <label htmlFor="fullName">Siren Location</label>
            <div className="tooked">
              <div className='inert'>
                <p>Enter siren location</p>
                <p><MdAttachFile fontSize={"25px"} /></p>
              </div>
              <input
                type="file"
                accept="image/*"
                capture="environment"
                className="takingPhoto2"
                onChange={handleFileChange2}
              />
            </div>
            {formData.siren && (
              <img src={formData.siren} alt="Captured" style={{ width: "100px", marginTop: "10px" }} />
            )}
          </div>
        </div>
        <div className="col-lg-12">
          <div className='resultss'>
            <h3>Price calculation based on the selected options.</h3>
            <div className='priceBox'>
              <h4>Price</h4>
              <h4>${price}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AlarmC5