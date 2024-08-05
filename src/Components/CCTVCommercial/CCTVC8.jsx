import React from 'react'

const CCTVC8 = ({ formData, handleChange }) => {
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
                                placeholder=" Enter router location"
                                name="RouterLocation"
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
                                    type="checkbox"
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
                                    type="checkbox"
                                    name="Concealed"
                                    value={true}
                                    checked={formData.Concealed === true}
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
                                    type="checkbox"
                                    name="Wireless"
                                    checked={formData.Wireless === true}
                                    value={false}
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
                                    type="checkbox"
                                    name="Installed"
                                    checked={formData.Installed === true}
                                    value={false}

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
                                    type="checkbox"
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

export default CCTVC8