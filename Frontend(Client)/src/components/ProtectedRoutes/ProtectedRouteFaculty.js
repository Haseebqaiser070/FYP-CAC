import {  Navigate, Outlet } from "react-router-dom";
import useAuth from "../../MyHooks/useAuth";

const ProtectedRouteFaculty = () => {
    const {Faculty,setFaculty} = useAuth();
    useEffect(()=>{
        getRole()
    },[])

    const getRole =async()=>{
        const res = await axios.get("http://localhost:4000/Auth/check")
        const data= await res.data
        if(data=="is Faculty") setFaculty(true)
    }
    

    return (
        Faculty?<Outlet />: <Navigate to="/" replace />
    );
}

export default ProtectedRouteFaculty;