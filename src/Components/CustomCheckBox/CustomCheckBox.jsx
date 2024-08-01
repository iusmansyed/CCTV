import React from 'react'
import styles from "./CustomCheck.module.css"
const CustomCheckBox = ({ checked, onChange, label }) => {
    const handleCheckboxClick = () => {
        onChange(!checked);
    };
    return (
        <>
            <div className={styles.checkboxContainer} onClick={handleCheckboxClick}>
                <div className={`${styles.checkboxCustom} ${checked ? styles.checked : ''}`}>
                    {checked && <div className={styles.checkboxCheckmark}></div>}
                </div>
                <span>{label}</span>
            </div>
        </>
    )
}

export default CustomCheckBox