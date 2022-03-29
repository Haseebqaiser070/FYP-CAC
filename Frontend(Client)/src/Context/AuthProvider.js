import { createContext, useState, useEffect } from "react";
import axios from "axios"; 
const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [Admin, setAdmin] = useState(false);
  const [Faculty, setFaculty] = useState(false);
  console.log(Admin)

  useEffect(()=>{
      getRole()
  },[])

  const getRole =async()=>{
      const res = await axios.get("http://localhost:4000/Auth/check",{withCredentials:true})
      const data= await res.data
      if(data=="is Admin") setAdmin(true)
      
      if(data=="is Faculty") setFaculty(true)
  }
  return (
    <AuthContext.Provider value={{ Admin, setAdmin, Faculty, setFaculty }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
