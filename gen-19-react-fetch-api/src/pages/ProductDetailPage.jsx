import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import shoes from "../data/Shoes";
import Card from "../components/Card";
import _ from "lodash";
import { useParams } from "react-router-dom";
import Badge from "../components/Badge";
import axios from "axios";
import useSWR from "swr";

function ProductDetail() {
    const { id } = useParams();
    const sizes = [39, 40, 41, 42, 43, 44];

    // const [product, setProduct] = useState({});
    // const [loading, setLoading] = useState(true);

    const [related, setRelated] = useState([]);
    const [mainImage, setMainImage] = useState();
    const [size, setSize] = useState(39);
    const [quantity, setQuantity] = useState(1);

    const fetcher = (url) =>
        axios.get(url).then((res) => {
            return res.data;
        });

    const { data: product, isLoading } = useSWR(
        `http://localhost:3000/shoes/${id}`,
        fetcher
    );

    const { data: products } = useSWR(`http://localhost:3000/shoes/`, fetcher);

    useEffect(() => {
        setRelated(
            _.sampleSize(
                products?.filter((item) => item.id !== id),
                4
            )
        );
    }, [products]);

    useEffect(() => {
        window.scrollTo(0, 0);
        setMainImage(product?.imageUrl[0]);
        setSize(39);
        setQuantity(1);
        setRelated(
            _.sampleSize(
                products?.filter((item) => item.id !== id),
                4
            )
        );
    }, [product]);

    // setRelated(
    //     _.sampleSize(
    //         products?.filter((item) => item.id !== id),
    //         4
    //     )
    // );

    // const fetchData = async () => {
    //     try {
    //         const { data: dataProduct } = await axios.get(
    //             `http://localhost:3000/shoes/${id}`
    //         );
    //         const { data: dataRelatedProduct } = await axios.get(
    //             `http://localhost:3000/shoes`
    //         );
    //         setProduct(dataProduct);
    //         setMainImage(dataProduct.imageUrl[0]);
    //         setRelated(
    // _.sampleSize(
    //     dataRelatedProduct.filter(
    //         (item) => item.id !== dataProduct.id
    //     ),
    //     4
    // )
    //         );
    //         setLoading(false);
    //     } catch (error) {
    //         console.log(error);
    //         setLoading(false);
    //     }
    // };

    // useEffect(() => {
    //     window.scrollTo(0, 0);
    //     fetchData();
    //     setSize(39);
    //     setQuantity(1);
    // }, [id]);

    function handleMainImage(url) {
        setMainImage(url);
    }

    function handleSize(val) {
        setSize(val);
    }

    function handleQuantity(sign) {
        if (sign === "plus") {
            setQuantity(quantity + 1);
        } else if (sign === "minus") {
            quantity === 1 ? 1 : setQuantity(quantity - 1);
        }
    }

    if (isLoading) return <div>Loading ...</div>;

    return (
        <Layout>
            <main className='bg-white m-5 p-5 rounded-2xl flex flex-wrap justify-evenly gap-2'>
                <div className='image-preview w-auto md:w-[80%] lg:w-[40%] flex flex-col items-center'>
                    <div className='image-preview-main border rounded-2xl border-black shadow-md w-full'>
                        <img
                            id='imagePreview'
                            className='w-[80%] p-4 mx-auto'
                            src={mainImage}
                            alt='Preview'
                        />
                        <div className='product-quantity flex justify-between px-4 mb-4 text-[14px] font-mono'>
                            <Badge>Stock : {product.stock} </Badge>
                            <Badge>Sold : {product.sold} </Badge>
                        </div>
                    </div>
                    <div className='image-preview-list flex my-4 gap-x-4 w-auto'>
                        {product.imageUrl.map((url) => (
                            <div
                                key={url}
                                onClick={() => {
                                    handleMainImage(url);
                                }}
                                className={
                                    url === mainImage
                                        ? "image-preview-option-selected"
                                        : "image-preview-option"
                                }
                            >
                                <img
                                    className='p-1 mx-auto mix-blend-multiply'
                                    src={url}
                                    alt=''
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className='product-details w-full lg:w-1/2 mx-10'>
                    <h2 className='product-title font-mono font-bold text-2xl'>
                        {product.name}
                    </h2>
                    <p className='product-price font-couriernew font-bold text-2xl'>
                        {product.price}
                    </p>
                    <div className='product-details-specific my-4 font-poppins'>
                        <p>Gore And Strap Sneaker with 3D Printed Details</p>
                        <hr className='my-4 border-black' />
                        <p className='font-bold'>Size Disclaimer:</p>
                        <p>
                            There may be a 1-2cm difference in measurements
                            depending on the development and manufacturing
                            process.
                        </p>
                        <br />
                        <p className='font-bold'>Color Disclaimer:</p>
                        <p>
                            Actual colors may vary. This is due to the fact that
                            every computer monitor has a different capability to
                            display colors, we cannot guarantee that the color
                            you see accurately portrays the true color of the
                            product.
                        </p>
                        <hr className='my-4 border-black' />
                        <p className='font-bold'>Size</p>
                        <div className='product-details-size-button flex gap-3'>
                            {sizes.map((val) => (
                                <button
                                    key={val}
                                    className={
                                        val === size
                                            ? "btn-size-option-selected"
                                            : "btn-size-option"
                                    }
                                    onClick={() => {
                                        handleSize(val);
                                    }}
                                >
                                    {val}
                                </button>
                            ))}
                        </div>
                        <br />
                        <div className='flex items-center flex-wrap gap-4'>
                            <div className='rounded-full w-16 h-10 px-20 py-2 border border-black relative'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    strokeWidth='1.5'
                                    stroke='currentColor'
                                    className='stroke-1 w-8 h-8 absolute left-4 inset-y-0.5 md:inset-y-1 hover:cursor-pointer'
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
                                    className='stroke-1 w-8 h-8 absolute right-4 inset-y-0.5 md:inset-y-1 hover:cursor-pointer'
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
                            <button className='rounded-full select-none bg-black text-white px-10 py-2 hover:bg-slate-50 hover:text-black hover:border-black hover:border hover:scale-105 transition-all duration-500'>
                                ADD TO CART
                            </button>
                        </div>
                        <hr className='my-4 border-black' />
                        <p>SKU : 7920366689_ID-14336126537</p>
                        <p>Brand : Skechers</p>
                    </div>
                </div>
            </main>
            <section className='bg-white m-5 p-5 rounded-2xl'>
                <h2 className='text-center font-franklin text-xl tracking-widest mb-7 underline'>
                    Related Products
                </h2>
                <div className='product-related flex justify-between xl:justify-evenly gap-8 p-5 overflow-x-scroll xl:overflow-x-visible'>
                    {related.map((item) => (
                        <Card data={item} key={item.id} />
                    ))}
                </div>
            </section>
        </Layout>
    );
}

export default ProductDetail;
