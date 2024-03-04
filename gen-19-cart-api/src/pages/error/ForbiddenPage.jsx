import React from "react";
import { Link } from "react-router-dom";

function ForbiddenPage() {
    return (
        <div className='bg-white m-5 p-10 rounded-2xl'>
            <div className='text-center'>
                <h1 className='mb-4 text-6xl font-semibold text-yellow-500'>
                    403 Forbidden
                </h1>
                <p className='mb-4 text-lg text-gray-600'>
                    Oops! You need to login to access this page.
                </p>
                <div className='animate-bounce'>
                    <svg
                        className='mx-auto h-16 w-16 text-yellow-500'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8'
                        ></path>
                    </svg>
                </div>
                <p className='mt-4 text-gray-600'>
                    Let's get you back{" "}
                    <Link to='/login' className='text-blue-500'>
                        login page
                    </Link>
                    .
                </p>
            </div>
        </div>
    );
}

export default ForbiddenPage;
