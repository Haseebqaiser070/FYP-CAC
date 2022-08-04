import { Outlet ,Navigate} from "react-router-dom";
import { useState, useEffect } from "react";
import useRefreshToken from "../../MyHooks/useRefreshToken";
import useAuth from "../../MyHooks/useAuth";
import axios from "axios"

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { auth,setAuth, persist,setPersist } = useAuth();
  console.log("presist",auth)
  useEffect(async() => {
    if(!persist){
      console.log("per")
      const response = await axios.get("http://localhost:4000/Auth/check",{withCredentials:true})
        if(response.data!=undefined||response.data!=null){
          await setAuth({Roles:response.data.Roles})
          setPersist(true)
          setIsLoading(false)
        }
        else{
          setPersist(false)
          setIsLoading(false)
        }
      }
      if(persist){
        setIsLoading(false)
      }
  }, []);
  return (
    <>{!persist && !isLoading ? <Navigate to="/" replace />:
    isLoading ?<p>Loading...</p> : <Outlet />}</>
  );
};

export default PersistLogin;
