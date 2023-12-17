import React from 'react';




const FeaturesCategoryCard = ({ item }) => {
    console.log(item)
    return (
        <>
            <div className="w-full h-32 lg:w-48 rounded-md flex flex-col justify-center items-center gap-3 mt-14 mb-10 px-12 lg:px-0" style={{ backgroundColor: '#222222' }}>
                <img src={item?.image} alt={item?.category} />
                <h1 className='text-white font-bold text-lg text-center'> {item?.category} </h1>
            </div>
        </>
    );
};

export default FeaturesCategoryCard;