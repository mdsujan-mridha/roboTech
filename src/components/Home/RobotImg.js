import React from 'react';
import robot from "../../images/robot.png";
const RobotImg = () => {
    return (
        <>
            <div className='flex justify-center items-center relative my-24'>
                <div style={{ width: '700px', height: '500px', margin: '0 auto' }} className="hidden lg;inline md:inline absolute bottom-0 right-0 left-0 top-auto blur-2xl rounded-full opacity-30 bg-blue-700">

                </div>
                <img src={robot} alt="robot" className='vector-graphics' />

            </div>
        </>
    );
};

export default RobotImg;