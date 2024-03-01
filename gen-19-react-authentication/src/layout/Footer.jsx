import React from "react";

function Footer() {
    return (
        <footer className='bg-white m-5 p-5 rounded-2xl font-poppins flex flex-wrap justify-evenly gap-4'>
            <div className='footer-about-us w-[300px]'>
                <h2 className='footer-wid-title font-impact text-xl text-center mb-4'>
                    Ustora
                </h2>
                <p className='text-justify'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Perferendis sunt id doloribus vero quam laborum quas alias
                    dolores blanditiis iusto consequatur, modi aliquid eveniet
                    eligendi iure eaque ipsam iste, pariatur omnis sint!
                    Suscipit, debitis, quisquam. Laborum commodi veritatis magni
                    at?
                </p>
            </div>
            <div className='footer-menu w-[300px]'>
                <h2 className='footer-wid-title font-bold text-xl text-center mb-4'>
                    User Navigation
                </h2>
                <ul className='underline text-center flex flex-col gap-4'>
                    <li>
                        <a href='#'>My account</a>
                    </li>
                    <li>
                        <a href='#'>Order history</a>
                    </li>
                    <li>
                        <a href='#'>Wishlist</a>
                    </li>
                    <li>
                        <a href='#'>Vendor contact</a>
                    </li>
                    <li>
                        <a href='#'>Front page</a>
                    </li>
                </ul>
            </div>
            <div className='footer-menu w-[300px]'>
                <h2 className='footer-wid-title font-bold text-xl text-center mb-4'>
                    Categories
                </h2>
                <ul className='underline text-center flex flex-col gap-4'>
                    <li>
                        <a href='#'>Footwear</a>
                    </li>
                    <li>
                        <a href='#'>Pants</a>
                    </li>
                    <li>
                        <a href='#'>Jacket</a>
                    </li>
                    <li>
                        <a href='#'>Sweatshirts</a>
                    </li>
                    <li>
                        <a href='#'>Tops & Blouses</a>
                    </li>
                </ul>
            </div>
            <div className='footer-newsletter w-[300px]'>
                <h2 className='footer-wid-title font-bold text-xl text-center mb-4'>
                    Newsletter
                </h2>
                <p className='text-justify mb-2'>
                    Sign up to our newsletter and get exclusive deals you wont
                    find anywhere else straight to your inbox!
                </p>
                <div className='newsletter-form '>
                    <form
                        action='#'
                        className='text-center flex gap-2 flex-wrap justify-center'
                    >
                        <input
                            className='border border-black p-2 rounded-md text-sm'
                            type='email'
                            placeholder='Type your email'
                        />
                        <input
                            className='bg-gainsboro p-2 rounded-md border border-black text-sm'
                            type='submit'
                            value='Subscribe'
                        />
                    </form>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
