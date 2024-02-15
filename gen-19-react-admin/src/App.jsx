import AdminDashboardPage from "./pages/Admin/AdminDashboardPage";
import LandingPage from "./pages/LandingPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
            </Routes>
        </BrowserRouter>
    );
}

export default App;
