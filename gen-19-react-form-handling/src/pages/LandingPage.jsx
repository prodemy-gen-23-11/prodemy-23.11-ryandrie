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
import ProductsHeader from "../components/ProductsHeader";

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
        <Layout page={"customer"}>
            <div className='bg-white m-5 p-10 rounded-2xl'>
                <img
                    className='mx-auto w-[85vw] rounded-2xl'
                    src='https://down-bs-id.img.susercontent.com/id-11134210-7r992-lqiqfqcx4hemee.webp'
                    alt=''
                />
            </div>
            <main className='bg-white m-5 p-5 rounded-2xl'>
                <ProductsHeader
                    handleSubmit={handleSubmit}
                    handleInputChange={handleInputChange}
                />

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
