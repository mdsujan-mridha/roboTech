import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MetaData from '../Layout/MetaData';
import './search.css';

const Search = () => {
    const [keyword, setKeyword] = useState('');

    const navigate = useNavigate();

    const searchSubmitHandler = (e) => {
        e.preventDefault();

        const trimmedKeyword = keyword.trim(); // Trim whitespace from the keyword

        if (trimmedKeyword) {
            navigate(`/products/${trimmedKeyword}`);
        } else {
            navigate('/products');
        }
    };

    const handleInputChange = (e) => {
        setKeyword(e.target.value);
    };

    return (
        <Fragment>
            <MetaData title={'Search your products'} />
            <form className="searchBox" onSubmit={searchSubmitHandler}>
                <input
                    type="text"
                    placeholder="Search a product..."
                    value={keyword}
                    onChange={handleInputChange}
                />
                <input type="submit" value="Search" />
            </form>
        </Fragment>
    );
};

export default Search;
