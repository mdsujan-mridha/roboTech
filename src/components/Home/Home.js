import React from 'react';
import Hero from './Hero';
import Promotion from './Promotion';
import FeaturesCategory from './FeaturesCategory';
import OfferProducts from './OfferProducts';
import Supplier from './Suplier';
import RobotImg from './RobotImg';
import PolicyProcess from './PolicyProcess';

const Home = () => {
    return (
        <>
            <Hero />
            <Promotion />
            <div className='px-12 relative'>
                <div className='flex flex-col justify-center items-center gap-4 mt-24 mb-10'>

                    <h1 className="text-4xl font-bold text-center">
                        <span className="bg-clip-text text-transparent text-center" style={{ backgroundImage: 'linear-gradient(90deg, #667EEA, #764BA2)' }}>
                            Featured Category
                        </span>
                    </h1>
                    <p className='text-white font-bold opacity-70'> Get Your Desired Product from Featured Category! </p>
                </div>
                <div className='w-80 h-80 bg-blue-700 absolute top-10 bottom-auto left-auto right-0 blur-3xl opacity-50 rounded-md'></div>
                <FeaturesCategory />
                <OfferProducts category='Offer products' />

            </div>
            <div className='px-12 relative'>
                {/* Blob shape positioned behind the OfferProducts */}
                <div className='w-80 h-80 bg-blue-700 absolute top-[-100px] bottom-auto left-0 right-auto blur-3xl opacity-50 rounded-md z-10'></div>

                {/* OfferProducts components */}
                <OfferProducts category='New products' />
                <OfferProducts category='Featured Products' />

            </div>
            <div className='px-12 relative'>
                <div className='w-80 h-80 bg-red-500 absolute top-[-150px] bottom-auto left-auto right-0 blur-3xl opacity-20 rounded-md z-10'></div>
                <Supplier />
                <RobotImg />
                <PolicyProcess />
            </div>
        </>
    );
};

export default Home;