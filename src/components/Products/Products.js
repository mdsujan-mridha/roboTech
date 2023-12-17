import { Search } from '@mui/icons-material';
import { Box, Slider } from '@mui/material';
import React, { useState } from 'react';

const categories = [
    "Robotic Toys",
    "Industrial Automation",
    "Robotics for Kids",
    "Robotic Gadgets",
    "Robotic Toys",
    "Industrial Automation",
    "Robotic Gadgets",
];

const Products = () => {
    const [value, setValue] = useState([20, 3000]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <div className=' min-h-screen' style={{ backgroundColor: 'var(--secondary)' }}>
                <div className='px-12 flex w-full pt-36'>
                    <input
                        type="text"
                        name="search"
                        placeholder='Search your products'
                        id="1"
                        className='w-full h-14 bg-transparent border-2 rounded-full outline-none px-10 text-white font-bold text-sm' />
                    <button> <Search sx={{ color: 'orange', fontSize: '50px', marginLeft: '-70px' }} /></button>
                </div>
                <div className='flex justify-between items-center gap-5 mt-10 px-12'>
                    <div className='w-full lg:w-1/5 h-screen rounded-md' style={{ backgroundColor: 'var(--primary)' }}>

                        <div className='pt-5 pb-2 px-5'>
                            <h1 className='text-white font-bold text-xl py-3'> Filter by Category </h1>
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
                        </div>

                        <div className='px-5'>
                            <h1 className='text-white font-bold text-xl py-3'> Filter by Price </h1>
                            <hr style={{ color: 'gray', backgroundColor: 'gray', height: 2, border: 'none' }} />
                            <Box className="py-10">
                                <Slider
                                    getAriaLabel={() => 'Temperature range'}
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

                    </div>
                    <div className='w-full h-screen lg:w-4/5 rounded-md' style={{ backgroundColor: 'var(--primary)' }}></div>
                </div>
            </div>
        </>
    );
};

export default Products;