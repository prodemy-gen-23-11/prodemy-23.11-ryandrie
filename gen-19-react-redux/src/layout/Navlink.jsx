import { useState } from "react";
import { Link } from "react-router-dom";
import toRupiah from "../util/formatter";
import { useSelector } from "react-redux";

function Navlink({ page }) {
    const [toggle, setToggle] = useState(false);
    const { dataCart: cart } = useSelector((state) => state.cart);

    return (
        <div className='justify-around gap-8 font-franklin text-sm lg:text-base hidden md:flex'>
            {page === "admin" ? (
                <>
                    <Link className='navlink-hover' to='/admin/dashboard'>
                        Dashboard
                    </Link>

                    <a className='navlink-hover' href=''>
                        Customers
                    </a>
                    <a className='navlink-hover' href=''>
                        Purchases
                    </a>
                </>
            ) : (
                <>
                    <Link className='navlink-hover' to='/'>
                        Home
                    </Link>
                    <Link to={"/cart"}>
                        <div onMouseEnter={() => setToggle(true)}>
                            <div className='navlink-hover relative' href=''>
                                Cart
                                {cart.length > 0 && (
                                    <span className='absolute -right-3.5 -top-1 bg-red-500 rounded-full text-sm text-white opacity-90'>
                                        <div className='flex items-center justify-center w-4 h-4'>
                                            {cart.length}
                                        </div>
                                    </span>
                                )}
                            </div>
                        </div>
                    </Link>
                    <div
                        onMouseEnter={() => setToggle(true)}
                        onMouseLeave={() => setToggle(false)}
                        className={`absolute top-16 z-10 flex flex-col w-96 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm ${
                            toggle
                                ? "opacity-100 visible"
                                : "opacity-0 invisible"
                        }`}
                    >
                        <div className='px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg '>
                            <h3 className='font-semibold text-gray-900 '>
                                Your Cart
                            </h3>
                        </div>
                        <div className='px-5 pt-6 pb-4 flex flex-col gap-4 h-max-80 overflow-auto'>
                            {cart.length > 0 ? (
                                cart.map((item, index) => (
                                    <div
                                        className='flex gap-4 justify-between'
                                        key={index}
                                    >
                                        <img
                                            className='w-16 h-16 border rounded-xl'
                                            src={item.imageUrl}
                                            alt=''
                                        />
                                        <div className='text-xs flex flex-col gap-2 justify-center'>
                                            <span className='text-justify'>
                                                {item.name}
                                            </span>
                                            <div className='flex justify-between'>
                                                <span>Size : {item.size}</span>
                                                <span>
                                                    {toRupiah(item.price)}
                                                </span>
                                            </div>
                                        </div>
                                        <div className='flex justify-center items-center'>
                                            x{item.quantity}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className='text-center'>
                                    Your shopping cart is empty.
                                </div>
                            )}
                        </div>
                        <hr className='mt-2 mx-4 border-gainsboro' />
                        <Link to={"/cart"} className='self-end w-2/5'>
                            <div className='border rounded-xl  m-2 px-4 py-2 bg-black text-white text-center hover:cursor-pointer hover:bg-white hover:text-black'>
                                See Details
                            </div>
                        </Link>
                    </div>
                    <a className='navlink-hover' href=''>
                        Checkout
                    </a>
                    <a className='navlink-hover' href=''>
                        About
                    </a>
                </>
            )}
        </div>
    );
}

export default Navlink;
