import { Link } from "react-router-dom";

function Navlink({ page }) {
    return (
        <div className='justify-around gap-8 font-franklin text-sm lg:text-base hidden md:flex'>
            {page === "admin" ? (
                <>
                    <Link className='navlink-hover' to='/admin/dashboard'>
                        Dashboard
                    </Link>

                    <a className='navlink-hover' href=''>
                        Customers
                    </a>
                    <a className='navlink-hover' href=''>
                        Purchases
                    </a>
                </>
            ) : (
                <>
                    <Link className='navlink-hover' to='/'>
                        Home
                    </Link>

                    <a className='navlink-hover' href=''>
                        Cart
                    </a>
                    <a className='navlink-hover' href=''>
                        Checkout
                    </a>
                    <a className='navlink-hover' href=''>
                        About
                    </a>
                </>
            )}
        </div>
    );
}

export default Navlink;
