import React, { useState } from 'react';
import Cart from './Cart';


const ShoppingCart = () => {

    return (
        <>
            <div className='mt-20 lg:mt-28 lg:mx-12 mx-auto min-h-screen space-y-4' style={{ backgroundColor: 'var(--primary)' }}>
                <div className='flex justify-around'>
                    <h3 className='text-3xl'>Shopping Cart</h3>
                    <p>Price</p>
                </div>
                <hr className="border-t-2 border-gray-300 opacity-40" />
                <div className='lg:mx-auto w-full xl:w-4/5 flex flex-col md:flex-row gap-4 mt-8'>
                    <div className='w-full md:w-[67%]  p-2 rounded-md' style={{ backgroundColor: 'var(--secondary)' }}>
                        {/* Demo Cart */}
                        <Cart />
                        <Cart />
                        <Cart />
                        <Cart />
                    </div>
                    <div className='w-full md:w-[33%] space-y-3 p-2 lg:px-5 rounded-md' style={{ backgroundColor: 'var(--secondary)' }}>
                        <p className='text-lg'>Order Summary</p>
                        <div className='flex justify-between'>
                            <p className='text-gray-400'>Subtotal (0 items)</p>
                            <p>$0</p>
                        </div>
                        <div className='flex justify-between gap-1'>
                            <input
                                type="text"
                                placeholder='Enter Voucher Code'
                                className='text-black pl-2 rounded-sm py-1 w-3/4'
                                style={{ outline: 'none' }}
                            />
                            <button className='px-1 w-3/12 font-medium bg-[#F88D11] hover:bg-[#f88c11ec] rounded-sm uppercase'>Apply</button>
                        </div>
                        <div className='flex justify-between text-lg'>
                            <p>Total</p>
                            <p><span className='text-[#F88D11]'>$ 0</span></p>
                        </div>
                        <button className='w-full py-2 font-medium bg-[#F88D11] hover:bg-[#f88c11ec] uppercase'>Proceed to checkout</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShoppingCart;