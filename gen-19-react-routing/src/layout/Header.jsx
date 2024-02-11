import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className='bg-white m-5 p-5 rounded-2xl flex justify-between items-center h-14'>
            <div className='mx-2 font-impact'>Ustora</div>
            <div className='justify-around gap-8 font-franklin text-sm lg:text-base hidden md:flex'>
                <Link className='navlink-hover' to='/'>
                    Home
                </Link>

                <a className='navlink-hover' href=''>
                    Cart
                </a>
                <a className='navlink-hover' href=''>
                    Checkout
                </a>
                <a className='navlink-hover' href=''>
                    About
                </a>
            </div>

            <div className='mx-2 items-center hidden md:flex'>
                <img
                    className='w-7 rounded-full'
                    src='https://www.w3schools.com/howto/img_avatar.png'
                    alt='Profile Image'
                />
                <span className='ml-2 text-sm'>Ryandrie Satria</span>
            </div>

            <div className='hamburger-menu md:hidden'>
                <div className='hamburger-menu-icon pr-2' tabIndex='0'>
                    <label htmlFor='nav-check'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='currentColor'
                            className='w-7 h-7 stroke-2 hover:cursor-pointer'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                            />
                        </svg>
                    </label>
                </div>
                <input type='checkbox' className='hidden peer' id='nav-check' />
                <div className='hamburger-menu-list flex flex-col justify-evenly bg-white m-5 rounded-2xl fixed right-0.5 top-16 shadow-xl w-3/4 z-50 h-0 overflow-hidden peer-checked:h-[350px] transition-all duration-500'>
                    <div className='mx-2 px-3 items-center flex'>
                        <img
                            className='w-7 rounded-full'
                            src='https://www.w3schools.com/howto/img_avatar.png'
                            alt='Profile Image'
                        />
                        <span className='ml-2 text-sm'>Ryandrie Satria</span>
                    </div>
                    <div className='justify-around font-franklin text-base flex flex-col px-5'>
                        <a href='./asdads'>Home</a>
                        <hr className='my-2 border-black' />
                        <a href=''>Cart</a>
                        <hr className='my-2 border-black' />
                        <a href=''>Checkout</a>
                        <hr className='my-2 border-black' />
                        <a href=''>About</a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
