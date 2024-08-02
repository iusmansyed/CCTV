import React from 'react'

const CCTV11 = ({ formData, handleChange }) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div>
                        <p className='hea'>
                            Additional Security Features Needed (Alarm System, Smart Locks, etc.)
                        </p>
                        <label htmlFor="">
                            <input
                                type="checkbox"
                                name="SecurityLighting"
                                checked={formData.SecurityLighting}
                                onChange={(e) => handleChange({
                                    target: {
                                        name: e.target.name,
                                        value: e.target.checked,
                                    }
                                })}
                            />
                            Security Lighting
                        </label>
                    </div>
                    <div>
                        <label htmlFor="">
                            <input
                                type="checkbox"
                                name="fireAlarm"
                                value={true}
                                checked={formData.fireAlarm === true}
                                onChange={(e) => handleChange({
                                    target: {
                                        name: e.target.name,
                                        value: e.target.checked,
                                    }
                                })}
                            />
                            Fire Alarm
                        </label>
                    </div>
                    <div className="col-lg-4">
                        <div className="inp" style={{ marginTop: "20px" }}>
                            <input
                                type="text"
                                id="AdditionalSecurity"
                                name="AdditionalSecurity"
                                placeholder="Other"
                                value={formData.AdditionalSecurity}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="inp">
                        <label htmlFor="fullName">Any Specific Requirements or Customizations</label>
                        <input
                            type="text"
                            id="heightInstall"
                            name="heightInstall"
                            placeholder="Enter specific requirements or customizations"
                            value={formData.heightInstall}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <p className='hea'>
                        Preferred Contact Method for Follow-Up
                        </p>
                        <label htmlFor="">
                            <input
                                type="checkbox"
                                name="Email"
                                checked={formData.Email}
                                onChange={(e) => handleChange({
                                    target: {
                                        name: e.target.name,
                                        value: e.target.checked,
                                    }
                                })}
                            />
                          Email
                        </label>
                    </div>
                    <div>
                        <label htmlFor="">
                            <input
                                type="checkbox"
                                name="Phone"
                                checked={formData.Phone}
                                onChange={(e) => handleChange({
                                    target: {
                                        name: e.target.name,
                                        value: e.target.checked,
                                    }
                                })}
                            />
                           Phone
                        </label>
                    </div>
                    <div>
                        <label htmlFor="">
                            <input
                                type="checkbox"
                                name="SMS"
                                checked={formData.SMS}
                                onChange={(e) => handleChange({
                                    target: {
                                        name: e.target.name,
                                        value: e.target.checked,
                                    }
                                })}
                            />
                            SMS
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CCTV11