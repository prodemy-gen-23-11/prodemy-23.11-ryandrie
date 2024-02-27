import React, { useEffect, useState } from "react";
import Layout from "../../layout/Layout";
import {
    createSearchParams,
    useNavigate,
    useSearchParams,
} from "react-router-dom";
import axios from "axios";
import useSWR from "swr";
import Table from "../../components/Table";
import ProductsHeader from "../../components/ProductsHeader";
import Pagination from "../../components/Pagination";
import Swal from "sweetalert2";

function AdminDashboardPage() {
    const navigate = useNavigate();

    const [searchInput, setSearchInput] = useState("");
    const [searchParams] = useSearchParams();
    const query = searchParams.get("name");

    const fetcher = (url) => axios.get(url).then((res) => res.data);

    const {
        data: products,
        isLoading,
        mutate,
    } = useSWR("http://localhost:3000/shoes", fetcher);

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

    function handleClickDiscard(id) {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete",
        }).then((result) => {
            if (result.isConfirmed) {
                axios
                    .delete(`http://localhost:3000/shoes/${id}`)
                    .then(() => {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Product has been deleted.",
                            icon: "success",
                        });
                        mutate();
                    })
                    .catch((err) => {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            html: "Something went wrong!<br>" + err,
                        });
                    });
            }
        });
    }

    if (isLoading || isSearchedLoading) return <div>Loading ...</div>;

    return (
        <Layout page={"admin"}>
            <main className='bg-white m-5 p-5 rounded-2xl'>
                <ProductsHeader
                    handleSubmit={handleSubmit}
                    handleInputChange={handleInputChange}
                    page={"admin"}
                />
                <div className='overflow-x-auto p-3'>
                    <Table
                        products={query === null ? products : searchedProducts}
                        handleClickDiscard={handleClickDiscard}
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
