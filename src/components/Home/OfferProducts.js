import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../utils/ProductCard';
import { products } from '../../utils/FakeData';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../actions/productAction';


const OfferProducts = ({ category }) => {
    const dispatch = useDispatch();

    const {
        loading,
        products: allProducts,
        error,
        productsCount,
        resultPerPage,
        filteredProductsCount


    } = useSelector((state) => state.products);
    const products = allProducts.slice(0, 5);
    
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    // console.log(products);
    return (
        <Fragment>


            <div className='flex justify-between items-center mt-3'>

                <h1 className="text-2xl font-bold">
                    <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, #667EEA, #764BA2)' }}>
                        {category}
                    </span>
                </h1>
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