import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MultiDropDown from '../MultiDropDown/MultiDropDown';
import { setPreferredCamera } from '../../Redux/action';
import { RxCross2 } from "react-icons/rx";

const categoryOptions = [
    { value: "", label: "Preferred Camera Types" },
    { value: "Bullet Cameras", label: "Bullet Cameras" },
    { value: "PTZ (Pan-Tilt-Zoom) Cameras", label: "PTZ (Pan-Tilt-Zoom) Cameras" },
    { value: "Turret Cameras", label: "Turret Cameras" },
    { value: "Box Cameras", label: "Box Cameras" },
];

const CCTV6 = ({ formData, handleChange }) => {
    const { PreferredCamera: preferredCamera } = useSelector((state) => state.setData);
    const dispatch = useDispatch();

    // Local state to manage selected cameras
    const [cameras, setCameras] = useState(preferredCamera);

    useEffect(() => {
        setCameras(preferredCamera);
    }, [preferredCamera]);

    const handleCameraChange = (selectedOption) => {
        if (!cameras.includes(selectedOption.value)) {
            const newCameras = [...cameras, selectedOption.value];
            setCameras(newCameras);
            dispatch(setPreferredCamera(newCameras));
        }
    };

    const handleDelete = (cameraToDelete) => {
        const updatedCameras = cameras.filter(camera => camera !== cameraToDelete);
        setCameras(updatedCameras);
        dispatch(setPreferredCamera(updatedCameras));
    };

    return (
        <div>
            <MultiDropDown
                options={categoryOptions}
                name="PreferredCamera"
                value={null} // Assuming MultiDropDown value is not used here
                onChange={handleCameraChange}
            />
            <div className='cross'>
                {cameras.map((item, i) => (
                    <div key={i} className='remove'>
                        <span>{item}</span>
                        <div
                            onClick={() => handleDelete(item)}
                            style={{ marginLeft: '10px', cursor: 'pointer', color: 'red' }}
                        >
                            <RxCross2 />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CCTV6;
