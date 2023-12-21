import React, { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Loader from '../Layout/Loader';
import MetaData from '../Layout/MetaData';

const Profile = () => {
    const { user, loading, isAuthenticated } = useSelector((state) => state.user);
    const navigate = useNavigate();

    useEffect(() => {

        if (isAuthenticated === false) {
            navigate("/login")

        }

    }, [navigate, isAuthenticated])

    return (

        <Fragment>
            {
                loading ?
                    (<Loader />)
                    :
                    (
                        <Fragment>

                            <MetaData title={`${user.name}'s profile`} />
                            <div className=' min-h-screen w-full px-12 flex flex-col lg:flex-row justify-around gap-5 items-center'>
                                <div className='flex flex-col justify-center items-center gap-5'>
                                    <h1 className='text-4xl font-bold '> My Profile </h1>
                                    <img src={user?.avatar?.url} alt={user.name} className='w-72 h-72 rounded-full bg-slate-700 flex justify-center items-center' />
                                    <Link className='h-14 p-5 bg-orange-500 rounded-full text-center font-bold w-52'> Update Profile </Link>
                                </div>
                                <div>
                                    <div>
                                        <h4 className='text-2xl font-bold'>Full Name</h4>
                                        <p className='bg-orange-500 h-14 rounded-xl p-5'>{user.name}</p>
                                    </div>
                                    <div>
                                        <h4 className='text-2xl font-bold'>Email</h4>
                                        <p className='bg-orange-500 h-14 rounded-xl p-5'>{user.email}</p>
                                    </div>
                                    <div>
                                        <h4>Joined On</h4>
                                        <p>{user?.createAt}</p>
                                    </div>

                                    <div className='pt-10'>
                                        <Link className='h-14 p-5 bg-orange-500 rounded-full text-center font-bold w-52' to="/orders">My Orders</Link>
                                        <Link className='h-14 p-5 bg-orange-500 rounded-full text-center font-bold w-52' to="/update/password">Change Password</Link>
                                    </div>
                                </div>

                            </div>

                        </Fragment>
                    )

            }
        </Fragment>

    );
};

export default Profile;