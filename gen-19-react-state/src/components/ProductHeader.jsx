import Input from "./Input";

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

export default ProductHeader;
