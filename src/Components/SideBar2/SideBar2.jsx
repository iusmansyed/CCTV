import React, { useState, useEffect } from 'react';
import styles from "./SideBar2.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { setCountValue } from '../../Redux/action';

const SideBar2 = (props) => {
    const cameraSelection = useSelector((state) => state.setData.cameraSelection);
    const [countPTZ, setCountPTZ] = useState(cameraSelection['PTZ'] || 0);
    const [countBullet, setCountBullet] = useState(cameraSelection['Bullet'] || 0);
    const [countTurret, setCountTurret] = useState(cameraSelection['Turret'] || 0);
    const [message, setMessage] = useState('');
    const { selectedItem, onSelect } = props;
    const dispatch = useDispatch();
    const handleSelectClick = () => {
        if (selectedItem) {
            const { category, title } = selectedItem;
            let updatedCount = 0;


            if (category === 'PTZ') {
                if (countPTZ < 4 && countPTZ + countBullet + countTurret < 4) {
                    updatedCount = countPTZ + 1;
                    setCountPTZ(updatedCount);
                } else {
                    setMessage('You cannot select more than 4 cameras or exceed the limit for this category');
                    return;
                }
            } else if (category === 'Bullet') {
                if (countBullet < 4 && countPTZ + countBullet + countTurret < 4) {
                    updatedCount = countBullet + 1;
                    setCountBullet(updatedCount);
                } else {
                    setMessage('You cannot select more than 4 cameras or exceed the limit for this category');
                    return;
                }
            } else if (category === 'Turret') {
                if (countTurret < 4 && countPTZ + countBullet + countTurret < 4) {
                    updatedCount = countTurret + 1;
                    setCountTurret(updatedCount);
                } else {
                    setMessage('You cannot select more than 4 cameras or exceed the limit for this category');
                    return;
                }
            }

            dispatch(setCountValue(title, category, updatedCount));
            setMessage('');
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
                {/* {limit && <p>Limit: {limit}</p>} */}
                <button onClick={handleSelectClick}>
                    Select
                </button>
                <div className={styles.res}>
                    {message && <p className={styles.message}>{message}</p>}
                </div>
            </div>
        </div>
    );
};

export default SideBar2;
