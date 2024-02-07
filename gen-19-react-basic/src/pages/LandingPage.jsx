import React from "react";
import Card from "../components/Card";
import shoes from "../data/Shoes";
import Layout from "../layout/Layout";
import Input from "../components/Input";

function LandingPage() {
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
                <ProductHeader />

                <hr className='mx-2 mb-6 border-gainsboro' />

                <div className='flex justify-evenly flex-wrap gap-6'>
                    {shoes.map((item) => {
                        return <Card data={item} key={item.src} />;
                    })}
                </div>
            </main>
        </Layout>
    );
}

function ProductHeader() {
    return (
        <div className='product-header p-3 flex justify-between items-center flex-wrap'>
            <span className='header-title font-semibold'>Products</span>
            <div className='header-action'>
                <Input
                    placeholder='Search Product ...'
                    className='search-bar border bg-gainsboro-50 rounded-xl px-2 py-2 text-sm'
                />
            </div>
        </div>
    );
}

export default LandingPage;
