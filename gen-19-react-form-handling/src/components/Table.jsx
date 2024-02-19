import toRupiah from "../util/formatter";
import { useEffect, useRef, useState } from "react";

function Table({ products }) {
    const [productId, setproductId] = useState(-1);
    const ref = useRef(null);

    function handleClick(id) {
        productId === id ? setproductId(-1) : setproductId(id);
    }
    const sizes = [39, 40, 41, 42, 43, 44];

    useEffect(() => {
        ref.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [productId]);

    return (
        <table className='w-full text-sm text-left table-fixed'>
            <thead className='text-xs bg-gray-700 text-gray-100 '>
                <tr className='border rounded-xl'>
                    <th scope='col' className='px-4 py-3 w-[40%]'>
                        Product Name
                    </th>
                    <th scope='col' className='px-4 py-3'>
                        Category
                    </th>
                    <th scope='col' className='px-4 py-3'>
                        Brand
                    </th>
                    <th scope='col' className='px-4 py-3'>
                        Price
                    </th>
                    <th scope='col' className='px-4 py-3'>
                        Stock
                    </th>
                    <th scope='col' className='px-4 py-3'>
                        Sold
                    </th>
                    <th scope='col' className='px-4 py-3 w-14'>
                        &nbsp;
                    </th>
                </tr>
            </thead>
            <tbody>
                {products.map((data, index) => (
                    <>
                        <tr
                            id={data.id}
                            className={`border-2 hover:cursor-pointer hover:bg-gainsboro ${
                                index % 2 !== 0 ? "bg-gray-50" : "bg-white"
                            }`}
                            onClick={() => handleClick(data.id)}
                            ref={productId === data.id ? ref : null}
                        >
                            <td className='px-4 py-3 flex items-center gap-4'>
                                <img
                                    src={data.imageUrl[0]}
                                    className='h-14  mix-blend-multiply border rounded-xl'
                                />
                                {data.name}
                            </td>
                            <td className='px-4 py-3'>{data.category}</td>
                            <td className='px-4 py-3'>{data.brand}</td>
                            <td className='px-4 py-3'>
                                {toRupiah(data.price)}
                            </td>
                            <td className='px-4 py-3'>{data.stock}</td>
                            <td className='px-4 py-3'>{data.sold}</td>
                            <td>
                                {productId === data.id ? (
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        strokeWidth='1.5'
                                        stroke='currentColor'
                                        className='w-6 h-6'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            d='m4.5 15.75 7.5-7.5 7.5 7.5'
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        strokeWidth='1.5'
                                        stroke='currentColor'
                                        className='w-6 h-6'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            d='m19.5 8.25-7.5 7.5-7.5-7.5'
                                        />
                                    </svg>
                                )}
                            </td>
                        </tr>
                        <tr
                            className={`w-full border-2 ${
                                index % 2 !== 0 ? "bg-gray-50" : "bg-white"
                            } `}
                        >
                            <td
                                colSpan={7}
                                className={
                                    productId === data.id ? "" : "hidden"
                                }
                            >
                                <div className='px-4 py-3'>
                                    <div className='image-preview-list flex justify-center my-4 gap-x-4 w-auto'>
                                        {data.imageUrl.map((url) => (
                                            <div
                                                key={url}
                                                className='border rounded-xl'
                                            >
                                                <img
                                                    className='p-1 mx-auto mix-blend-multiply h-52  hover:scale-150 hover:cursor-pointer transition-all'
                                                    src={url}
                                                    alt=''
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <h2 className='product-title font-mono font-bold text-2xl'>
                                        Details
                                    </h2>
                                    <div className='product-details-specific my-4 font-poppins'>
                                        <p>
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. Nulla
                                            dolorem alias praesentium illo
                                            provident obcaecati voluptas, eius,
                                            sint reiciendis perspiciatis omnis
                                            suscipit tempore laboriosam cumque
                                            harum. Fuga nostrum molestiae
                                            ducimus! Eum, sit excepturi maiores
                                            delectus amet earum ex hic ratione
                                            obcaecati voluptates dolores at
                                            deleniti corrupti repellendus
                                            corporis praesentium nostrum, alias
                                            sunt fuga nesciunt assumenda quaerat
                                            odio, quos et! Eligendi!
                                        </p>
                                        <p className='font-bold mt-4'>Size</p>
                                        <div className='product-details-size-button flex gap-3'>
                                            {sizes.map((val) => (
                                                <button
                                                    key={val}
                                                    className='btn-size-option'
                                                >
                                                    {val}
                                                </button>
                                            ))}
                                        </div>
                                        <hr className='my-4 border-black' />
                                        <div className='flex justify-end gap-4'>
                                            <div className='border rounded-xl px-4 py-2 bg-red-500 text-white hover:cursor-pointer hover:bg-red-600'>
                                                Discard
                                            </div>
                                            <div className='border rounded-xl px-4 py-2 bg-black text-white hover:cursor-pointer hover:bg-white hover:text-black'>
                                                Update Product
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </>
                ))}
            </tbody>
        </table>
    );
}

export default Table;
