import {  createContext, useContext, useState } from "react";

const AuthContext = createContext({});

export const useAuth = () =>{
    const auth = useContext(AuthContext);
    return auth
}

export const AuthProvider = ( { children } ) =>{
    
     const [isAuthenticated, setIsAuthenticated] = useState(false);
     const [isAuthorization, setAuthorization] = useState(false);

     const login = ()=>{
            setIsAuthenticated(true);
     }

     const authorization = ()=>{
        setAuthorization(true);
     }

     const logout = ()=>{
        //borramos los datos guardados en el localstore
        localStorage.clear();
        setIsAuthenticated(false);
         
     }


    return(
        <AuthContext.Provider value={{ isAuthenticated ,isAuthorization, login , authorization, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;