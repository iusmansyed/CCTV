import React from "react";
import styles from "./Sidebar.module.css";
import Lottie from "lottie-react";
import Check from "../../assets/Images/complete.json"
import { FaCheck } from "react-icons/fa";
const Sidebar = ({ side1 }) => {
  return (
    <>
      <section className={styles.sideBar}>
        <ul>
          <li>
            <div className={styles.circle}>
              {side1 ? <p><FaCheck color="green" /></p> : "1"}
              
            </div>
            <p>personal information</p>
          </li>
          <li>
            <div className={styles.circle}>2</div>
            <p>Style of house</p>
          </li>
          <li>
            <div className={styles.circle}>3</div>
            <p>Specific house style</p>
          </li>
          <li>
            <div className={styles.circle}>4</div>
            <p>Service Required</p>
          </li>
          <li>
            <div className={styles.circle}>5</div>
            <p>Add more assets</p>
          </li>
          <li>
            <div className={styles.circle}>6</div>
            <p>Confirm service registration</p>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Sidebar;
