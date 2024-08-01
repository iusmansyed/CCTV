import React, { useState } from 'react';
import styles from './MultiDropDown.module.css';
import { FaChevronDown } from "react-icons/fa";
const MultiDropDown = ({ options, value, onChange, name, next }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleOptionClick = (option) => {
        onChange({ target: { value: option.value, name } });
        // (prevStep) => Math.min(prevStep + 1, steps.length - 1)
        console.log("hello world");
        next();
        setIsOpen(false);
    };

    return (
        <div className={styles.custom_select}>
            <div className={styles.select_selected} onClick={toggleDropdown}>
                {options.find(option => option.value === value)?.label || 'Select Sector'}
                <div className={styles.icon}>
                    <FaChevronDown fontSize={"20px"} />
                </div>
            </div>
            {isOpen && (
                <div className={styles.select_items}>
                    {options.map((option) => (
                        <div
                            key={option.value}
                            onClick={() => { handleOptionClick(option); next }}
                            className={styles.select_item}

                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MultiDropDown;
