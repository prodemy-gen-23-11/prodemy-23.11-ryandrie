import LandingPage from "./pages/LandingPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='' element={<LandingPage />} />
                <Route path='/product/:id' element={<ProductDetailPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
