import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import supplier01 from "../../images/supplier/1.png";
import supplier02 from "../../images/supplier/2.png";
import supplier03 from "../../images/supplier/3.png";
import supplier04 from "../../images/supplier/4.png";
import supplier05 from "../../images/supplier/5.png";
import supplier06 from "../../images/supplier/6.png";

const supplierData = [
    {
        _id: 1,
        image: supplier01,
        name: 'Pai Labs',
    },
    {
        _id: 2,
        image: supplier02,
        name: 'Pai Labs',
    },
    {
        _id: 3,
        image: supplier03,
        name: 'Pai Labs',
    },
    {
        _id: 4,
        image: supplier04,
        name: 'Pai Labs',
    },
    {
        _id: 5,
        image: supplier05,
        name: 'Pai Labs',
    },
    {
        _id: 6,
        image: supplier06,
        name: 'Pai Labs',
    },
    {
        _id: 7,
        image: supplier04,
        name: 'Pai Labs',
    },
    {
        _id: 8,
        image: supplier01,
        name: 'Pai Labs',
    },
    {
        _id: 9,
        image: supplier03,
        name: 'Pai Labs',
    },
]

const Supplier = () => {
    return (
        <Swiper
            slidesPerView={8}
            spaceBetween={2}
            loop={true}
            navigation={true}
            modules={[Navigation]}

            className="mySwiper my-32 z-50"
            style={{zIndex:99 }}
            breakpoints={{
                360: {
                    slidesPerView: 3, // Show 2 slides on screens >=576px wide
                },
                372: {
                    slidesPerView: 3, // Show 2 slides on screens >=576px wide
                },
                412: {
                    slidesPerView: 4, // Show 2 slides on screens >=576px wide
                },
                576: {
                    slidesPerView: 4, // Show 2 slides on screens >=576px wide
                },
                768: {
                    slidesPerView: 5, // Show 3 slides on screens >=768px wide
                },
                992: {
                    slidesPerView: 6, // Show 4 slides on screens >=992px wide
                },
                1200: {
                    slidesPerView: 8, // Show 5 slides on screens >=1200px wide
                },

            }}
        >
            {
                supplierData &&
                supplierData?.map((item) => (
                    <SwiperSlide
                        key={item?._id}
                    > <img src={item?.image} alt={item?.name} /> </SwiperSlide>
                ))
            }


        </Swiper>
    );
};

export default Supplier;