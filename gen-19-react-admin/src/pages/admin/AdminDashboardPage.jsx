import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import Layout from "../../layout/Layout";
import {
    createSearchParams,
    useNavigate,
    useSearchParams,
} from "react-router-dom";
import axios from "axios";
import useSWR from "swr";
import toRupiah from "../../util/formatter";
import Table from "../../components/Table";
import ProductsHeader from "../../components/ProductsHeader";
import Pagination from "../../components/Pagination";

function AdminDashboardPage() {
    const navigate = useNavigate();

    const [searchInput, setSearchInput] = useState("");
    const [searchParams] = useSearchParams();
    const query = searchParams.get("name");

    const fetcher = (url) => axios.get(url).then((res) => res.data);

    const { data: products, isLoading } = useSWR(
        "http://localhost:3000/shoes",
        fetcher
    );

    const { data: searchedProducts, isLoading: isSearchedLoading } = useSWR(
        `http://localhost:3000/shoes?name_like=${query}`,
        fetcher
    );

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

    if (isLoading || isSearchedLoading) return <div>Loading ...</div>;

    return (
        <Layout page={"admin"}>
            <main className='bg-white m-5 p-5 rounded-2xl'>
                <ProductsHeader
                    handleSubmit={handleSubmit}
                    handleInputChange={handleInputChange}
                />
                <div className='overflow-x-auto p-3'>
                    <Table
                        products={query === null ? products : searchedProducts}
                    />
                </div>
                <div className='overflow-x-auto p-3 flex justify-end'>
                    <Pagination />
                </div>
            </main>
        </Layout>
    );
}

export default AdminDashboardPage;
