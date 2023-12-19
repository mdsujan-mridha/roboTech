import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    // handle login 

    const loginSubmit = (e) => {
        e.preventDefault();
        console.log(loginEmail, loginPassword);
    }

    return (
        <>
            <div className='w-full min-h-screen flex items-center justify-center' style={{ position: 'relative' }}>
                <div className='w-52 h-2/4 bg-blue-500 absolute top-20 bottom-auto left-90 right-auto blur-3xl opacity-30 rounded-md skew-y-6'></div>
                <div className="w-full lg:w-1/3 rounded-md shadow-2xl" style={{ backgroundColor: 'var(--secondary)', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <h1 className="text-4xl font-bold text-center py-10">
                        <span className="bg-clip-text text-transparent text-center" style={{ backgroundImage: 'linear-gradient(90deg, #667EEA, #764BA2)' }}>
                            Login
                        </span>
                    </h1>
                    <hr className="w-full my-6 border-none" style={{ height: '2px', backgroundImage: 'linear-gradient(to right, #764BA2, #667EEA)' }} />
                    <div className='px-12'>
                        <form className='flex flex-col gap-5' onSubmit={loginSubmit}>
                            <input
                                type="email"
                                value={loginEmail}
                                required
                                onChange={(e) => setLoginEmail(e.target.value)}
                                placeholder='Enter you email'
                                className='bg-transparent h-12 w-full border-b-2 rounded-xl outline-none px-5' />
                            <input
                                type="password"
                                required
                                value={loginPassword}
                                onChange={(e) => setLoginPassword(e.target.value)}
                                placeholder='Enter you password'
                                className='bg-transparent h-12 w-full border-b-2 rounded-xl outline-none px-5' />
                            <input
                                type="submit"
                                value="Login"
                                className='h-12 w-full outline-none rounded-full text-white font-bold text-xl cursor-pointer'
                                style={{
                                    backgroundImage: 'linear-gradient(to right,  #667EEA,#764BA2)',
                                    backgroundOrigin: 'border-box',
                                    backgroundClip: 'content-box, border-box'
                                }}
                            />
                        </form>

                    </div>

                    <div className='flex justify-between items-center w-full px-12 pb-10 pt-5'>
                        <Link to="/register"> New in ROBOTECH ? </Link>
                        <Link> Forgot password ? </Link>
                    </div>
                </div>

            </div>


        </>
    );
};

export default Login;