import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Layout from "../layout/Layout";
import {
    createSearchParams,
    useNavigate,
    useSearchParams,
} from "react-router-dom";
import axios from "axios";
import useSWR, { mutate } from "swr";

function LandingPage() {
    const navigate = useNavigate();

    const [searchInput, setSearchInput] = useState("");
    const [searchParams] = useSearchParams();
    const query = searchParams.get("name");

    const fetcher = (url) => axios.get(url).then((res) => res.data);

    const { data: products, isLoading } = useSWR(
        "http://localhost:3000/shoes",
        fetcher
    );

    const { data: searchedProducts } = useSWR(
        `http://localhost:3000/shoes?name_like=${query}`,
        fetcher
    );

    // const fetchData = async () => {
    //     try {
    //         const { data } = await axios.get("http://localhost:3000/shoes");
    //         if (query !== null) {
    //             searchProducts(data);
    //         } else {
    //             setProducts(data);
    //         }
    //         setLoading(false);
    //     } catch (error) {
    //         console.log(error);
    //         setLoading(false);
    //     }
    // };

    // useEffect(() => {
    //     fetchData();
    // }, [query]);

    // function searchProducts(data) {
    //     setProducts(
    // data.filter((item) =>
    //     item.name.toLowerCase().includes(query.toLowerCase())
    // )
    //     );
    // }

    function handleSubmit(event) {
        event.preventDefault();
        navigate({
            pathname: "",
            search: createSearchParams({ name: searchInput }).toString(),
        });
    }

    function handleInputChange(event) {
        setSearchInput(event.target.value);
    }

    if (isLoading) return <div>Loading ...</div>;

    return (
        <Layout>
            <div className='bg-white m-5 p-10 rounded-2xl'>
                <img
                    className='mx-auto w-[85vw] rounded-2xl'
                    src='https://down-bs-id.img.susercontent.com/id-11134210-7r992-lqiqfqcx4hemee.webp'
                    alt=''
                />
            </div>
            <main className='bg-white m-5 p-5 rounded-2xl'>
                <div className='product-header p-3 flex justify-between items-center flex-wrap'>
                    <span className='header-title font-semibold'>Products</span>
                    <div className='header-action'>
                        <form onSubmit={(event) => handleSubmit(event)}>
                            <div className='flex gap-4'>
                                <input
                                    placeholder='Search Product ...'
                                    className='search-bar border-blue-700 border bg-gainsboro-50 rounded-xl px-2 pl-4 text-sm font-mono focus:ring-2 focus:outline-none focus:ring-blue-300'
                                    onChange={(event) => {
                                        handleInputChange(event);
                                    }}
                                />
                                <input
                                    className='text-blue-700 hover:text-white border border-blue-700 hover:cursor-pointer hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center '
                                    type='submit'
                                    value='Search'
                                />
                            </div>
                        </form>
                    </div>
                </div>

                <hr className='mx-2 mb-6 border-gainsboro' />

                <div className='flex justify-evenly flex-wrap gap-6'>
                    {query === null ? (
                        products.map((item) => {
                            return <Card data={item} key={item.id} />;
                        })
                    ) : searchedProducts?.length > 0 ? (
                        searchedProducts.map((item) => {
                            return <Card data={item} key={item.id} />;
                        })
                    ) : (
                        <div>Pencarian tidak ditemukan.</div>
                    )}
                </div>
            </main>
        </Layout>
    );
}

export default LandingPage;
