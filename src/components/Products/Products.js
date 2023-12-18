import React, { useState } from 'react';
import SearchProducts from '../Layout/SearchProducts';
import { products } from '../../utils/FakeData';
import ProductCard from '../../utils/ProductCard';
import { Box, Slider } from '@mui/material';
import useTitle from '../../utils/useTitle';
import usePagination from '@mui/material/usePagination/usePagination';
import styled from '@emotion/styled';

const categories = [
    "Robotic Toys",
    "Industrial Automation",
    "Robotics for Kids",
    "Robotic Gadgets",
    "Robotic Toys",
    "Industrial Automation",
    "Robotic Gadgets",
];

const brands = [
    "RoboGenius",
    "CyberNex",
    "MechMinds",
    "TechTronics",
    "RoboWave",
    "FutureBots",
    "RoboCraze"
]

const Products = () => {
    // Page title
    useTitle("Products");

    const [value, setValue] = useState([20, 3000]);
    const [rating, setRating] = useState([0, 5]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleRatingChange = (e, newValue) => {
        setRating(newValue)
    }

    // For pagination
    const List = styled('ul')({
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
    });

    const { items } = usePagination({
        count: 10,
    });

    return (
        <>
            <div className='lg:px-12 mx-auto min-h-screen' style={{ backgroundColor: 'var(--secondary)' }}>
                {/* Search Product */}
                <SearchProducts />
                <section className='grid grid-cols-5 gap-1'>
                    <aside className='pt-12 pl-8 lg:pl-12 pr-1 rounded-3xl' style={{ backgroundColor: 'var(--primary)' }}>
                        <div className='mb-4'>
                            <div className='text-lg font-bold  mb-4'>
                                <h4>Filter by Category</h4>
                            </div>
                            <div className='mb-3'>
                                <hr className="border-t-2 border-gray-300 opacity-40" />
                            </div>
                            <div className=''>
                                <ul className='space-y-2 text-gray-300'>
                                    {
                                        categories.map((categorie, i) => (
                                            <li key={i} className='hover:text-white  opacity-70 cursor-pointer hover:opacity-100'><a href=""></a>{categorie}</li>))
                                    }
                                </ul>
                            </div>
                        </div>
                        {/* filter by price  */}
                        <div className=''>
                            <h1 className='text-white font-bold text-xl py-3'> Filter by Price </h1>
                            <hr style={{ color: 'gray', backgroundColor: 'gray', height: 2, border: 'none' }} />
                            <Box className="py-5">
                                <Slider
                                    value={value}
                                    onChange={handleChange}
                                    valueLabelDisplay="auto"
                                    aria-labelledby='range-slider'
                                    min={20}
                                    max={3000}
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
                        <div className='mb-4'>
                            <div className='text-lg font-bold mb-4'>
                                <h4>Filter by Brand</h4>
                            </div>
                            <div className='mb-3'>
                                <hr className="border-t-2 border-gray-300 opacity-40" />
                            </div>
                            <div className=''>
                                <ul className='space-y-2 text-gray-300'>
                                    {
                                        brands.map((brand, i) => (
                                            <li key={i} className='hover:text-white  opacity-70 cursor-pointer hover:opacity-100'><a href=""></a>{brand}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        {/* filter by rating  */}
                        <div className=''>
                            <h1 className='text-white font-bold text-xl py-3'> Filter by Rating </h1>
                            <hr style={{ color: 'gray', backgroundColor: 'gray', height: 2, border: 'none' }} />
                            <Box className="py-5">
                                <Slider
                                    value={rating}
                                    onChange={handleRatingChange}
                                    valueLabelDisplay="auto"
                                    aria-labelledby='range-slider'
                                    min={0}
                                    max={5}
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
                    </aside>

                    {/* Products */}
                    <aside className='col-span-4 pt-12 pl-8 rounded-3xl' style={{ backgroundColor: 'var(--primary)' }}>
                        <h3 className='text-gray-400'>Your Products</h3>
                        <div className='mt-10 mb-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
                            {/* Demo products */}
                            {
                                products &&
                                products?.map((product) => (
                                    <ProductCard
                                        key={product?._id}
                                        product={product}
                                    />
                                ))
                            }
                            {/* Demo products */}
                            {
                                products &&
                                products?.map((product) => (
                                    <ProductCard
                                        key={product?._id}
                                        product={product}
                                    />
                                ))
                            }
                            {/* Demo products */}
                            {
                                products &&
                                products?.map((product) => (
                                    <ProductCard
                                        key={product?._id}
                                        product={product}
                                    />
                                ))
                            }
                        </div>
                        <div>
                            <nav>
                                <List>
                                    {items.map(({ page, type, selected, ...item }, index) => {
                                        let children = null;

                                        if (type === 'start-ellipsis' || type === 'end-ellipsis') {
                                            children = '…';
                                        } else if (type === 'page') {
                                            children = (
                                                <button
                                                    type="button"
                                                    style={{
                                                        fontWeight: selected ? 'bold' : undefined,
                                                    }}
                                                    {...item}
                                                >
                                                    {page}
                                                </button>
                                            );
                                        } else {
                                            children = (
                                                <button type="button" {...item}>
                                                    {type}
                                                </button>
                                            );
                                        }

                                        return <li key={index}>{children}</li>;
                                    })}
                                </List>
                            </nav>
                        </div>
                    </aside>
                </section>
            </div>
        </>
    );
};

export default Products;