import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [Admin, setAdmin] = useState(true);
  const [Faculty, setFaculty] = useState(true);

  return (
    <AuthContext.Provider value={{ Admin, setAdmin, Faculty, setFaculty }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
