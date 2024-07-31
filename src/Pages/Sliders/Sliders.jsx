import React, { useState } from 'react';
import styles from './Slider.module.css';
import Img1 from "../../assets/Images/blackmagic.webp";
import Img2 from "../../assets/Images/canon.webp";
import Img3 from "../../assets/Images/dji.webp";
import Img4 from "../../assets/Images/fujifilm.webp";
import Img5 from "../../assets/Images/go.webp";
import Img6 from "../../assets/Images/nikon.webp";
import Img7 from "../../assets/Images/panasonic.webp";
import Img8 from "../../assets/Images/sony.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SideBar2 from '../../Components/SideBar2/SideBar2';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Sliders = () => {
    const Data = [
        {
            title: "PTZ (Pan-Tilt-Zoom) Cameras",
            desc: "Tapo 1080P Outdoor Wired Pan/Tilt Security Wi-Fi Camera, 360° View, Motion Tracking, Works with Alexa & Google Home, Night Vision, Free AI Detection, Cloud & SD Card Storage(up to 512GB), Tapo C500",
            price: "$53.36",
            img: Img1
        },
        {
            title: "PTZ (Pan-Tilt-Zoom) Cameras",
            desc: "Tapo 1080P Outdoor Wired Pan/Tilt Security Wi-Fi Camera, 360° View, Motion Tracking, Works with Alexa & Google Home, Night Vision, Free AI Detection, Cloud & SD Card Storage(up to 512GB), Tapo C500",
            price: "$53.36",
            img: Img2
        },
        {
            title: "PTZ (Pan-Tilt-Zoom) Cameras",
            desc: "Tapo 1080P Outdoor Wired Pan/Tilt Security Wi-Fi Camera, 360° View, Motion Tracking, Works with Alexa & Google Home, Night Vision, Free AI Detection, Cloud & SD Card Storage(up to 512GB), Tapo C500",
            price: "$53.36",
            img: Img3
        },
        {
            title: "PTZ (Pan-Tilt-Zoom) Cameras",
            desc: "Tapo 1080P Outdoor Wired Pan/Tilt Security Wi-Fi Camera, 360° View, Motion Tracking, Works with Alexa & Google Home, Night Vision, Free AI Detection, Cloud & SD Card Storage(up to 512GB), Tapo C500",
            price: "$53.36",
            img: Img4
        },
        {
            title: "PTZ (Pan-Tilt-Zoom) Cameras",
            desc: "Tapo 1080P Outdoor Wired Pan/Tilt Security Wi-Fi Camera, 360° View, Motion Tracking, Works with Alexa & Google Home, Night Vision, Free AI Detection, Cloud & SD Card Storage(up to 512GB), Tapo C500",
            price: "$53.36",
            img: Img5
        },
        {
            title: "PTZ (Pan-Tilt-Zoom) Cameras",
            desc: "Tapo 1080P Outdoor Wired Pan/Tilt Security Wi-Fi Camera, 360° View, Motion Tracking, Works with Alexa & Google Home, Night Vision, Free AI Detection, Cloud & SD Card Storage(up to 512GB), Tapo C500",
            price: "$53.36",
            img: Img6
        },
        {
            title: "PTZ (Pan-Tilt-Zoom) Cameras",
            desc: "Tapo 1080P Outdoor Wired Pan/Tilt Security Wi-Fi Camera, 360° View, Motion Tracking, Works with Alexa & Google Home, Night Vision, Free AI Detection, Cloud & SD Card Storage(up to 512GB), Tapo C500",
            price: "$53.36",
            img: Img7
        },
        {
            title: "PTZ (Pan-Tilt-Zoom) Cameras",
            desc: "Tapo 1080P Outdoor Wired Pan/Tilt Security Wi-Fi Camera, 360° View, Motion Tracking, Works with Alexa & Google Home, Night Vision, Free AI Detection, Cloud & SD Card Storage(up to 512GB), Tapo C500",
            price: "$53.36",
            img: Img8
        },
    ];

    const [selectedItem, setSelectedItem] = useState(Data[0]);
    const [selectedItems, setSelectedItems] = useState([]);
console.log(selectedItems);
    const handleSlideChange = (index) => {
        setSelectedItem(Data[index]);
    };

    const handleSelect = (item) => {
        setSelectedItems([...selectedItems, { ...item, quantity: 1 }]);
    };

    return (
        <>
            <SideBar2 selectedItem={selectedItem} onSelect={handleSelect} />
            <section className={styles.main}>
                <div className={styles.camera}>
                    <Swiper
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper"
                        onSlideChange={(swiper) => handleSlideChange(swiper.activeIndex)}
                    >
                        {Data.map((item, i) => (
                            <SwiperSlide key={i}>
                                <img src={item.img} alt={item.title} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </>
    );
};

export default Sliders;
