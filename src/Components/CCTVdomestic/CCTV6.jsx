import React, { useEffect, useState } from 'react'
import CustomDropdown from '../Dropdown/DropDown';
import MultiDropDown from '../MultiDropDown/MultiDropDown';
const categoryOptions = [
    { value: "", label: "Preferred Camera Types" },
    { value: "Bullet Cameras", label: "Bullet Cameras" },
    { value: "PTZ (Pan-Tilt-Zoom) Cameras", label: "PTZ (Pan-Tilt-Zoom) Cameras" },
    { value: "Turret Cameras", label: "Turret Cameras" },
    { value: "Box Cameras", label: "Box Cameras" },
];
const CCTV6 = ({ formData, handleChange, next }) => {



    return (
        <>
         
            <MultiDropDown
                options={categoryOptions}
                name="PreferredCamera"
                value={formData.PreferredCamera}
                onChange={handleChange}
                nextStep={next}
            />
        </>
    )
}

export default CCTV6