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
import 'swiper/css';
import 'swiper/css/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { setCountValue } from '../../Redux/action';

const Sliders = ({ formData, handleChange }) => {
    const preferredCamera = useSelector((state) => state.setData.PreferredCamera);
    const cameraSelection = useSelector((state) => state.setData.cameraSelection);
    console.log(cameraSelection, "<<<<<<<<");

    const [selectedItem, setSelectedItem] = useState(null);
    const [dataToDisplay, setDataToDisplay] = useState([]);
    const [countPTZ, setCountPTZ] = useState(cameraSelection['PTZ'] || 0);
    const [countBullet, setCountBullet] = useState(cameraSelection['Bullet'] || 0);
    const [countTurret, setCountTurret] = useState(cameraSelection['Turret'] || 0);
    const [message, setMessage] = useState('');

    let dispatch = useDispatch();

    const Data = [
        { title: "PTZ (Pan-Tilt-Zoom) Cameras", desc: "Description here...", price: "$53.36", img: Img1, category: 'PTZ' },
        { title: "PTZ (Pan-Tilt-Zoom) Cameras", desc: "Description here...", price: "$53.36", img: Img2, category: 'PTZ' },
        { title: "PTZ (Pan-Tilt-Zoom) Cameras", desc: "Description here...", price: "$53.36", img: Img3, category: 'PTZ' },
    ];
    const Data2 = [
        { title: "Bullet Cameras", desc: "Description here...", price: "$53.36", img: Img4, category: 'Bullet' },
        { title: "Bullet Cameras", desc: "Description here...", price: "$53.36", img: Img5, category: 'Bullet' },
        { title: "Bullet Cameras", desc: "Description here...", price: "$53.36", img: Img6, category: 'Bullet' },
    ];
    const Data3 = [
        { title: "Turret Cameras", desc: "Description here...", price: "$53.36", img: Img7, category: 'Turret' },
        { title: "Turret Cameras", desc: "Description here...", price: "$53.36", img: Img8, category: 'Turret' },
        { title: "Turret Cameras", desc: "Description here...", price: "$53.36", img: Img1, category: 'Turret' },
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
    const handleSelect = () => {

    }

    return (
        <>
            <section className={styles.main}>
                <div className="container">
                    <div className="col-lg-12">
                        <Swiper
                            navigation={true}
                            modules={[Navigation]}
                            className="mySwiper"
                            onSlideChange={handleSlideChange}
                        >
                            {dataToDisplay.length > 0 ? (
                                dataToDisplay.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className={styles.show}>
                                            <img src={item.img} alt={item.title} />
                                            <h4>{item.title}</h4>
                                            <p>{item.desc}</p>
                                            <p><b>Price</b>: {item.price}</p>
                                        </div>
                                    </SwiperSlide>
                                ))
                            ) : (
                                <SwiperSlide>
                                    <div>Sorry, no cameras are found</div>
                                </SwiperSlide>
                            )}
                        </Swiper>
                        <div className={styles.buttonContainer}>
                            <button onClick={handleSelectClick} disabled={!selectedItem}>
                                Select
                            </button>
                        </div>
                        {message && message}
                    </div>
                    <div className={styles.siddy}>
                        <SideBar2
                            selectedItem={selectedItem}
                            onSelect={handleSelect}
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Sliders;
