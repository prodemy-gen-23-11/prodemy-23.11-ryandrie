import AdminDashboardPage from "./pages/admin/AdminDashboardPage";
import LandingPage from "./pages/LandingPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductFormPage from "./pages/admin/ProductFormPage";
import CartPage from "./pages/CartPage";

import LoginPage from "./pages/LoginPage";
import AdminRoutes from "./components/route/AdminRoutes";
import ForbiddenPage from "./pages/error/ForbiddenPage";
import UnauthorizedPage from "./pages/error/UnauthorizedPage";
import GuestRoutes from "./components/route/GuestRoutes";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<GuestRoutes />}>
                    <Route path='/login' element={<LoginPage />} />
                </Route>

                <Route path='' element={<LandingPage />} />
                <Route path='/product/:id' element={<ProductDetailPage />} />
                <Route path='/cart' element={<CartPage />} />

                <Route element={<AdminRoutes />}>
                    <Route
                        path='/admin/dashboard'
                        element={<AdminDashboardPage />}
                    />
                    <Route
                        path='/admin/addproduct'
                        element={<ProductFormPage />}
                    />
                    <Route
                        path='/admin/editproduct/:id'
                        element={<ProductFormPage />}
                    />
                </Route>

                <Route path='/forbidden' element={<ForbiddenPage />} />
                <Route path='/unauthorized' element={<UnauthorizedPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
