import React from 'react';
import { Rating, styled } from '@mui/material';
import { products } from '../../utils/FakeData';
import { FaTags } from "react-icons/fa";
import OfferProducts from '../Home/OfferProducts';
import Reviews from '../../utils/Reviews';
import promotionImg from "../../images/p-1.jpg"

const StyledRating = styled(Rating)(({ theme }) => ({
    '& .MuiRating-iconEmpty': {
        color: theme.palette.grey[400], // Empty star color
    },
    '& .MuiRating-iconFilled': {
        color: '#F88D11', // Filled star color (for example, red)
    },
}));

// Only one products details
const product = products.find(p => p._id === 2);

const ProductsDetails = () => {
    return (
        <>
            <div className='pt-20 lg:px-12 mx-auto min-h-screen' style={{ backgroundColor: 'var(--primary)' }}>
                <div className='grid grid-cols-2 gap-4 mb-8'>
                    <figure className='border-2 border-gray-600 p-6'>
                        <img src={product?.image} alt="" className='w-full max-w-md mx-auto h-auto flex justify-center items-center object-contain' />
                    </figure>
                    <div className='text-white border-2 border-gray-600 p-6 space-y-2'>
                        <p className='text-gray-400 text-lg'>Product Id:{product._id}</p>
                        <div className="border-b border-gray-500"></div>
                        <h2 className='text-xl font-semibold'>Title: {product.name}</h2>
                        <p className='text-sm flex justify-start items-center gap-3 text-white'><StyledRating
                            readOnly
                            precision={0.5}
                            name='text-feedback'
                            value={product?.rating}
                        />20 Reviews/{product?.rating} ratting</p>
                        <p className='text-xl'>Price: {product.price} TK</p>
                        <div className="border-b border-gray-500"></div>
                        <div className='py-5 flex gap-2 text-4xl justify-start items-center'>
                            <button className='py-1 px-4 border-2' type="button">-</button>
                            <p>1</p>
                            <button className='py-1 px-4 border-2' type="button">+</button>
                            <button
                                className="md:ml-4 px-4 md:px-6 py-2 md:py-3 bg-[#F88D11] text-white text-2xl font-bold rounded-full hover:bg-[#f88c11ec]"
                            >
                                Add to cart
                            </button>
                        </div>
                        <div className="border-b border-gray-500"></div>
                        <div className=''>
                            <h3 className='text-2xl font-semibold py-2'>Available Offers:</h3>
                            <p className='text-xs'><span className='inline-block text-blue-500'><FaTags /></span> Bank Offer10% off on HDFC Bank Credit Card EMI Transactions, up to ₹1,500 on orders of ₹7,500 and above</p>
                            <p className='text-xs'><span className='inline-block text-blue-500'><FaTags /></span> Bank Offer10% off on HDFC Bank Credit Card EMI Transactions, up to ₹1,500 on orders of ₹7,500 and above</p>
                            <p className='text-xs'><span className='inline-block text-blue-500'><FaTags /></span> Bank Offer10% off on HDFC Bank Credit Card EMI Transactions, up to ₹1,500 on orders of ₹7,500 and above</p>
                        </div>
                        <div className="border-b border-gray-500"></div>
                        <button
                            className="px-4 md:px-12 py-2 md:py-3 bg-[#F88D11] text-white text-2xl font-bold rounded-full hover:bg-[#f88c11ec]"
                        >
                            Submit review
                        </button>
                    </div>
                </div>
                <div className='mb-8'>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className='w-full'>
                            <div className='flex gap-2 pl-2 mb-8'>
                                <button
                                    className="py-2 md:py-3 w-full bg-[#F88D11] text-white text-xl font-semibold rounded-2xl hover:bg-[#f88c11ec]"
                                >
                                    Add to cart
                                </button>
                                <button
                                    className="py-2 md:py-3 w-full bg-transparent hover:bg-gray-950 border-2 border-gray-500 text-white text-xl font-semibold rounded-2xl"
                                >
                                    Buy now
                                </button>
                            </div>
                        </div>
                        <div className='pl-2'>
                            <div className='inline-block mb-2'>
                                <h2 className='text-3xl font-bold mb-2'>Product Description</h2>
                                <div className="border-b">
                                    <li> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, iste! </li>
                                    <li> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, iste! </li>
                                    <li> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, iste! </li>
                                    <li> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, iste! </li>
                                    <li> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, iste! </li>
                                    <li> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, iste! </li>
                                    <li> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, iste! </li>
                                    <li> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, iste! </li>

                                </div>
                            </div>
                            <div>
                                <ol className='list-decimal pl-2'>
                                    {
                                        product?.description?.map(des => des)?.map((d, i) => <li key={i}>{d}</li>)
                                    }
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className='mb-2 flex flex-col lg:flex-row justify-between items-center'>

                            <div className="px-2 ">
                                <h2 className='text-3xl font-bold mb-2'>Specifications</h2>
                                <li> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, iste! </li>
                                <li> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, iste! </li>
                                <li> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, iste! </li>
                                <li> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, iste! </li>
                                <li> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, iste! </li>
                                <li> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, iste! </li>
                                <li> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, iste! </li>
                                <li> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, iste! </li>
                            </div>
                            <div className='flex'>
                                <img src={promotionImg} alt="promotion" />
                                <img src={promotionImg} alt="promotion" />
                            </div>
                        </div>

                        <table className='min-w-full text-center md:text-left'>
                            <tbody>
                                {
                                    product?.specifications?.map((p, i) => (
                                        <tr key={i}>
                                            <td>{Object.keys(p)}</td>
                                            <td>{p[`${Object.keys(p)}`]}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className=''>
                    {/* Blob shape positioned behind the OfferProducts */}


                    {/* OfferProducts components */}
                    <OfferProducts category='Related Products' />
                </div>
                <div>
                    <div className='text-center space-y-4'>
                        <h2 className='text-3xl'>All Reviews</h2>
                        <div className="border-b border-gray-500"></div>
                    </div>
                    <div className='mt-6'>
                        <Reviews />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductsDetails;