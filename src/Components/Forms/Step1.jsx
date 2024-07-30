import React from "react";

const Step1 = ({ formData, handleChange }) => {
  return (
    <div>
      <form>
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-12">
              <div className="inp">
                <label htmlFor="fullName">Full Name</label>
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
            <div className="col-lg-12">
              <div className="inp">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="inp">
                <label htmlFor="contact">Contact No.</label>
                <input
                  type="tel"
                  id="contact"
                  name="contact"
                  placeholder="Enter your contact number"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="inp">
                <label htmlFor="postal">Postal Code</label>
                <input
                  type="text"
                  id="postal"
                  name="postal"
                  placeholder="654120"
                  value={formData.postal}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="inp">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Enter your address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Step1;
