import Swal from "sweetalert2";
import CartItem from "../components/CartItem";
import Layout from "../layout/Layout";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import toRupiah from "../util/formatter";

function CartPage() {
    const {
        cart,
        setItemQuantity,
        removeItemFromCart,
        emptyCart,
        getTotalPrice,
    } = useContext(CartContext);

    function handleClickDiscard(product) {
        Swal.fire({
            title: "Discard this product?",
            text: "You will discard this product from your shopping cart.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Discard",
            reverseButtons: true,
        }).then((result) => {
            if (result.isConfirmed) {
                removeItemFromCart(product);
                Swal.fire({
                    title: "Discarded!",
                    text: "Product has been discarded from your shopping cart.",
                    icon: "success",
                });
            }
        });
    }

    function handleClickClearCart() {
        Swal.fire({
            title: "Clear your shopping cart?",
            text: "You will discard all products from your shopping cart.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Discard",
            reverseButtons: true,
        }).then((result) => {
            if (result.isConfirmed) {
                emptyCart();
                Swal.fire({
                    title: "Cleared!",
                    text: "Your shopping cart has been cleared.",
                    icon: "success",
                });
            }
        });
    }

    return (
        <Layout>
            <main className='bg-white m-5 p-5 rounded-2xl'>
                <span className=' font-semibold'>Shopping Cart</span>
                <div className='grid grid-cols-7 gap-4 px-4 py-6 w-full text-center'>
                    <span className='text-left col-span-2'>Product</span>
                    <span>Size</span>
                    <span>Price</span>
                    <span>Quantity</span>
                    <span>Total Price</span>
                    <span>Action</span>
                    <hr className='my-2 border-gainsboro col-span-7' />
                    {cart.length > 0 ? (
                        cart.map((item, index) => (
                            <CartItem
                                key={index}
                                handleClickDiscard={handleClickDiscard}
                                data={item}
                                setItemQuantity={setItemQuantity}
                            />
                        ))
                    ) : (
                        <div className='col-span-7'>
                            Your shopping cart is empty.
                        </div>
                    )}

                    <hr className='my-2 border-gainsboro col-span-7' />
                    <div className='col-span-2'>
                        <div
                            onClick={handleClickClearCart}
                            className='border w-3/5 rounded-xl px-10 py-2 bg-red-500 text-white hover:cursor-pointer hover:bg-red-600'
                        >
                            Clear Cart
                        </div>
                    </div>
                    <div className='col-start-5 text-lg font-semibold flex justify-end items-center'>
                        Total :
                    </div>
                    <div className=' text-lg font-semibold flex justify-center items-center'>
                        {toRupiah(getTotalPrice())}
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className='border rounded-xl w-4/5 py-2 bg-blue-500 text-white hover:cursor-pointer hover:bg-blue-600'>
                            Checkout
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}

export default CartPage;
