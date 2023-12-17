import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import img01 from "../../images/policy/image 1.png";
import img02 from "../../images/policy/image 2.png";
import img03 from "../../images/policy/image 3.png";
import img04 from "../../images/policy/image 4.png";
import img05 from "../../images/policy/image 5.png";
import img06 from "../../images/policy/image 6.png";
import img07 from "../../images/policy/image 7.png";

const policyData = [
    {
        _id: 1,
        img: img01,
        title: "SECURE PAYMENT"
    },
    {
        _id: 2,
        img: img02,
        title: "3 HOURS DELIVERY"
    },
    {
        _id: 3,
        img: img03,
        title: "UP TO 36 MONTHS EMI"
    },
    {
        _id: 4,
        img: img04,
        title: "DISPLAY INSURANCE"
    },
    {
        _id: 5,
        img: img05,
        title: "EASY TO RETURNS"
    },
    {
        _id: 6,
        img: img06,
        title: "WARRANTY COVERAGE "
    },
    {
        _id: 7,
        img: img07,
        title: "100% GENUINE PRODUCTS"
    },
    {
        _id: 8,
        img: img05,
        title: "EASY TO RETURNS"
    },
    {
        _id: 9,
        img: img02,
        title: "3 HOURS DELIVERY"
    },
]

const PolicyProcess = () => {
    return (
        <>
            <Swiper
                slidesPerView={8}
                spaceBetween={2}
                loop={true}
                navigation={true}
                modules={[Navigation]}

                className="mySwiper my-32"
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
                    policyData &&
                    policyData?.map((item) => (
                        <SwiperSlide
                            key={item?._id}
                        >
                            <div className='flex flex-col justify-center items-center gap-2 w-full lg:w-44 h-auto'>
                            <img src={item?.img} alt={item?.name} />
                            <h3 className='text-white font-semibold text-sm'> {item?.title} </h3>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    );
};

export default PolicyProcess;