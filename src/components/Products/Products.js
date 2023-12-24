import { ExpandLess, ExpandMore, Search, Star } from '@mui/icons-material';
import { Box, FormControl, FormControlLabel, Pagination, Radio, RadioGroup, Slider } from '@mui/material';
import React, { Fragment, useEffect, useState } from 'react';

import ProductCard from '../../utils/ProductCard';
import Loader from "../Layout/Loader";
import MetaData from '../Layout/MetaData';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, getProducts } from '../../actions/productAction';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

import "./products.css";

const categories = [
    "Electronics",
    "Mobiles",
    "Laptops",
    "Fashion",
    "Appliances",
    "Home",
];

const Products = () => {
    const dispatch = useDispatch();
    const { trimmedKeyword } = useParams();

    const [price, setPrice] = useState([0, 5000]);
    const [ratings, setRatings] = useState(0);

    const [category, setCategory] = useState("");
    const [ratingsToggle, setRatingsToggle] = useState(true);
    const [categoryToggle, setCategoryToggle] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

    const {
        loading,
        products,
        error,
        productsCount,
        resultPerPage,
        filteredProductsCount
    } = useSelector((state) => state.products)


    const priceHandler = (event, newPrice) => {
        setPrice(newPrice);
    };

    const count = filteredProductsCount;

    // console.log(products);

    console.log(category)

    const clearFilters = () => {
        setPrice([0, 200000]);
        setCategory("");
        setRatings(0);
    }
    //  pagination 
    const setCurrentPageNo = (e) => {
        setCurrentPage(e)
    }


    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch(clearErrors());
        }
        dispatch(getProducts(trimmedKeyword, category, price,ratings))
    }, [dispatch, trimmedKeyword, error, category, price, ratings, currentPage])


    return (
        <Fragment>
            {
                loading ? (<Loader />)
                    :
                    (
                        <Fragment>
                            <MetaData title="Product | RobotTech" />
                            <div className='min-h-screen' style={{ backgroundColor: 'var(--secondary)' }}>
                                <div className='px-12 flex w-full pt-36'>
                                    <input
                                        type="text"
                                        name="search"
                                        placeholder='Search your products'
                                        id="1"
                                        className='w-full h-14 bg-transparent border-2 rounded-full outline-none px-10 text-white font-bold text-sm' />
                                    <button> <Search sx={{ color: 'orange', fontSize: '50px', marginLeft: '-70px' }} /></button>
                                </div>
                                {/* filter product div */}
                                <div className='flex justify-between flex-col-reverse md:flex-row lg:flex-row gap-5 mt-10 px-12'>
                                    <div className='w-full md:w-3/12 lg:w-1/5 min-h-screen rounded-md pb-5' style={{ backgroundColor: 'var(--primary)' }}>
                                        {/* filter by category */}
                                        <div className="flex flex-col border-b px-4">
                                            <div className="flex items-center justify-between gap-5 px-4 py-2 border-b">
                                                <p className="text-lg font-medium">Filters</p>
                                                <span className="uppercase text-primary-blue text-xs cursor-pointer font-medium" onClick={() => clearFilters()}>clear all</span>
                                            </div>
                                            <div className="flex justify-between cursor-pointer py-2 pb-4 items-center" onClick={() => setCategoryToggle(!categoryToggle)}>
                                                <p className="font-bold text-xl uppercase">Category</p>
                                                {categoryToggle ?
                                                    <ExpandLess sx={{ fontSize: "20px" }} /> :
                                                    <ExpandMore sx={{ fontSize: "20px" }} />
                                                }
                                            </div>

                                            {categoryToggle && (
                                                <div className="flex flex-col pb-1">
                                                    <FormControl>
                                                        <RadioGroup
                                                            aria-labelledby="category-radio-buttons-group"
                                                            onChange={(e) => setCategory(e.target.value)}
                                                            name="category-radio-buttons"
                                                            value={category}
                                                        >
                                                            {categories.map((el, i) => (
                                                                <FormControlLabel value={el} control={<Radio size="small" style={{ color: "orange" }} />} label={<span className="font-bold opacity-75 cursor-pointer hover:opacity-100" key={i}>{el}</span>} />
                                                            ))}
                                                        </RadioGroup>
                                                    </FormControl>
                                                </div>
                                            )}

                                        </div>
                                        {/* filter by price  */}
                                        <div className='px-5'>
                                            <h1 className='text-white font-bold text-xl py-3'> Filter by Price </h1>
                                            <hr style={{ color: 'gray', backgroundColor: 'gray', height: 2, border: 'none' }} />
                                            <Box className="py-5">
                                                <Slider
                                                    value={price}
                                                    onChange={priceHandler}
                                                    valueLabelDisplay="auto"
                                                    getAriaLabel={() => 'Price range slider'}
                                                    min={0}
                                                    max={5000}
                                                    sx={{
                                                        color: 'white', // Set the color to white
                                                        '& .MuiSlider-thumb': {
                                                            '&:hover, &.Mui-focusVisible': {
                                                                boxShadow: 'none', // Optional: Remove hover/focus shadow
                                                            },
                                                        },
                                                        '& .MuiSlider-rail': {
                                                            opacity: 0.5, // Adjust rail opacity if needed
                                                        },
                                                    }}
                                                />
                                            </Box>
                                        </div>
                                        {/* filter by brand  */}
                                        {/* <div className='pt-2 pb-2 px-5'>
                                            <h1 className='text-white font-bold text-xl pb-3'> Filter by Brand  </h1>
                                            <hr style={{ color: 'gray', backgroundColor: 'gray', height: 2, border: 'none' }} />
                                            <div className='py-5 flex flex-col gap-3'>
                                                {
                                                    categories.map((category, index) => (
                                                        <li
                                                            className='list-none font-bold opacity-75 cursor-pointer hover:opacity-100'
                                                            key={index}
                                                        > {category} </li>
                                                    ))
                                                }
                                            </div>
                                        </div> */}
                                        {/* filter by rating  */}
                                        <div className=''>
                                            <div className="flex flex-col border-b px-2">

                                                <div className="flex justify-between cursor-pointer py-2 pb-4 items-center" onClick={() => setRatingsToggle(!ratingsToggle)}>
                                                    <p className="text-white font-bold text-xl pb-3 uppercase">ratings</p>
                                                    {ratingsToggle ?
                                                        <ExpandLess sx={{ fontSize: "20px" }} /> :
                                                        <ExpandMore sx={{ fontSize: "20px" }} />
                                                    }
                                                </div>

                                                {ratingsToggle && (
                                                    <div className="flex flex-col pb-1">
                                                        <FormControl>
                                                            <RadioGroup
                                                                aria-labelledby="ratings-radio-buttons-group"
                                                                onChange={(e) => setRatings(e.target.value)}
                                                                value={ratings}
                                                                name="ratings-radio-buttons"
                                                            >
                                                                {[4, 3, 2, 1].map((el, i) => (
                                                                    <FormControlLabel value={el} key={i} control={<Radio size="small" style={{ color: "orange" }} />} label={<span className="flex font-bold opacity-75 cursor-pointer hover:opacity-100">{el}<Star sx={{ fontSize: "12px", mr: 0.5 }} /> & above</span>} />
                                                                ))}
                                                            </RadioGroup>
                                                        </FormControl>
                                                    </div>
                                                )}

                                            </div>
                                        </div>
                                    </div>
                                    {/* product div  */}
                                    <div className='w-full min-h-screen lg:w-4/5 rounded-md pb-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-3 lg:px-12 pt-5' style={{ backgroundColor: 'var(--primary)' }}>
                                        {
                                            products &&
                                            products.map((product) => (
                                                <ProductCard
                                                    key={product?._id}
                                                    product={product}
                                                >
                                                </ProductCard>
                                            ))

                                        }

                                    </div>

                                </div>
                                <div className='my-5 h-56 w-full'>
                                    <div className='paginationBox'>
                                        <Pagination
                                            nextPageText="Next"
                                            prevPageText="Prev"
                                            firstPageText="First"
                                            lastPageText="Last"
                                            itemClass='page-item'
                                            linkClass='page-link'
                                            activeClass='pageItemActive'
                                            activeLinkClass='pageLinkActive'

                                        ></Pagination>
                                    </div>


                                </div>
                            </div>
                        </Fragment>
                    )
            }
        </Fragment>
    );
};

export default Products;