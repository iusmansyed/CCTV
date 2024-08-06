import React, { useState } from 'react'
import { MdAttachFile } from "react-icons/md";
const AlarmC4 = ({ formData, handleChange }) => {
    const [show, setShow] = useState(false)
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
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="inp">
                        <label htmlFor="fullName">Add Description</label>
                        <input
                            type="text"
                            id="description"
                            name="description"
                            placeholder="Enter a Recent Security Incident"
                            value={formData.description}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    {show ?
                        <div className="inp">
                            <label htmlFor="description">Add More Description</label>
                            <textarea
                                id="moreDescription"
                                name="moreDescription"
                                placeholder="Enter a Recent Security Incident"
                                value={formData.moreDescription}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        : null}
                    <div className="col-lg-12 d-flex justify-content-end">
                        <button className='btnassa' onClick={() => setShow(true)}>
                            Add more
                        </button>
                    </div>
                </div>
                <div className="col-lg-12">
                    <label htmlFor="">Sensors /door contacts</label>
                    <div className="col-lg-4">
                        <label htmlFor="">
                            <input
                                type="checkbox"
                                name="Sensors"
                                checked={formData.Sensors}
                                onChange={(e) => handleChange({
                                    target: {
                                        name: e.target.name,
                                        value: e.target.checked,
                                    }
                                })}
                            />
                            Sensors
                        </label>
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="">
                            <input
                                type="checkbox"
                                name="Doorcontacts"
                                checked={formData.Doorcontacts}
                                onChange={(e) => handleChange({
                                    target: {
                                        name: e.target.name,
                                        value: e.target.checked,
                                    }
                                })}
                            />
                            Door contacts
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AlarmC4