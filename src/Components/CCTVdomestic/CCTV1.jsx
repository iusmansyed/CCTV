import React from "react";

const CCTV1 = ({ formData, handleChange }) => {
  const categoryOptions = [
    { value: "", label: "Style of House" },
    { value: "Flat", label: "Flat" },
    { value: "Detached", label: "Detached" },
    { value: "Semi Detached", label: "Semi Detached" },
    { value: "Terraced", label: "Terraced" },
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
                  id="postal"
                  name="postal"
                  placeholder="Enter your postal number"
                  value={formData.postal}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
        </div>
      </form>
      <div>
        <select name="house" value={formData.house} onChange={handleChange}>
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
