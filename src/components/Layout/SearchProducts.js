import React from 'react';

const SearchProducts = () => {
    return (
        <div className="flex items-center justify-center mt-8 mb-16">
            <div className="relative w-10/12">
                <input
                    type="text" 
                    placeholder="Search..."
                    className="py-2 px-4 w-full bg-black text-white border-2 border-white rounded-full focus:outline-none"
                />
                <button
                    className="absolute right-0 top-0 bottom-0 px-8 m-1 bg-[#F88D11] text-white rounded-full hover:bg-[#f88c11ec] focus:outline-none"
                >
                    search
                </button>
            </div>
        </div>
    );
};

export default SearchProducts;