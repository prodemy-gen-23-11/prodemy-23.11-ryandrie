import AdminDashboardPage from "./pages/admin/AdminDashboardPage";
import LandingPage from "./pages/LandingPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductFormPage from "./pages/admin/ProductFormPage";
import CartPage from "./pages/CartPage";
import CartProvider from "./context/CartContext";

function App() {
    return (
        <BrowserRouter>
            <CartProvider>
                <Routes>
                    <Route path='' element={<LandingPage />} />
                    <Route
                        path='/product/:id'
                        element={<ProductDetailPage />}
                    />
                    <Route path='/cart' element={<CartPage />} />
                </Routes>
            </CartProvider>
            <Routes>
                <Route
                    path='/admin/dashboard'
                    element={<AdminDashboardPage />}
                />
                <Route path='/admin/addproduct' element={<ProductFormPage />} />
                <Route
                    path='/admin/editproduct/:id'
                    element={<ProductFormPage />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
