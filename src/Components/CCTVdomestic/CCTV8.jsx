import React from 'react'

const CCTV8 = ({ formData, handleChange }) => {
    return (
        <>
            <div className="col-lg-12">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="inp">
                            <label htmlFor="fullName">Specific Storage Location for DVR/NVR</label>
                            <input
                                type="text"
                                id="DVR"
                                name="DVR"
                                placeholder="Enter your Specific Storage Location "
                                value={formData.DVR}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="inp">
                            <label htmlFor="fullName">Router Location</label>
                            <input
                                type="text"
                                id="RouterLocation"
                                name="RouterLocation"
                                placeholder=" Enter router location"
                                value={formData.RouterLocation}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <p className='hea'>
                                Cable Management (Visible, Concealed, Wireless)
                            </p>
                            <label htmlFor="">
                                <input
                                    type="radio"
                                    name="visible"
                                    checked={formData.visible}
                                    onChange={(e) => handleChange({
                                        target: {
                                            name: e.target.name,
                                            value: e.target.checked,
                                        }
                                    })}
                                />
                                Visible
                            </label>
                        </div>
                        <div>
                            <label htmlFor="">
                                <input
                                    type="radio"
                                    name="Concealed"
                                    checked={formData.Concealed}
                                    onChange={(e) => handleChange({
                                        target: {
                                            name: e.target.name,
                                            value: e.target.checked,
                                        }
                                    })}
                                />
                                Concealed
                            </label>
                        </div>
                        <div>

                            <label htmlFor="">
                                <input
                                    type="radio"
                                    name="Wireless"
                                    checked={formData.Wireless}
                                    onChange={(e) => handleChange({
                                        target: {
                                            name: e.target.name,
                                            value: e.target.checked,
                                        }
                                    })}
                                />
                                Wireless
                            </label>
                        </div>
                        <div style={{marginTop:"30px"}}>
                            <p className='hea'>
                            Internet Connection Installed/Wireless
                            </p>
                            <label htmlFor="">
                                <input
                                    type="radio"
                                    name="Installed"
                                    checked={formData.Installed}
                                    onChange={(e) => handleChange({
                                        target: {
                                            name: e.target.name,
                                            value: e.target.checked,
                                        }
                                    })}
                                />
                                Installed
                            </label>
                        </div>
                        <div>
                            <label htmlFor="">
                                <input
                                    type="radio"
                                    name="WirelessInter"
                                    checked={formData.WirelessInter}
                                    onChange={(e) => handleChange({
                                        target: {
                                            name: e.target.name,
                                            value: e.target.checked,
                                        }
                                    })}
                                />
                                Wireless
                            </label>
                        </div>
                       
                    </div>
                </div>
            </div>
        </>
    )
}

export default CCTV8