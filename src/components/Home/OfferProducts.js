import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../utils/ProductCard';
import { products } from '../../utils/FakeData';


const OfferProducts = ({category}) => {


    // console.log(products);
    return (
        <Fragment>
            

                <div className='flex justify-between items-center mt-3'>
                    <h2 className='text-white font-bold text-lg'> {category} </h2>
                    <Link className='text-white font-bold text-lg cursor-pointer'> view all </Link>
                </div>
                <div className='mt-10 mb-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3'>
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
       

        </Fragment>
    );
};

export default OfferProducts;