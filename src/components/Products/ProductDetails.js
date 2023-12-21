import React, { Fragment, useEffect, useState } from 'react';
import { Rating, styled } from '@mui/material';
import { FaTags } from "react-icons/fa";
import OfferProducts from '../Home/OfferProducts';
import Reviews from '../../utils/Reviews';
import { Check } from '@mui/icons-material';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../actions/cartAction';
import { useParams } from 'react-router-dom';
import { getProductDetails } from '../../actions/productAction';
import Carousel from 'react-material-ui-carousel';
import { clearErrors } from '../../actions/userAction';
import Loader from '../Layout/Loader';

const StyledRating = styled(Rating)(({ theme }) => ({
    '& .MuiRating-iconEmpty': {
        color: theme.palette.grey[400], // Empty star color
    },
    '& .MuiRating-iconFilled': {
        color: '#F88D11', // Filled star color (for example, red)
    },
}));

// Only one products details


const ProductsDetails = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    
    const [quantity, setQuantity] = useState(1);
    const { loading, product, error } = useSelector((state) => state.productDetails);

    const increaseQuantity = () => {
        if (product.Stock <= quantity) return;
        const qty = quantity + 1;
        setQuantity(qty);
    }
    const decreaseQuantity = () => {

        if (1 >= quantity) return;
        const qty = quantity - 1;
        setQuantity(qty);

    }

    const addToCartHandler = () => {
        dispatch(addItemToCart(id, quantity))
        toast.success("Item added to cart");
    }


    useEffect(() => {

        if (error) {
            toast.error(error);
            dispatch(clearErrors());
        }
        dispatch(getProductDetails(id))

    }, [dispatch, id, error])

    return (
        <>
            {
                loading ? (
                    <Loader />
                ) : (
                    <Fragment>
                        <div className='pt-20 lg:px-12 mx-auto min-h-screen' style={{ backgroundColor: 'var(--primary)' }}>
                            <div className='grid grid-cols-2 gap-4 mb-8'>
                                <figure className='border-2 border-gray-600 p-6'>
                                    <Carousel className='carousel'>
                                        {
                                            product.images &&
                                            product.images.map((item, i) => (

                                                // console.log(item.url)
                                                <img
                                                    style={{ width: '20vmax !important' }}
                                                    className='flex justify-center items-center'
                                                    key={item.url}
                                                    src={item.url}
                                                    alt={`${i} Slide`} />
                                            ))
                                        }
                                    </Carousel>
                                </figure>
                                <div className='text-white border-2 border-gray-600 p-6 space-y-2'>
                                    <p className='text-gray-400 text-lg'>Product Id:{product?._id}</p>
                                    <div className="border-b border-gray-500"></div>
                                    <h2 className='text-xl font-semibold'>Title: {product?.name}</h2>
                                    <p className='text-sm flex justify-start items-center gap-3 text-white'><StyledRating
                                        readOnly
                                        precision={0.5}
                                        name='text-feedback'
                                        value={product.ratings}
                                    /> {product.numOfReviews} Reviews/{product?.ratings} rattings</p>
                                    <p className='text-xl'>Price: {product.price} TK</p>
                                    <div className="border-b border-gray-500"></div>
                                    <div className='py-5 flex gap-2 text-4xl justify-start items-center'>
                                        <button className='py-1 px-4 border-2' type="button" onClick={decreaseQuantity}>-</button>
                                        <input
                                            type="number"
                                            value={quantity}
                                            readOnly
                                            className='bg-transparent'
                                            style={{ width: 60, height: 45, textAlign: 'center', outline: 'none' }}
                                        />
                                        <button className='py-1 px-4 border-2' type="button" onClick={increaseQuantity}>+</button>
                                        <button
                                            className="md:ml-4 px-4 md:px-6 py-2 md:py-3 bg-[#F88D11] text-white text-2xl font-bold rounded-full hover:bg-[#f88c11ec]"
                                            onClick={addToCartHandler}
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
                                                onClick={addToCartHandler}
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
                                </div>
                            </div>
                            {/* product description and specification  */}

                            <div className='flex flex-col lg:flex-row justify-between items-center'>
                                <div>
                                    <h1 className="text-4xl font-bold py-5">
                                        <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, #667EEA, #764BA2)' }}>
                                            Description
                                        </span>
                                    </h1>
                                    <p><Check> </Check> Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, aut?  </p>
                                    <p><Check> </Check> Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, aut?  </p>
                                    <p><Check> </Check> Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, aut?  </p>
                                    <p><Check> </Check> Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, aut?  </p>
                                    <p><Check> </Check> Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, aut?  </p>
                                </div>
                                <div>
                                    <h1 className="text-4xl font-bold py-5">
                                        <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, #667EEA, #764BA2)' }}>
                                            Specifications
                                        </span>
                                    </h1>
                                    <p><Check> </Check> Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, aut?  </p>
                                    <p><Check> </Check> Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, aut?  </p>
                                    <p><Check> </Check> Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, aut?  </p>
                                    <p><Check> </Check> Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, aut?  </p>
                                    <p><Check> </Check> Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, aut?  </p>
                                </div>


                            </div>
                            <div className=''>
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
                    </Fragment>
                )
            }
        </>
    );
};

export default ProductsDetails;