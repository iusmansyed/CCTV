import React from 'react'
import styles from "./TopBar.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';
import { FaCheck } from 'react-icons/fa';
const Topbar = ({side1}) => {
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
                    <div className={styles.circle}>2</div>
                    <div className={styles.lebel}>
                        <p>Style of House</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.circle}>3</div>
                    <div className={styles.lebel}>
                        <p>Specific House Style</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.circle}>4</div>
                    <div className={styles.lebel}>
                        <p>Service Required</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.circle}>5</div>
                    <div className={styles.lebel}>
                        <p>Add More Assets</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.circle1}>6</div>
                    <div className={styles.lebel}>
                        <p>Confirm Service Registration</p>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default Topbar