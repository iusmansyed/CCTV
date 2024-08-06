import React, { useState } from 'react'
import styles from "./ThankYou.module.css"
import Lottie from 'lottie-react'
import Sticker from "../../assets/Images/complete.json"
import { useSelector } from 'react-redux'
import CustomModal from '../../Components/CustomModal/Modal'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
const ThankYou = ({ formData }) => {
    const { forms } = useSelector((state) => state.formData);
    const { cameraCount } = useSelector((state) => state.setData);
    const [modalShow, setModalShow] = useState(false);

    console.log("1st form", forms);
    console.log("2nd form", formData);


    const handleDownload = () => {
        // Create a formatted string for the PDF content

        const content = `
    Address: ${forms.address || '-'}
    Contact: ${forms.contact || '-'}
    Email: ${forms.email || '-'}
    Full Name: ${forms.fullName || '-'}
    Postal Code: ${forms.postal || '-'}
    Sector: ${forms.sector || '-'}
    Service: ${forms.service || '-'}
    Access Install: ${formData.AccessInstall || '-'}
    Additional Security: ${formData.AdditionalSecurity || '-'}
    Camera Location: ${formData.CameraLocation || '-'}
    Concealed: ${formData.Concealed || '-'}
    DVR: ${formData.DVR || '-'}
    Email: ${formData.Email || '-'}
    Installed: ${formData.Installed || '-'}
    Motion Detection: ${formData.MotionDetection || '-'}
    Phone: ${formData.Phone || '-'}
    Power Source Availability: ${formData.PowerSourceAvailability || '-'}
    Preferred Camera: ${formData.PreferredCamera || '-'}
    Recent Security: ${formData.RecentSecurity || '-'}
    Remote Access Required: ${formData.RemoteAccessRequired || '-'}
    Resolution: ${formData.Resolution || '-'}
    Numbers Of Camera: ${cameraCount || '-'}
    Router Location: ${formData.RouterLocation || '-'}
    SMS: ${formData.SMS || '-'}
    Security Lighting: ${formData.SecurityLighting || '-'}
    Wireless: ${formData.Wireless || '-'}
    Wireless Inter: ${formData.WirelessInter || '-'}
    Audio Recording: ${formData.audioRecording || '-'}
    Camera Mounting: ${formData.cameraMounting || '-'}
    Current Security System: ${formData.currentSecuritySystem || '-'}
    Date: ${formData.date || '-'}
    Fire Alarm: ${formData.fireAlarm || '-'}
    Height Install: ${formData.heightInstall || '-'}
    House: ${formData.house || '-'}
    Motion Detection: ${formData.motionDetection || '-'}
    Night Vision: ${formData.nightVision || '-'}
    Number of Entry: ${formData.numberOfEntry || '-'}
    Number of Floor: ${formData.numberOfFloor || '-'}
    Postal: ${formData.postal || '-'}
    Privacy: ${formData.privacy || '-'}
    Purpose: ${formData.purpose || '-'}
    Size: ${formData.size || '-'}
    Specific Area: ${formData.specificArea || '-'}
    Specific Brand: ${formData.specificBrand || '-'}
    Storage: ${formData.storage || '-'}
    Suggested: ${formData.suggested || '-'}
    Visible: ${formData.visible || '-'}
  `;

        const imgSrc = formData.capturedImage; // Assuming data.images is a valid image source (URL or base64 data)


        html2canvas(document.body).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'pt', 'a4');
            const width = pdf.internal.pageSize.getWidth();
            const height = pdf.internal.pageSize.getHeight();

            const margins = { top: 40, left: 40, bottom: 60 };
            const textAreaHeight = height - margins.top - margins.bottom;

            // Add formatted text
            pdf.setTextColor('#333333');
            pdf.setFontSize(14);

            let y = margins.top;
            content.split('\n').forEach((line) => {
                if (y + 14 > textAreaHeight) { // Adjust line height as needed
                    pdf.addPage();
                    y = margins.top;
                }
                pdf.text(line, margins.left, y);
                y += 14; // Line height
            });


            const imgMarginFromBottom = -20; // Margin from the bottom edge of the page
            const imgHeight = 150; // Adjust image height as needed
            const imgWidth = width - 2 * margins.left; // Adjust image width as needed

            // Add image at the bottom with margin from the bottom edge
            if (imgSrc) {
                const imageY = height - imgHeight - imgMarginFromBottom; // Position image with margin from bottom
                pdf.addImage(imgSrc, 'JPEG', margins.left, imageY, imgWidth, imgHeight);
            }

            pdf.save('data.pdf');
        });
    };

    return (
        <>
            <CustomModal forms={forms} formData={formData} cameraCount={cameraCount} show={modalShow}
                onHide={() => setModalShow(false)} />
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
                        <div className={styles.btns} onClick={() => setModalShow(true)}>
                            <button>View</button>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className={styles.btns} onClick={handleDownload}>
                            <button>Download</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ThankYou