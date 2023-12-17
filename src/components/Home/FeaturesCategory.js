import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { categoryList } from '../../utils/FakeData';
import FeaturesCategoryCard from '../../utils/FeaturesCategoryCard';

const FeaturesCategory = () => {
    // console.log(categoryList);

    return (
        <Swiper className="mySwiper"
            slidesPerView={8}
            spaceBetween={2}
            loop={true}
            breakpoints={{
                360: {
                    slidesPerView: 1, // Show 2 slides on screens >=576px wide
                },
                372: {
                    slidesPerView: 1, // Show 2 slides on screens >=576px wide
                },
                412: {
                    slidesPerView: 1, // Show 2 slides on screens >=576px wide
                },
                576: {
                    slidesPerView: 1, // Show 2 slides on screens >=576px wide
                },
                768: {
                    slidesPerView: 2, // Show 3 slides on screens >=768px wide
                },
                992: {
                    slidesPerView: 6, // Show 4 slides on screens >=992px wide
                },
                1200: {
                    slidesPerView: 8, // Show 5 slides on screens >=1200px wide
                },
             
            }}
        >
            {categoryList &&
                categoryList.map((item, index) => (
                    <SwiperSlide key={item?._id}>
                        <FeaturesCategoryCard item={item} />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
};

export default FeaturesCategory;
