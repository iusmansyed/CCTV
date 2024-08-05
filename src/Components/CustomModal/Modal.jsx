import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const CustomModal = ({ forms, formData, cameraCount, ...props }) => {
 console.log(formData.capturedImage);
 
    return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <p>Address: {forms.address || '-'}</p>
          <p>Contact: {forms.contact || '-'}</p>
          <p>Email: {forms.email || '-'}</p>
          <p>Full Name: {forms.fullName || '-'}</p>
          <p>Postal Code: {forms.postal || '-'}</p>
          <p>Sector: {forms.sector || '-'}</p>
          <p>Service: {forms.service || '-'}</p>
          <p>Access Install: {formData.AccessInstall || '-'}</p>
          <p>Additional Security: {formData.AdditionalSecurity || '-'}</p>
          <p>Camera Location: {formData.CameraLocation || '-'}</p>
          <p>Concealed: {formData.Concealed || '-'}</p>
          <p>DVR: {formData.DVR || '-'}</p>
          <p>Email: {formData.Email || '-'}</p>
          <p>Installed: {formData.Installed || '-'}</p>
          <p>Motion Detection: {formData.MotionDetection || '-'}</p>
          <p>Phone: {formData.Phone || '-'}</p>
          <p>Power Source Availability: {formData.PowerSourceAvailability || '-'}</p>
          <p>Preferred Camera: {formData.PreferredCamera || '-'}</p>
          <p>Recent Security: {formData.RecentSecurity || '-'}</p>
          <p>Remote Access Required: {formData.RemoteAccessRequired || '-'}</p>
          <p>Resolution: {formData.Resolution || '-'}</p>
          <p>Numbers Of Camera : {cameraCount || '-'}</p>
          <p>Router Location: {formData.RouterLocation || '-'}</p>
          <p>SMS: {formData.SMS || '-'}</p>
          <p>Security Lighting: {formData.SecurityLighting || '-'}</p>
          <p>Wireless: {formData.Wireless || '-'}</p>
          <p>Wireless Inter: {formData.WirelessInter || '-'}</p>
          <p>Audio Recording: {formData.audioRecording || '-'}</p>
          <p>Camera Mounting: {formData.cameraMounting || '-'}</p>
          <p>Captured Image: <br /> {formData.capturedImage ? <img src={`${formData.capturedImage}`} alt="Captured Image" style={{maxWidth: '100%', height: 'auto'}} /> : '-'}</p>
          <p>Current Security System: {formData.currentSecuritySystem || '-'}</p>
          <p>Date: {formData.date || '-'}</p>
          <p>Fire Alarm: {formData.fireAlarm || '-'}</p>
          <p>Height Install: {formData.heightInstall || '-'}</p>
          <p>House: {formData.house || '-'}</p>
          <p>Motion Detection: {formData.motionDetection || '-'}</p>
          <p>Night Vision: {formData.nightVision || '-'}</p>
          <p>Number of Entry: {formData.numberOfEntry || '-'}</p>
          <p>Number of Floor: {formData.numberOfFloor || '-'}</p>
          <p>Postal: {formData.postal || '-'}</p>
          <p>Privacy: {formData.privacy || '-'}</p>
          <p>Purpose: {formData.purpose || '-'}</p>
          <p>Size: {formData.size || '-'}</p>
          <p>Specific Area: {formData.specificArea || '-'}</p>
          <p>Specific Brand: {formData.specificBrand || '-'}</p>
          <p>Storage: {formData.storage || '-'}</p>
          <p>Suggested: {formData.suggested || '-'}</p>
          <p>Visible: {formData.visible || '-'}</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CustomModal;
