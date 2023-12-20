import React, { useState } from 'react';
import { products } from '../../utils/FakeData';
import { Rating, styled } from '@mui/material';
import { CiHeart, CiTrash } from "react-icons/ci";


const StyledRating = styled(Rating)(({ theme }) => ({
    '& .MuiRating-iconEmpty': {
        color: theme.palette.grey[400], // Empty star color
    },
    '& .MuiRating-iconFilled': {
        color: '#F88D11', // Filled star color (for example, red)
    },
}));

const Cart = () => {

    const productOne = products[2];
    console.log(productOne)

    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {

        if (productOne.Stock <= quantity) return;
        const qty = quantity + 1;
        setQuantity(qty);
    }
    const decreaseQuantity = () => {

        if (1 >= quantity) return;
        const qty = quantity - 1;
        setQuantity(qty);

    }

    return (
        <>
            <div className='px-4 mb-2 flex justify-between items-center border-[1px] border-gray-400 rounded-md hover:shadow-md hover:shadow-gray-600'>
                <figure className='h-32 lg:h-40 w-32 lg:w-40'>
                    <img className='h-full w-auto' src={productOne.image} alt="" />
                </figure>
                <div className='space-y-2'>
                    <h1 className='text-base'>{productOne.name}</h1>
                    <p className='flex justify-start items-center gap-1 text-white text-sm font-bold'> {productOne?.rating} <StyledRating
                        readOnly
                        precision={0.5}
                        name='text-feedback'
                        value={productOne?.rating}
                    /> </p>
                    <p className='text-sm font-semibold'>Brand Name</p>
                </div>
                <div className='text-base space-y-2'>
                    <p>${parseFloat(productOne.price).toFixed(2)}</p>
                    <div className='text-lg lg:text-2xl flex gap-1'>
                        <span className='text-white cursor-pointer'><CiHeart style={{ color: "#f00" }} /></span>
                        <span className='text-white cursor-pointer'><CiTrash /></span>
                    </div>
                </div>
                <div className=''>
                    <button className='py-[2px] px-3 border-2 bg-gray-900 hover:bg-gray-700' type="button" onClick={decreaseQuantity}>-</button>
                    <input
                        type="number"
                        value={quantity}
                        readOnly
                        className='bg-transparent'
                        style={{ width: 35, height: 45, textAlign: 'center', outline: 'none', appearance: 'textfield' }}
                    />
                    <button className='py-[2px] px-3 border-2  bg-gray-900 hover:bg-gray-700' type="button" onClick={increaseQuantity}>+</button>
                </div>
            </div>
        </>
    );
};

export default Cart;