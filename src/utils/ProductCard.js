import React from 'react';
import { Rating, styled } from '@mui/material';

// const StyledRating = styled(Rating)({
//     color:'#F88D11',
// })

const StyledRating = styled(Rating)(({ theme }) => ({
    '& .MuiRating-iconEmpty': {
        color: theme.palette.grey[400], // Empty star color
    },
    '& .MuiRating-iconFilled': {
        color: '#F88D11', // Filled star color (for example, red)
    },
}));

const ProductCard = ({ product }) => {
    return (
        <>
            <div className=' w-80 bg-primary rounded-md flex flex-col justify-center items-center gap-5 z-50' style={{ height: 400, backgroundColor: 'var(--secondary)' }}>
                <img src={product?.image} alt="" className='w-64 h-56 flex justify-center items-start' />
                <div className='px-12'>
                    <h1 className='text-white text-lg font-bold'> {product?.name} </h1>
                    <p className='text-white opacity-75 py-3 '> Price: <span> TK. {product?.price} </span> </p>
                    <p className='flex justify-start items-center gap-3 text-white text-lg font-bold'> {product?.rating} <StyledRating
                        readOnly
                        precision={0.5}
                        name='text-feedback'
                        value={product?.rating}
                    /> </p>
                </div>
            </div>
        </>
    );
};

export default ProductCard;