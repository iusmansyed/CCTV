import React from 'react'
import styles from "./TopBar.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';
import { FaCheck } from 'react-icons/fa';
const Topbar = ({side1, side2, side3, side4, side5, side6}) => {
    return (
        <div className={styles.tops}>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: false,
                }}
                modules={[Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className={styles.circle}> {side1 ? <p><FaCheck color="green" /></p> : "1"}</div>
                    <div className={styles.lebel}>
                        <p>Personal Information</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.circle}>{side2 ? <p><FaCheck color="green" /></p> : "2"}</div>
                    <div className={styles.lebel}>
                        <p>Style of House</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.circle}>{side3 ? <p><FaCheck color="green" /></p> : "3"}</div>
                    <div className={styles.lebel}>
                        <p>Specific House Style</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.circle}>{side4 ? <p><FaCheck color="green" /></p> : "4"}</div>
                    <div className={styles.lebel}>
                        <p>Service Required</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.circle}>{side5 ? <p><FaCheck color="green" /></p> : "5"}</div>
                    <div className={styles.lebel}>
                        <p>Add More Assets</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.circle1}>{side6 ? <p><FaCheck color="green" /></p> : "6"}</div>
                    <div className={styles.lebel}>
                        <p>complete</p>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default Topbar