import React, { useState } from 'react'
import CustomDropdown from '../Dropdown/DropDown'
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { setCurrentStep } from '../../Redux/action';
import { useDispatch, useSelector } from 'react-redux';
const categoryOptions = [
    { value: "", label: "Resolution Preference" },
    { value: "720p", label: "720p" },
    { value: "1080p", label: "1080p" },
    { value: "4K", label: "4K" },
    { value: "8K", label: "8K" },
];
const categoryOptions2 = [
    { value: "", label: "Storage Duration" },
    { value: "1 week", label: "1 week" },
    { value: "1 month", label: "1 month" },
    { value: "6 month", label: "6 month" },
    { value: "1 year", label: "1 year" },
];
const CCTV7 = ({ formData, handleChange }) => {
    const { currentStep } = useSelector(state => state.currentStep)
    let dispatch = useDispatch();
    const goBack = () =>{
        dispatch(setCurrentStep(Math.min(currentStep - 2)))
    }
    return (
        <>
            <section className='man'>
                <div className='back' onClick={goBack}>
                    <IoChevronBackCircleOutline />
                </div>
                <div className="col-lg-12">
                    <div className="row">

                        <div className="col-lg-6">
                            <CustomDropdown
                                options={categoryOptions}
                                name="Resolution"
                                value={formData.Resolution}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-lg-6">
                            <CustomDropdown
                                options={categoryOptions2}
                                name="storage"
                                value={formData.storage}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-lg-6">
                            <div className="check">
                                <label htmlFor="">
                                    <input
                                        type="checkbox"
                                        name="nightVision"
                                        checked={formData.nightVision}
                                        onChange={(e) => handleChange({
                                            target: {
                                                name: e.target.name,
                                                value: e.target.checked,
                                            }
                                        })}
                                    />
                                    Night Vision
                                </label>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="check">
                                <label htmlFor="">
                                    <input
                                        type="checkbox"
                                        name="motionDetection"
                                        checked={formData.motionDetection}
                                        onChange={(e) => handleChange({
                                            target: {
                                                name: e.target.name,
                                                value: e.target.checked,
                                            }
                                        })}
                                    />
                                    Motion Detection
                                </label>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="check">
                                <label htmlFor="">
                                    <input
                                        type="checkbox"
                                        name="audioRecording"
                                        checked={formData.audioRecording}
                                        onChange={(e) => handleChange({
                                            target: {
                                                name: e.target.name,
                                                value: e.target.checked,
                                            }
                                        })}
                                    />
                                    Audio Recording
                                </label>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="check">
                                <label htmlFor="">
                                    <input
                                        type="checkbox"
                                        name="RemoteAccessRequired"
                                        checked={formData.RemoteAccessRequired}
                                        onChange={(e) => handleChange({
                                            target: {
                                                name: e.target.name,
                                                value: e.target.checked,
                                            }
                                        })}
                                    />
                                    Remote Access Required
                                </label>
                            </div>
                        </div>
                        {/* <div className="col-lg-6">
                            <div className="check">
                                <label htmlFor="nightVision">
                                    <input
                                        type="checkbox"
                                        name="PowerSourceAvailability"
                                        checked={formData.PowerSourceAvailability}
                                        onChange={(e) => handleChange({
                                            target: {
                                                name: e.target.name,
                                                value: e.target.checked,
                                            }
                                        })}
                                    />
                                    Power Source Availability
                                </label>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default CCTV7