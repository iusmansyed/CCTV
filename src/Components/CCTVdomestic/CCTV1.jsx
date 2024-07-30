import React from "react";

const CCTV1 = ({ formData, handleChange }) => {
  const categoryOptions = [
    { value: "", label: "Service Required" },
    { value: "CCTV", label: "CCTV" },
    { value: "Alarm", label: "Alarm" },
  ];

  return (
    <div>
      <form>
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-12">
              <div className="inp">
                <label htmlFor="fullName">Postal</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
        </div>
      </form>
      <div>
        <select name="service" value={formData.service} onChange={handleChange}>
          {categoryOptions.map((option) => (
            <option
              style={{ padding: "20px" }}
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CCTV1;
