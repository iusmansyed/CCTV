import React from 'react'
import CustomDropdown from '../Dropdown/DropDown';
const categoryOptions = [
    { value: "", label: "Suggest The Best For Me" },
    { value: "Bullet Cameras", label: "Bullet Cameras" },
    { value: "PTZ (Pan-Tilt-Zoom) Cameras", label: "PTZ (Pan-Tilt-Zoom) Cameras" },
    { value: "Turret Cameras", label: "Turret Cameras" },
    { value: "Box Cameras", label: "Box Cameras" },
];

const CCTVC10 = ({ formData, handleChange }) => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className='inp'>
                            <label htmlFor="">Brief description of Installation Area</label>
                            <input type="date" id="" name="date"
                                value={formData.date}
                                onChange={handleChange} placeholder='Enter access requirements' />
                        </div>
                        <div className='inp'>
                            <label htmlFor="">Privacy Concerns (Areas to Avoid, Data Protection)</label>
                            <input type="text" id="" name="privacy"
                                value={formData.privacy}
                                onChange={handleChange} placeholder='Enter privacy concerns' />
                        </div>
                        <div className='inp'>
                            <label htmlFor="">Specific Brand or Product Preferences</label>
                            <input type="text" id="" name="specificBrand"
                                value={formData.specificBrand}
                                onChange={handleChange} placeholder='Enter brand or product preferences' />
                        </div>
                        <CustomDropdown
                            options={categoryOptions}
                            name="suggested"
                            value={formData.suggested}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CCTVC10