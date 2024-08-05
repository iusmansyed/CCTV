import React from "react";
import CustomDropdown from "../Dropdown/DropDown";
import { FaCamera } from "react-icons/fa";

const CCTV5 = ({ formData, handleChange }) => {
  const categoryOptions = [
    { value: "", label: "camera location" },
    { value: "Indoor", label: "Indoor" },
    { value: "Outdoor", label: "Outdoor" },
  ];
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
    <>
      <div>
        <CustomDropdown
          options={categoryOptions}
          name="CameraLocation"
          value={formData.CameraLocation}
          onChange={handleChange}
        />
      </div>
      <div className="col-lg-12">
        <div className="row">
          <div className="col-lg-6">
            <div className="inp">
              <label htmlFor="fullName">Height of Installation</label>
              <input
                type="text"
                id="heightInstall"
                name="heightInstall"
                placeholder="Enter a height"
                value={formData.heightInstall}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-lg-6">
          <div className="phto">
              <input
                type="file"
                accept="image/*"
                capture="environment"
                className="takingPhoto"
                onChange={handleFileChange}
              />
              <h3><FaCamera color="#B29CF2"/> Feature to take a picture</h3>
              {formData.capturedImage && (
                <img src={formData.capturedImage} alt="Captured" style={{ width: "100px", marginTop: "10px" }} />
              )}
            </div>
          </div>
          <div className="col-lg-12">
            <div className="inp">
              <label htmlFor="fullName">Camera Mounting Surfaces</label>
              <input
                type="text"
                id="cameraMounting"
                name="cameraMounting"
                placeholder="Enter camera mounting surfaces"
                value={formData.cameraMounting}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="inp">
              <label htmlFor="fullName">Installation description</label>
              <input
                type="text"
                id="InstallationDesc"
                name="InstallationDesc"
                placeholder="Enter description"
                value={formData.InstallationDesc}
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

export default CCTV5;
