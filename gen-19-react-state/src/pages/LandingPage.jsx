import React from "react";
import Card from "../components/Card";
import shoes from "../data/Shoes";
import Layout from "../layout/Layout";
import ProductHeader from "../components/ProductHeader";

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
                        return <Card data={item} key={item.id} />;
                    })}
                </div>
            </main>
        </Layout>
    );
}

export default LandingPage;
