import React from 'react'
import { MdAttachFile } from "react-icons/md";

const AlarmC4 = ({ formData, handleChange }) => {
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
                        <label htmlFor="fullName">Control panel Location</label>
                        <div className="tooked">
                            <div className='inert'>
                                <p>Enter control panel location</p>
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

export default AlarmC4