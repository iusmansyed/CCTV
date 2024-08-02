import React from 'react'
import styles from "./ThankYou.module.css"
import Lottie from 'lottie-react'
import Sticker from "../../assets/Images/complete.json"
import { useSelector } from 'react-redux'
const ThankYou = ({ formData }) => {
    const { forms } = useSelector((state) => state.formData);

    console.log("1st form", forms);
    console.log("2nd form", formData);

    const content = `
  Address: ${forms.address}
  Contact: ${forms.contact}
  Email: ${forms.email}
  Full Name: ${forms.fullName}
  Postal Code: ${forms.postal}
  Sector: ${forms.sector}
  Service: ${forms.service}
  Access Install: ${formData.AccessInstall}
  Additional Security: ${formData.AdditionalSecurity}
  Camera Location: ${formData.CameraLocation}
  Concealed: ${formData.Concealed}
  DVR: ${formData.DVR}
  Email: ${formData.Email}
  Installed: ${formData.Installed}
  Motion Detection: ${formData.MotionDetection}
  Phone: ${formData.Phone}
  Power Source Availability: ${formData.PowerSourceAvailability}
  Preferred Camera: ${formData.PreferredCamera}
  Recent Security: ${formData.RecentSecurity}
  Remote Access Required: ${formData.RemoteAccessRequired}
  Resolution: ${formData.Resolution}
  Router Location: ${formData.RouterLocation}
  SMS: ${formData.SMS}
  Security Lighting: ${formData.SecurityLighting}
  Wireless: ${formData.Wireless}
  Wireless Inter: ${formData.WirelessInter}
  Audio Recording: ${formData.audioRecording}
  Camera Mounting: ${formData.cameraMounting}
  Captured Image: ${formData.capturedImage}
  Current Security System: ${formData.currentSecuritySystem}
  Date: ${formData.date}
  Fire Alarm: ${formData.fireAlarm}
  Height Install: ${formData.heightInstall}
  House: ${formData.house}
  Motion Detection: ${formData.motionDetection}
  Night Vision: ${formData.nightVision}
  Number of Entry: ${formData.numberOfEntry}
  Number of Floor: ${formData.numberOfFloor}
  Postal: ${formData.postal}
  Privacy: ${formData.privacy}
  Purpose: ${formData.purpose}
  Size: ${formData.size}
  Specific Area: ${formData.specificArea}
  Specific Brand: ${formData.specificBrand}
  Storage: ${formData.storage}
  Suggested: ${formData.suggested}
  Visible: ${formData.visible}
`;
    console.log(content);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className={styles.head}>
                            <h1>All Steps are Completed</h1>
                        </div>
                        <div className={styles.animation}>
                            <Lottie animationData={Sticker}
                                style={{ height: 300, width: 300 }}
                            />
                        </div>
                        <div className={styles.personal}>
                            <h3>Here is a personalized quote for you</h3>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className={styles.btns}>
                            <button>View</button>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className={styles.btns}>
                            <button>Download</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ThankYou