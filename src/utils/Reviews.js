import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Reviews = () => {

    return (
        <>
            <Swiper
                slidesPerView={3}
                centeredSlides={true}
                spaceBetween={30}
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='bg-primary rounded-lg flex flex-col justify-center items-center gap-5 z-50 hover:shadow-md hover:shadow-gray-700  cursor-pointer' style={{ backgroundColor: 'var(--primary)' }}>
                        <figure className=''>
                            <img src={"https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg"} alt="" className='w-full h-52 flex justify-center items-start rounded-md' />
                        </figure>
                        <div className='px-2'>
                            <h1 className='text-white text-lg font-bold text-center'> Johan Denver </h1>
                            <p className='text-white opacity-75 py-3 '>In publishing and graphic design,Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id quia doloribus dolor cum inventore eligendi iste sed odit fuga atque?</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-primary rounded-lg flex flex-col justify-center items-center gap-5 z-50 hover:shadow-md hover:shadow-gray-700  cursor-pointer' style={{ backgroundColor: 'var(--primary)' }}>
                        <figure className=''>
                            <img src={"https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg"} alt="" className='w-full h-52 flex justify-center items-start rounded-md' />
                        </figure>
                        <div className='px-2'>
                            <h1 className='text-white text-lg font-bold text-center'> Johan Denver </h1>
                            <p className='text-white opacity-75 py-3 '>In publishing and graphic design,Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id quia doloribus dolor cum inventore eligendi iste sed odit fuga atque?</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-primary rounded-lg flex flex-col justify-center items-center gap-5 z-50 hover:shadow-md hover:shadow-gray-700  cursor-pointer' style={{ backgroundColor: 'var(--primary)' }}>
                        <figure className=''>
                            <img src={"https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg"} alt="" className='w-full h-52 flex justify-center items-start rounded-md' />
                        </figure>
                        <div className='px-2'>
                            <h1 className='text-white text-lg font-bold text-center'> Johan Denver </h1>
                            <p className='text-white opacity-75 py-3 '>In publishing and graphic design,Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id quia doloribus dolor cum inventore eligendi iste sed odit fuga atque?</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Reviews;