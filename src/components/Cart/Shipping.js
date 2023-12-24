import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { saveShippingInfo } from '../../actions/cartAction';
import MetaData from '../Layout/MetaData';
import CheckoutSteps from './CheckoutSteps';
import { Home, LocationCity, Phone, PinDrop, Public, TransferWithinAStation } from '@mui/icons-material';
import { Country, State } from 'country-state-city';



const Shipping = () => {

    const dispatch = useDispatch();
    const { ShippingInfo } = useSelector((state) => state.cart);

    const [address, setAddress] = useState(ShippingInfo?.address);
    const [city, setCity] = useState(ShippingInfo?.city);
    const [state, setState] = useState(ShippingInfo?.state);
    const [country, setCountry] = useState(ShippingInfo?.country);
    const [pinCode, setPinCode] = useState(ShippingInfo?.pinCode);
    const [phoneNumber, setPhoneNumber] = useState(ShippingInfo?.phoneNumber);

    const navigate = useNavigate();

    const shippingSubmit = (e) => {
        e.preventDefault();
        if (phoneNumber.length < 10 || phoneNumber.length > 10) {
            toast.warn("Phone number must be 10 digit");
            return
        }
        dispatch(
            saveShippingInfo({ address, city, state, country, pinCode, phoneNumber })
        );
        navigate("/order/confirm")

    }

    return (
        <Fragment>
            <MetaData title="shipping details" />
            <CheckoutSteps activeStep={0} />
            <div className='min-h-screen'>
                <h1 className='text-4xl font-bold py-5 text-center'> Shipping Details </h1>
                <hr className='w-full lg:w-1/2 flex justify-center items-center' style={{ margin: "0 auto" }} />
                <form
                    className='w-full lg:w-4/12 flex items-center gap-4 py-5 flex-col justify-center'
                    style={{ margin: "0 auto" }}
                    onSubmit={shippingSubmit}
                    encType='multipart/form-data'
                >
                    <div className='flex w-full gap-2'>
                        <Home style={{ fontSize: "3vmax" }} />
                        <input
                            type="text"
                            placeholder='Address'
                            required
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className='w-full rounded-full h-12 px-5 outline-none text-black'
                        />
                    </div>
                    <div className='flex w-full gap-2'>
                        <LocationCity style={{ fontSize: "3vmax" }} />
                        <input
                            type="text"
                            placeholder='City'
                            required
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            className='w-full rounded-full h-12 px-5 outline-none text-black'
                        />
                    </div>
                    <div className='flex w-full gap-2'>
                        <PinDrop style={{ fontSize: "3vmax" }} />
                        <input
                            type="text"
                            placeholder='Country code'
                            required
                            value={pinCode}
                            onChange={(e) => setPinCode(e.target.value)}
                            className='w-full rounded-full h-12 px-5 outline-none text-black'
                        />
                    </div>
                    <div className='flex w-full gap-2'>
                        <Phone style={{ fontSize: "3vmax" }} />
                        <input
                            type="text"
                            placeholder='Phone Number'
                            required
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className='w-full rounded-full h-12 px-5 outline-none text-black'
                        />
                    </div>
                    {/* country  */}
                    <div className='flex w-full gap-2'>
                        <Public style={{ fontSize: "3vmax" }} />
                        <select
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            className='w-full rounded-full h-12 px-5 outline-none text-black'
                        >

                            <option value=""> Country </option>
                            {
                                Country &&
                                Country.getAllCountries().map((item) => (
                                    <option
                                        key={item.isCode}
                                        value={item.isoCode}
                                    >{item.name} </option>
                                ))
                            }


                        </select>
                    </div>
                    {
                        country && (
                            <div className='flex w-full gap-2'>
                                <TransferWithinAStation style={{ fontSize: "3vmax" }} />
                                <select
                                    value={state}
                                    onChange={(e) => setState(e.target.value)}
                                    className='w-full rounded-full h-12 px-5 outline-none text-black'
                                >

                                    <option value=""> State </option>
                                    {State &&
                                        State.getStatesOfCountry(country).map((item) => (
                                            <option key={item.isoCode} value={item.isoCode}>
                                                {item.name}
                                            </option>
                                        ))}


                                </select>
                            </div>
                        )
                    }
                    <div className='w-full pl-0 lg:pl-12' style={{ margin: "0 auto" }}>
                        <input
                            type="submit"
                            value="Shipping"
                            className='h-12 w-full outline-none rounded-full text-white font-bold text-xl'
                            style={{
                                backgroundImage: 'linear-gradient(to right,  #667EEA,#764BA2)',
                                backgroundOrigin: 'border-box',
                                backgroundClip: 'content-box, border-box'
                            }}
                            disabled={state ? false : true}
                        />
                    </div>
                </form>




            </div >
        </Fragment >
    );
};

export default Shipping;