import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../MyHooks/useAuth";

const ProtrctedRoutes = ({ allowedRoles }) => {
    const { auth } = useAuth();
    const location = useLocation();
console.log(auth)
console.log(allowedRoles)
console.log(auth?.Roles?.includes(allowedRoles))
return (
        auth?.Roles?.includes(allowedRoles)
            ? <Outlet />
            : auth?.Email //changed from user to accessToken to persist login after refresh
                ? <Navigate to="/" state={{ from: location }} replace />
                : <Navigate to="/" state={{ from: location }} replace />
    );
}

export default ProtrctedRoutes;