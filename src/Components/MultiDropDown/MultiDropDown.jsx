import React, { useState } from 'react';
import styles from './MultiDropDown.module.css';
import { FaChevronDown, FaCheck, FaTimes } from 'react-icons/fa';

const MultiDropDown = ({ options, value, setVal, name }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleOptionClick = (option) => {
        const newValue = value.includes(option.value)
            ? setVal(value.filter(val => val !== option.value))
            : setVal((pre) => [...pre, option.value])
        // Call setVal with the updated array
    };

    const handleRemove = (optionValue) => {
        const newValue = value.filter(val => val !== optionValue);
        setVal(newValue); // Call setVal with the updated array
    };

    const selectedLabels = options
        .filter(option => value.includes(option.value))
        .map(option => option.label)
        .join(', ');

    return (
        <div className={styles.custom_select}>
            <div className={styles.select_selected} onClick={toggleDropdown}>
                {value.length > 0 ? selectedLabels : 'Select Sector'}
                <FaChevronDown className={styles.icon} />
            </div>
            {isOpen && (
                <div className={styles.select_items}>
                    {options.map(option => (
                        <div
                            key={option.value}
                            onClick={() => handleOptionClick(option)}
                            className={`${styles.select_item} ${value.includes(option.value) ? styles.selected : ''}`}
                        >
                            {value.includes(option.value) && <FaCheck className={styles.checkmark} />}
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
            {value.length > 0 && (
                <div className={styles.selected_items}>
                    {options
                        .filter(option => value.includes(option.value))
                        .map(option => (
                            <div key={option.value} className={styles.selected_item}>
                                <FaCheck className={styles.checkmark} />
                                {option.label}
                                <FaTimes
                                    className={styles.remove_icon}
                                    onClick={() => handleRemove(option.value)}
                                />
                            </div>
                        ))}
                </div>
            )}
        </div>
    );
};

export default MultiDropDown;
