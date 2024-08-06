import React from "react";
import styles from "./Sidebar.module.css";
import Lottie from "lottie-react";
import Check from "../../assets/Images/complete.json"
import { FaCheck } from "react-icons/fa";
const Sidebar = ({ side1, side2, side3, side4, side5, side6 }) => {
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
            <div className={styles.circle}>
              {side2 ? <p><FaCheck color="green" /></p> : "2"}
            </div>
            <p>Style of house</p>
          </li>
          <li>
            <div className={styles.circle}>
              {side3 ? <p><FaCheck color="green" /></p> : "3"}</div>
            <p>Specific house style</p>
          </li>
          <li>
            <div className={styles.circle}>
            {side4 ? <p><FaCheck color="green" /></p> : "4"}
            </div>
            <p>Service Required</p>
          </li>
          <li>
            <div className={styles.circle}>
            {side5 ? <p><FaCheck color="green" /></p> : "5"}
            </div>
            <p>Add more assets</p>
          </li>
          <li>
            <div className={styles.circle}>
            {side6 ? <p><FaCheck color="green" /></p> : "6"}
              </div>
            <p>Complete</p>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Sidebar;
