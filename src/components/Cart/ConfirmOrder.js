import React, { Fragment } from 'react';
import MetaData from '../Layout/MetaData';
import CheckoutSteps from './CheckoutSteps';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const ConfirmOrder = () => {
    const { shippingInfo, cartItems } = useSelector((state) => state.cart);
    const { user } = useSelector((state) => state.user);
    const navigate = useNavigate();
    const subtotal = cartItems.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0
    );

    // calculate shipping price 
    // if subtotal is gather then 1000 then shippingPrice will 0 otherwise shipping price will 200
    const shippingPrice = subtotal > 1000 ? 0 : 200
    // calculate tax price 
    const tax = subtotal * 0.05; //you should add You tax,
    const totalPrice = subtotal + shippingPrice + tax;
    const address = `${shippingInfo.address},${shippingInfo.city},${shippingInfo.state},${shippingInfo.pinCode},${shippingInfo.country},${shippingInfo.phoneNumber}`;

    const proceedToPayment = () => {

        const data = {
            subtotal,
            shippingPrice,
            tax,
            totalPrice
        };
        sessionStorage.setItem("orderInfo", JSON.stringify(data));
        navigate("/process/payment");

    }



    return (
        <Fragment>
            <MetaData title="Confirm Order" />
            <CheckoutSteps activeStep={1} />

            <div className='w-full px-12 flex flex-col lg:flex-row min-h-screen my-10 gap-2'>
                {/* shipping info and user details  */}
                <div className='w-3/5 h-auto rounded-md px-5' style={{ backgroundColor: "var(--secondary)" }}>
                    <h1 className='text-2xl font-bold py-5 '> Shipping Info </h1>

                    <div className='py-5'>
                        <div className='flex gap-2'>
                            <p className='text-2xl font-semibold'>Name: </p>
                            <span className='text-2xl font-semibold'> {user.name} </span>
                        </div>
                        <div className='flex gap-2'>
                            <p className='text-2xl font-semibold'>Phone: </p>
                            <span className='text-2xl font-semibold'> {shippingInfo.phoneNumber} </span>
                        </div>
                        <div className='flex gap-2'>
                            <p className='text-2xl font-semibold'>Address: </p>
                            <span className='text-2xl font-semibold'> {address} </span>
                        </div>
                    </div>
                    <h1 className='text-2xl font-bold py-5 border-b-2'> Your cart Items  </h1>
                    <div>
                        {
                            cartItems &&
                            cartItems.map((item) => (
                                <div key={item.product} className='flex justify-between items-center px-12 py-5'>
                                    <img src={item.image} alt={item?.name} className='w-32 h-32' />
                                    <Link to={`/product/${item.product}`}>
                                        {item.name}

                                    </Link>
                                    <span>
                                        {item.quantity} X {item.price}={" "}
                                        <b>{item.price * item.quantity}</b>
                                    </span>

                                </div>
                            ))
                        }
                    </div>

                </div>
                {/* cart summary and cart info */}
                <div className='w-2/5 h-auto rounded-md px-5' style={{ backgroundColor: "var(--secondary)" }}>
                    <h1 className='text-center text-4xl py-10 border-b-2'> Order Summery </h1>
                    <div className='flex flex-col gap-3 py-5 px-5'>
                        <div className='flex justify-between items-center'>
                            <p> Subtotal: </p>
                            <span> {subtotal} </span>
                        </div>
                        <div className='flex justify-between items-center'>
                            <p> Shipping Charge: </p>
                            <span> {shippingPrice} </span>
                        </div>
                        <div className='flex justify-between items-center'>
                            <p> GST: </p>
                            <span> {tax} </span>
                        </div>
                    </div>
                    <div className='flex justify-between items-center px-5 border-t-2 py-2'>
                        <p> Total: </p>
                        <span> {totalPrice} </span>
                    </div>
                    <button
                        className='h-12 w-full outline-none rounded-full text-white font-bold text-xl mt-5'
                        style={{
                            backgroundImage: 'linear-gradient(to right,  #667EEA,#764BA2)',
                            backgroundOrigin: 'border-box',
                            backgroundClip: 'content-box, border-box'
                        }}
                        onClick={proceedToPayment}
                    > Proceed To Payment </button>
                </div>


            </div>
        </Fragment>
    );
};

export default ConfirmOrder;