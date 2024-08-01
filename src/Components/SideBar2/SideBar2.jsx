import React, { useState, useEffect } from 'react';
import styles from "./SideBar2.module.css";

const SideBar2 = (props) => {
    const [limit, setLimit] = useState(null);
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState('');
    const { selectedItem, onSelect } = props;

    useEffect(() => {
        if (selectedItem) {
            setLimit(selectedItem.limit);
            setCount(0); // Reset count when selectedItem changes
            setMessage(''); // Reset message when selectedItem changes
        }
    }, [selectedItem]);

    const handleSelectClick = () => {
        if (selectedItem) {
            if (count < 4) {
                onSelect(selectedItem);
                setLimit(selectedItem.limit);
                setCount(prevCount => prevCount + 1);
                setMessage('');
            } else {
                setMessage('You cannot select more then 4 times');
            }
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
                {limit && <p>Limit: {limit}</p>}
                <button onClick={handleSelectClick}>
                    Select
                </button>
                <div className={styles.res}>
                    {count > 0 && <p>You have selected this camera {count} {count === 1 ? 'time' : 'times'}</p>}
                    {message && <p className={styles.message}>{message}</p>}
                </div>
            </div>
        </div>
    );
};

export default SideBar2;
