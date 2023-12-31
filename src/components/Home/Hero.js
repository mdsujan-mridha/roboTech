import React from 'react';
import heroImg from "../../images/hero-1.png";

const Hero = () => {
    return (
        <>
            <div className='h-52 lg:h-96' style={{ backgroundImage: `url(${heroImg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', backgroundOrigin: 'content-box' }}>
                <div className='h-52 lg:h-96 flex flex-col justify-center items-center text-white gap-5' style={{ backgroundColor: '#141414', opacity: '0.75', zIndex: 100 }}>

                    <h1 className="text-4xl font-bold text-center">
                        <span className="bg-clip-text text-transparent text-center" style={{ backgroundImage: 'linear-gradient(90deg, #667EEA, #764BA2)' }}>
                            Your Gateway to Innovative Robotics
                        </span>
                    </h1>
                    <div className='flex flex-col justify-center items-center text-sm font-medium w-96 lg:w-auto'>
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;