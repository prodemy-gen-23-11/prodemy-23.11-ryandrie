import { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import Card from "../components/Card";
import _ from "lodash";
import { useNavigate, useParams } from "react-router-dom";
import Badge from "../components/Badge";
import axios from "axios";
import useSWR from "swr";
import QuantityButton from "../components/QuantityButton";
import Swal from "sweetalert2";
import { fetchCart, putCart } from "../store/reducers/cartSlice";
import { useDispatch, useSelector } from "react-redux";

function ProductDetail() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const sizes = [39, 40, 41, 42, 43, 44];

    const [related, setRelated] = useState([]);
    const [mainImage, setMainImage] = useState();
    const [size, setSize] = useState(39);
    const [quantity, setQuantity] = useState(1);
    const isLogin = useSelector((state) => state.auth.token !== "");
    const navigate = useNavigate();

    const fetcher = (url) =>
        axios.get(url).then((res) => {
            return res.data;
        });

    const { data: product, isLoading } = useSWR(
        `http://localhost:3000/shoes/${id}`,
        fetcher
    );

    const { data: products } = useSWR(`http://localhost:3000/shoes/`, fetcher);

    const { dataCart: cart, id: cartId } = useSelector((state) => state.cart);

    useEffect(() => {
        setRelated(
            _.sampleSize(
                products?.filter((item) => item.id != id),
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
                products?.filter((item) => item.id != id),
                4
            )
        );
    }, [product]);

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

    function handleClickAddToCart(product, size, quantity) {
        const itemList = {
            productId: product.id,
            size: size,
            name: product.name,
            price: product.price,
            imageUrl: product.imageUrl[0],
            quantity: quantity,
        };
        let newCart = [];
        const productFound = cart.find(
            (item) => item.productId === product.id && item.size === size
        );
        if (productFound) {
            newCart = cart.map((item) =>
                item === productFound
                    ? {
                          ...item,
                          quantity: item.quantity + quantity,
                      }
                    : item
            );
        } else {
            newCart = [...cart, itemList];
        }

        dispatch(putCart({ cartId, newCart }));

        Swal.fire({
            icon: "success",
            title: "Product has been added to your cart",
            width: "40vw",
            padding: "4em",
            showConfirmButton: false,
            timer: 2000,
        });
    }

    if (isLoading) return <div>Loading ...</div>;

    return (
        <Layout page={"customer"}>
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
                            <QuantityButton
                                handleQuantity={handleQuantity}
                                quantity={quantity}
                            />

                            <button
                                onClick={() =>
                                    isLogin
                                        ? handleClickAddToCart(
                                              product,
                                              size,
                                              quantity
                                          )
                                        : navigate("/login")
                                }
                                className='rounded-full select-none bg-black text-white px-10 py-2 hover:bg-slate-50 hover:text-black hover:border-black hover:border hover:scale-105 transition-all duration-500'
                            >
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
