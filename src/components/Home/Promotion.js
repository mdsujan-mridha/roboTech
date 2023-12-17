import React from 'react';
import promotionImg01 from "../../images/p-1.jpg";
import promotionImg02 from "../../images/p-2.jpg";

const Promotion = () => {
    return (
        <>
            <div className='flex flex-col lg:flex-row gap-5 justify-center items-center w-full mt-2 px-0 lg:px-12' style={{ backgroundColor: '#141414', opacity: '0.75' }}>
                <img src={promotionImg01} alt="promotion"  className='w-full lg:w-1/2 rounded-md h-80'/>
                <img src={promotionImg02} alt="promotion" className='w-full lg:w-1/2 rounded-md h-80'/>
            </div>
        </>
    );
};

export default Promotion;