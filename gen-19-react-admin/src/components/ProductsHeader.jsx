import React from "react";
import Input from "./Input";

function ProductsHeader({ handleSubmit, handleInputChange }) {
    return (
        <div className='product-header p-3 flex justify-between items-center flex-wrap'>
            <span className='header-title font-semibold'>Products</span>
            <div className='header-action'>
                <form onSubmit={(event) => handleSubmit(event)}>
                    <div className='flex gap-4'>
                        <input
                            placeholder='Search Product ...'
                            className='search-bar border-blue-700 border bg-gainsboro-50 rounded-xl px-2 pl-4 text-sm font-mono focus:ring-2 focus:outline-none focus:ring-blue-300'
                            onChange={(event) => {
                                handleInputChange(event);
                            }}
                        />
                        <Input
                            className='text-blue-700 hover:text-white border border-blue-700 hover:cursor-pointer hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center '
                            type='submit'
                            value='Search'
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ProductsHeader;
