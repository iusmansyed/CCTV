import React, { useState } from 'react'
import styles from "./ThankYou.module.css"
import Lottie from 'lottie-react'
import Sticker from "../../assets/Images/complete.json"
import { useSelector } from 'react-redux'
import CustomModal from '../../Components/CustomModal/Modal'
const ThankYou = ({ formData }) => {
    const { forms } = useSelector((state) => state.formData);
    const { cameraCount } = useSelector((state) => state.setData);
    const [modalShow, setModalShow] = useState(false);

    console.log("1st form", forms);
    console.log("2nd form", formData);
    
  

    return (
        <>
        <CustomModal  forms={forms}  formData={formData} cameraCount={cameraCount} show={modalShow}
        onHide={() => setModalShow(false) }/>
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