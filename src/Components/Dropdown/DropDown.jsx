import React, { useState, useEffect } from 'react';
import styles from './Dropdown.module.css';
import { FaChevronDown } from "react-icons/fa";

const CustomDropdown = ({ options, value, onChange, name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [displayLabel, setDisplayLabel] = useState('');
  console.log(displayLabel);
  

  useEffect(() => {
    const selectedOption = options.find(option => option.value === value);
    setDisplayLabel(selectedOption ? selectedOption.label : options[0].label);
  }, [value, options]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    onChange({ target: { value: option.value, name } });
    setDisplayLabel(option.value ? option.value :options[0].label )
    setIsOpen(false);
  };

  return (
    <div className={styles.custom_select}>
      <div className={styles.select_selected} onClick={toggleDropdown}>
        {displayLabel}
        <div className={styles.icon}>
          <FaChevronDown fontSize={"20px"} />
        </div>
      </div>
      {isOpen && (
        <div className={styles.select_items}>
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => handleOptionClick(option)}
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

export default CustomDropdown;
