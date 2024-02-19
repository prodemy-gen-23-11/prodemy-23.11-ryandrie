import AdminDashboardPage from "./pages/admin/AdminDashboardPage";
import LandingPage from "./pages/LandingPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductFormPage from "./pages/admin/ProductFormPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='' element={<LandingPage />} />
                <Route path='/product/:id' element={<ProductDetailPage />} />
                <Route
                    path='/admin/dashboard'
                    element={<AdminDashboardPage />}
                />
                <Route path='/admin/addproduct' element={<ProductFormPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
