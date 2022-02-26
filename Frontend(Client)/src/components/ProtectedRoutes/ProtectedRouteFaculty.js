import {  Navigate, Outlet } from "react-router-dom";
import useAuth from "../../MyHooks/useAuth";

const ProtectedRouteFaculty = () => {
    const {Faculty} = useAuth();
    

    return (
        Faculty?<Outlet />: <Navigate to="/" replace />
    );
}

export default ProtectedRouteFaculty;