import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [Admin, setAdmin] = useState(false);
    const [Faculty, setFaculty] = useState(false);

    return (
        <AuthContext.Provider value={{Admin, setAdmin,Faculty, setFaculty}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;