import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function GuestRoutes() {
    const isLogin = useSelector((state) => state.auth.token !== "");
    const isAdmin = useSelector((state) => state.auth.user.role === "ADMIN");

    if (isLogin && isAdmin) {
        return <Navigate to='/admin/dashboard' />;
    } else if (isLogin && !isAdmin) {
        return <Navigate to='/' />;
    }

    return <Outlet />;
}
