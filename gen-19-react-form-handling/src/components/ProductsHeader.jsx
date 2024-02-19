import React from "react";
import { Link } from "react-router-dom";

function ProductsHeader({ handleSubmit, handleInputChange, page }) {
    return (
        <div className='product-header p-3 flex justify-between items-center flex-wrap'>
            <span className='header-title font-semibold'>Products</span>
            <div className='header-action'>
                <form onSubmit={(event) => handleSubmit(event)}>
                    <div className='flex gap-4 items-center'>
                        <input
                            placeholder='Search Product ...'
                            className='search-bar border-blue-700 border bg-gainsboro-50 rounded-xl px-2 pl-4 py-2.5 text-sm font-mono focus:ring-2 focus:outline-none focus:ring-blue-300'
                            onChange={(event) => {
                                handleInputChange(event);
                            }}
                        />
                        <input
                            className='text-blue-700 hover:text-white border border-blue-700 hover:cursor-pointer hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center '
                            type='submit'
                            value='Search'
                        />
                        {page === "admin" && (
                            <>
                                <div className='border-blue-700 border-l-[1px] h-8'></div>
                                <Link to={"/admin/addproduct"}>
                                    <div className='flex items-center gap-2 text-blue-700 hover:text-white border border-blue-700 hover:cursor-pointer hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2 text-center '>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            fill='none'
                                            viewBox='0 0 24 24'
                                            stroke-width='1.5'
                                            stroke='currentColor'
                                            class='w-6 h-6'
                                        >
                                            <path
                                                stroke-linecap='round'
                                                stroke-linejoin='round'
                                                d='M12 4.5v15m7.5-7.5h-15'
                                            />
                                        </svg>
                                        <span>Add New Product</span>
                                    </div>
                                </Link>
                            </>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ProductsHeader;
