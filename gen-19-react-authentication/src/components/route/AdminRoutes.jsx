import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function AdminRoutes() {
    const isNotLogin = useSelector((state) => state.auth.token === "");
    const isAdmin = useSelector((state) => state.auth.user.role === "ADMIN");

    if (isNotLogin) {
        return <Navigate to={"/forbidden"} />;
    }

    if (!isAdmin) {
        return <Navigate to={"/unauthorized"} />;
    }

    return <Outlet />;
}
