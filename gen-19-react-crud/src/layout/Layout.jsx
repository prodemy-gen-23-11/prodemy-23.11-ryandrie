import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children, page }) {
    return (
        <>
            <Header page={page} />
            {children}
            {page === "customer" && <Footer />}
        </>
    );
}

export default Layout;
