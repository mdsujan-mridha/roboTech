import React, { Fragment, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import profileImage from "../../images/profileImage.png";
import { toast } from 'react-toastify';
import { clearErrors, register } from '../../actions/userAction';
import Loader from '../Layout/Loader';

const Register = () => {

    const dispatch = useDispatch();
    const { error, loading, isAuthenticated } = useSelector((state) => state.user);
    const [avatar, setAvatar] = useState(profileImage);
    const [avatarPreview, setAvatarPreview] = useState(profileImage);
    const location = useLocation();
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });
    const { name, email, password } = user;

    const registerSubmit = (e) => {
        e.preventDefault();
        const myForm = new FormData();

        myForm.append("name", name);
        myForm.append("email", email);
        myForm.append("password", password);
        myForm.append("avatar", avatar);
        console.log(myForm);
        dispatch(register(myForm));
    }
    // register data change

    const registerDataChange = (e) => {
        if (e.target.name === "avatar") {
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.readyState === 2) {
                    setAvatarPreview(reader.result);
                    setAvatar(reader.result);
                }
            };
            reader.readAsDataURL(e.target.files[[0]]);
        } else {
            setUser({ ...user, [e.target.name]: e.target.value });
        }

    };

    // redirect user after successfull login 
    const redirect = location.search ? location.search.split("=")[1] : "/account";
    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch(clearErrors())
        }
        if (isAuthenticated) {
            toast.success("Thanks for logged in");
            navigate(redirect);
        }
    }, [error, isAuthenticated, dispatch, navigate, redirect])



    return (
        <Fragment>
            <div className='w-full min-h-screen flex items-center justify-center' style={{ position: 'relative' }}>
                <div className='w-52 h-2/4 bg-blue-500 absolute top-20 bottom-auto left-90 right-auto blur-3xl opacity-30 rounded-md skew-y-6'></div>
                <div className="w-full lg:w-1/3 rounded-md shadow-2xl" style={{ backgroundColor: 'var(--secondary)', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <h1 className="text-4xl font-bold text-center py-10">
                        <span className="bg-clip-text text-transparent text-center" style={{ backgroundImage: 'linear-gradient(90deg, #667EEA, #764BA2)' }}>
                            Register
                        </span>
                    </h1>
                    <hr className="w-full my-6 border-none" style={{ height: '2px', backgroundImage: 'linear-gradient(to right, #764BA2, #667EEA)' }} />
                    <div className='px-12'>
                        <form className='flex flex-col gap-5' onSubmit={registerSubmit}>
                            <input
                                type="text"
                                value={name}
                                onChange={registerDataChange}
                                name='name'
                                required
                                placeholder='Enter you name'
                                className='bg-transparent h-12 w-full border-b-2 rounded-xl outline-none px-5' />
                            <input
                                type="email"
                                required
                                value={email}
                                name='email'
                                onChange={registerDataChange}
                                placeholder='Enter you email'
                                className='bg-transparent h-12 w-full border-b-2 rounded-xl outline-none px-5' />
                            <input
                                type="password"
                                required
                                value={password}
                                name='password'
                                onChange={registerDataChange}
                                placeholder='Enter you password'
                                className='bg-transparent h-12 w-full border-b-2 rounded-xl outline-none px-5' />
                           <img src={avatarPreview} alt="Avatar_Preview" className='w-32 h-32'/>
                            <input
                                type="file"
                                name="avatar"
                                accept="image/*"
                                onChange={registerDataChange}
                                className='bg-transparent h-12 w-full border-b-2 rounded-xl outline-none px-5 flex justify-center items-center'
                            />
                            {
                                loading ? <Loader></Loader> : (<input
                                    type="submit"
                                    value="signup"
                                    className='h-12 w-full outline-none rounded-full text-white font-bold text-xl cursor-pointer'
                                    style={{
                                        backgroundImage: 'linear-gradient(to right,  #667EEA,#764BA2)',
                                        backgroundOrigin: 'border-box',
                                        backgroundClip: 'content-box, border-box'
                                    }}
                                />)
                            }
                        </form>

                    </div>

                    <div className='flex justify-between items-center w-full px-12 pb-10 pt-5'>
                        <Link> Already have an account ? </Link>
                        <Link> Forgot password ? </Link>
                    </div>
                </div>

            </div>
        </Fragment>
    );
};

export default Register;