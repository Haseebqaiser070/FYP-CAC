import {  Navigate, Outlet } from "react-router-dom";
import useAuth from "../../MyHooks/useAuth";

const ProtectedRouteAdmin = () => {
    const {Admin} = useAuth();
    

    return (
        Admin?<Outlet />: <Navigate to="/" replace />
    );
}

export default ProtectedRouteAdmin;