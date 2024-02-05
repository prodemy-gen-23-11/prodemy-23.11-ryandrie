import Card from "./components/Card";
import shoes from "./assets/Shoes";

function App() {
    return (
        <main className='bg-white m-5 p-5 rounded-2xl'>
            <Header />

            <hr className='mx-2 mb-6 border-gainsboro' />

            <div className='flex justify-evenly flex-wrap gap-6'>
                {shoes.map((item) => {
                    return <Card data={item} key={item.src} />;
                })}
            </div>
        </main>
    );
}

function Header() {
    return (
        <div className='product-header p-3 flex justify-between items-center flex-wrap'>
            <span className='header-title font-semibold'>Products</span>
            <div className='header-action'>
                <input
                    placeholder='Search Product ...'
                    className='search-bar border bg-gainsboro-50 rounded-xl px-2 py-2 text-sm'
                />
            </div>
        </div>
    );
}

export default App;
