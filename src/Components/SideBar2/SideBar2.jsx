import React from 'react';
import styles from "./SideBar2.module.css";

const SideBar2 = (props) => {
    const { selectedItem, onSelect } = props;

    const handleSelectClick = () => {
        if (selectedItem) {
            onSelect(selectedItem);
        }
    };

    return (
        <div className={styles.main}>
            <div className={styles.head}>
                <h3>{selectedItem?.title}</h3>
            </div>
            <div className={styles.text}>
                <p>{selectedItem?.desc}</p>
            </div>
            <div className={styles.price}>
                <p>Price: {selectedItem?.price}</p>
                <button onClick={handleSelectClick}>
                    Select
                </button>
            </div>
        </div>
    );
};

export default SideBar2;
