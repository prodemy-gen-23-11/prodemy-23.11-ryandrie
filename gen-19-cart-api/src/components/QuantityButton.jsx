function QuantityButton({ handleQuantity, quantity }) {
    return (
        <div className='rounded-full w-16 h-10 px-20 py-2 border border-black relative'>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='stroke-1 w-8 h-8 absolute left-4 inset-y-0.5 md:inset-y-1 hover:cursor-pointer hover:fill-black hover:stroke-white'
                id='removeQuantity'
                onClick={() => {
                    handleQuantity("minus");
                }}
            >
                <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                />
            </svg>

            <div
                id='quantityValue'
                className='absolute w-2 right-1/2 text-center select-none'
            >
                {quantity}
            </div>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='stroke-1 w-8 h-8 absolute right-4 inset-y-0.5 md:inset-y-1 hover:cursor-pointer hover:fill-black hover:stroke-white'
                id='addQuantity'
                onClick={() => {
                    handleQuantity("plus");
                }}
            >
                <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                />
            </svg>
        </div>
    );
}

export default QuantityButton;
