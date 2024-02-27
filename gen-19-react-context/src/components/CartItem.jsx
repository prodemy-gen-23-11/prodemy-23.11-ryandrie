import { useState } from "react";
import toRupiah from "../util/formatter";
import QuantityButton from "./QuantityButton";

function CartItem({ data, handleClickDiscard, setItemQuantity }) {
    function handleQuantity(sign) {
        if (sign === "minus" && data.quantity === 1) {
            handleClickDiscard(data);
        }
        setItemQuantity(data, sign);
    }

    return (
        <>
            <div className='text-left col-span-2'>
                <div className='flex gap-4'>
                    <img
                        className='w-28 border rounded-xl'
                        src={data.imageUrl}
                        alt=''
                    />
                    <div className='text-sm flex flex-col gap-2 justify-center'>
                        <span className=''>{data.name}</span>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center text-sm'>
                {data.size}
            </div>
            <div className='flex items-center justify-center text-sm'>
                {toRupiah(data.price)}
            </div>
            <div className='flex items-center justify-center '>
                <QuantityButton
                    handleQuantity={handleQuantity}
                    quantity={data.quantity}
                />
            </div>
            <div className='flex items-center justify-center text-sm'>
                {toRupiah(data.price * data.quantity)}
            </div>
            <div className='flex items-center justify-center text-sm'>
                <div
                    onClick={() => handleClickDiscard(data)}
                    className='border rounded-xl px-10 py-2 bg-red-500 text-white hover:cursor-pointer hover:bg-red-600'
                >
                    Discard
                </div>
            </div>
        </>
    );
}

export default CartItem;
