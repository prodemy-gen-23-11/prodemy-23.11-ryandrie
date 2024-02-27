import axios from "axios";
import Layout from "../../layout/Layout";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FormInput from "../../components/FormInput";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

function ProductFormPage() {
    const navigate = useNavigate();
    const { id } = useParams();
    const selectCategory = ["Footwear", "Pants", "Jacket", "Sweatshirt"];
    const [isEditForm, setIsEditForm] = useState(false);

    const fetcher = (url) =>
        axios.get(url).then((res) => {
            return res.data;
        });

    const { data: product, isLoading } = useSWR(
        isEditForm ? `http://localhost:3000/shoes/${id}` : null,
        fetcher,
        {
            onSuccess: (data) => {
                setValue("name", data.name);
                setValue("category", data.category);
                setValue("brand", data.brand);
                setValue("price", data.price);
                setValue("stock", data.stock);
                setValue("sold", data.sold);
                setValue("imageUrl1", data.imageUrl[0]);
                setValue("imageUrl2", data.imageUrl[1]);
                setValue("imageUrl3", data.imageUrl[2]);
                setValue("imageUrl4", data.imageUrl[3]);
            },
        }
    );

    useEffect(() => {
        window.scrollTo(0, 0);
        id && setIsEditForm(true);
    }, []);

    const schema = yup.object().shape({
        name: yup.string().required("This field is required!"),
        category: yup
            .string()
            .oneOf(selectCategory)
            .required("This field is required!"),
        brand: yup.string().required("This field is required!"),
        price: yup.number().required("This field is required!"),
        stock: yup.number().required("This field is required!"),
        sold: isEditForm
            ? yup.number().required("This field is required!")
            : null,
        imageUrl1: yup
            .string()
            .required("This field is required!")
            .url("Must be a valid url")
            .test(
                "is-valid-imageUrl",
                "URL must be contain an image file",
                (value) => {
                    return isImgUrl(value);
                }
            ),
        imageUrl2: yup
            .string()
            .required("This field is required!")
            .url("Must be a valid url")
            .test(
                "is-valid-imageUrl",
                "URL must be contain an image file",
                (value) => {
                    return isImgUrl(value);
                }
            ),
        imageUrl3: yup
            .string()
            .required("This field is required!")
            .url("Must be a valid url")
            .test(
                "is-valid-imageUrl",
                "URL must be contain an image file",
                (value) => {
                    return isImgUrl(value);
                }
            ),
        imageUrl4: yup
            .string()
            .required("This field is required!")
            .url("Must be a valid url")
            .test(
                "is-valid-imageUrl",
                "URL must be contain an image file",
                (value) => {
                    return isImgUrl(value);
                }
            ),
    });

    function isImgUrl(url) {
        const img = new Image();
        img.src = url;
        return new Promise((resolve) => {
            img.onerror = () => resolve(false);
            img.onload = () => resolve(true);
        });
    }

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
    });

    let imageUrl1 = watch("imageUrl1");
    let imageUrl2 = watch("imageUrl2");
    let imageUrl3 = watch("imageUrl3");
    let imageUrl4 = watch("imageUrl4");

    function onSubmitForm(data) {
        const payload = {
            name: data.name,
            price: data.price,
            imageUrl: [
                data.imageUrl1,
                data.imageUrl2,
                data.imageUrl3,
                data.imageUrl4,
            ],
            stock: data.stock,
            sold: isEditForm ? data.sold : 0,
            category: data.category,
            brand: data.brand,
        };

        if (isEditForm) {
            axios
                .put(`http://localhost:3000/shoes/${id}`, payload)
                .then(() => {
                    Swal.fire({
                        icon: "success",
                        title: "Product has been updated",
                        text: data.name,
                        showConfirmButton: false,
                        timer: 2000,
                    });
                    navigate("/admin/dashboard");
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            axios
                .post("http://localhost:3000/shoes", payload)
                .then((res) => {
                    Swal.fire({
                        icon: "success",
                        title: "Product has been added",
                        text: data.name,
                        showConfirmButton: false,
                        timer: 2000,
                    });
                    navigate("/admin/dashboard");
                })
                .catch((err) => console.log(err));
        }
    }

    isEditForm && isLoading && <div>Loading ...</div>;

    return (
        <Layout page={"admin"}>
            <main className='bg-white m-5 p-5 rounded-2xl'>
                <h1 className='text-xl p-4 font-semibold text-center'>
                    {isEditForm ? "Edit Product" : "Add New Product"}
                </h1>
                <div className='p-4 flex justify-center '>
                    <form
                        onSubmit={handleSubmit(onSubmitForm)}
                        className='flex flex-col w-3/5 gap-4'
                    >
                        <div className=''>
                            <FormInput
                                name='name'
                                label='Name'
                                register={register}
                            />
                            {errors.name && (
                                <p className='text-sm text-red-500 p-2'>
                                    {errors.name.message}
                                </p>
                            )}
                        </div>
                        <div className=''>
                            <label
                                htmlFor='category'
                                className='text-sm font-medium leading-6 text-gray-900'
                            >
                                Category
                            </label>
                            <div className='mt-2'>
                                <select
                                    {...register("category")}
                                    id='category'
                                    name='category'
                                    className='w-full border-blue-700 border bg-gainsboro-50 rounded-xl py-2 px-4 text-sm font-mono focus:ring-2 focus:outline-none focus:ring-blue-300'
                                >
                                    {selectCategory.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                                {errors.category && (
                                    <p className='text-sm text-red-500 p-2'>
                                        {errors.category.message}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className=''>
                            <FormInput
                                name='brand'
                                label='Brand'
                                register={register}
                            />
                            {errors.brand && (
                                <p className='text-sm text-red-500 p-2'>
                                    {errors.brand.message}
                                </p>
                            )}
                        </div>
                        <div className=''>
                            <div className='flex gap-4'>
                                <div className='w-1/2'>
                                    <FormInput
                                        name='price'
                                        label='Price'
                                        register={register}
                                        type='number'
                                    />
                                    {errors.price && (
                                        <p className='text-sm text-red-500 p-2'>
                                            {errors.price.message}
                                        </p>
                                    )}
                                </div>
                                <div className='w-1/2'>
                                    <FormInput
                                        name='stock'
                                        label='Stock'
                                        register={register}
                                        type='number'
                                    />
                                    {errors.stock && (
                                        <p className='text-sm text-red-500 p-2'>
                                            {errors.stock.message}
                                        </p>
                                    )}
                                </div>
                                {isEditForm && (
                                    <div className='w-1/2'>
                                        <FormInput
                                            name='sold'
                                            label='Sold'
                                            register={register}
                                            type='number'
                                        />
                                        {errors.sold && (
                                            <p className='text-sm text-red-500 p-2'>
                                                {errors.sold.message}
                                            </p>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className=''>
                            <div className='flex gap-4 items-center'>
                                <div className='w-3/4'>
                                    <FormInput
                                        name='imageUrl1'
                                        label='Main Image URL'
                                        register={register}
                                    />
                                </div>
                                <div className='w-1/4 flex justify-end items-center'>
                                    {errors.imageUrl1 === undefined &&
                                        imageUrl1 && (
                                            <img
                                                className='border border-b rounded-xl w-32'
                                                src={imageUrl1}
                                            />
                                        )}
                                </div>
                            </div>

                            {errors.imageUrl1 && (
                                <p className='text-sm text-red-500 p-2'>
                                    {errors.imageUrl1.message}
                                </p>
                            )}
                        </div>
                        <div className=''>
                            <div className='flex gap-4 items-center'>
                                <div className='w-3/4'>
                                    <FormInput
                                        name='imageUrl2'
                                        label='Thumbnail Image 1 URL'
                                        register={register}
                                    />
                                </div>
                                <div className='w-1/4 flex justify-end items-center'>
                                    {errors.imageUrl2 === undefined &&
                                        imageUrl2 && (
                                            <img
                                                className='border border-b rounded-xl w-32'
                                                src={imageUrl2}
                                            />
                                        )}
                                </div>
                            </div>

                            {errors.imageUrl2 && (
                                <p className='text-sm text-red-500 p-2'>
                                    {errors.imageUrl2.message}
                                </p>
                            )}
                        </div>
                        <div className=''>
                            <div className='flex gap-4 items-center'>
                                <div className='w-3/4'>
                                    <FormInput
                                        name='imageUrl3'
                                        label='Thumbnail Image 2 URL'
                                        register={register}
                                    />
                                </div>
                                <div className='w-1/4 flex justify-end items-center'>
                                    {errors.imageUrl3 === undefined &&
                                        imageUrl3 && (
                                            <img
                                                className='border border-b rounded-xl w-32'
                                                src={imageUrl3}
                                            />
                                        )}
                                </div>
                            </div>

                            {errors.imageUrl3 && (
                                <p className='text-sm text-red-500 p-2'>
                                    {errors.imageUrl3.message}
                                </p>
                            )}
                        </div>
                        <div className=''>
                            <div className='flex gap-4 items-center'>
                                <div className='w-3/4'>
                                    <FormInput
                                        name='imageUrl4'
                                        label='Thumbnail Image 3 URL'
                                        register={register}
                                    />
                                </div>
                                <div className='w-1/4 flex justify-end items-center'>
                                    {errors.imageUrl4 === undefined &&
                                        imageUrl4 && (
                                            <img
                                                className='border border-b rounded-xl w-32'
                                                src={imageUrl4}
                                            />
                                        )}
                                </div>
                            </div>

                            {errors.imageUrl4 && (
                                <p className='text-sm text-red-500 p-2'>
                                    {errors.imageUrl4.message}
                                </p>
                            )}
                        </div>
                        <button
                            className='w-1/4 text-blue-700 hover:text-white border border-blue-700 hover:cursor-pointer hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center '
                            type='submit'
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </main>
        </Layout>
    );
}

export default ProductFormPage;
