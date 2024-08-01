import React, { useState, useEffect } from 'react';
import styles from './Slider.module.css';
import Img1 from "../../assets/Images/blackmagic.webp";
import Img2 from "../../assets/Images/canon.webp";
import Img3 from "../../assets/Images/dji.webp";
import Img4 from "../../assets/Images/fujifilm.webp";
import Img5 from "../../assets/Images/go.webp";
import Img6 from "../../assets/Images/nikon.webp";
import Img7 from "../../assets/Images/panasonic.webp";
import Img8 from "../../assets/Images/sony.webp";
import SideBar2 from '../../Components/SideBar2/SideBar2';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaFilter } from "react-icons/fa";
import 'swiper/css';
import 'swiper/css/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentStep } from '../../Redux/action';

const Sliders = ({ formData, handleChange }) => {
    const preferredCamera = useSelector((state) => state.setData.PreferredCamera);
    const [selectedItem, setSelectedItem] = useState(null);
    const [dataToDisplay, setDataToDisplay] = useState([]);
    let dispatch = useDispatch()
    // Define camera data
    const Data = [
        { title: "PTZ (Pan-Tilt-Zoom) Cameras", desc: "Description here...", price: "$53.36", img: Img1 },
        { title: "PTZ (Pan-Tilt-Zoom) Cameras", desc: "Description here...", price: "$53.36", img: Img2 },
        { title: "PTZ (Pan-Tilt-Zoom) Cameras", desc: "Description here...", price: "$53.36", img: Img3 },
    ];
    const Data2 = [
        { title: "Bullet Cameras", desc: "Description here...", price: "$53.36", img: Img4 },
        { title: "Bullet Cameras", desc: "Description here...", price: "$53.36", img: Img5 },
        { title: "Bullet Cameras", desc: "Description here...", price: "$53.36", img: Img6 },
    ];
    const Data3 = [
        { title: "Turret Cameras", desc: "Description here...", price: "$53.36", img: Img7 },
        { title: "Turret Cameras", desc: "Description here...", price: "$53.36", img: Img8 },
        { title: "Turret Cameras", desc: "Description here...", price: "$53.36", img: Img1 },
    ];

    useEffect(() => {
        if (preferredCamera && preferredCamera.length > 0) {
            const cameraType = preferredCamera[0];
            if (cameraType === "PTZ (Pan-Tilt-Zoom) Cameras") {
                setDataToDisplay(Data);
            } else if (cameraType === "Bullet Cameras") {
                setDataToDisplay(Data2);
            } else if (cameraType === "Turret Cameras") {
                setDataToDisplay(Data3);
            } else {
                setDataToDisplay([]);
            }
        } else {
            setDataToDisplay([]);
        }
    }, [preferredCamera]);

    useEffect(() => {
        if (dataToDisplay.length > 0) {
            setSelectedItem(dataToDisplay[0]); // Set the first item initially if data is available
        } else {
            setSelectedItem(null);
        }
    }, [dataToDisplay]);

    const handleSlideChange = (swiper) => {
        const newIndex = swiper.activeIndex;
        setSelectedItem(dataToDisplay[newIndex] || null);
    };

    const handleSelect = (item) => {
        // Add your selection logic here
    };
    const { currentStep } = useSelector(state => state.currentStep)
    const changeScreen = () => {
        dispatch(setCurrentStep(Math.min(currentStep + 1)))
    }
    return (
        <>
            <SideBar2
                selectedItem={selectedItem}
                onSelect={handleSelect}
            />
            <section className={styles.main}>
                <div className={styles.Filter} onClick={changeScreen}>
                    <FaFilter /> Filter
                </div>
                <div className={styles.camera}>
                    <Swiper
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper"
                        onSlideChange={handleSlideChange}
                    >
                        {dataToDisplay.length > 0 ? (
                            dataToDisplay.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <img src={item.img} alt={item.title} />
                                </SwiperSlide>
                            ))
                        ) : (
                            <SwiperSlide>
                                <div>Sorry, no cameras are found</div>
                            </SwiperSlide>
                        )}
                    </Swiper>
                </div>
            </section>
        </>
    );
};

export default Sliders;
