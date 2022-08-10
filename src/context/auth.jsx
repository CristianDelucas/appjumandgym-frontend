import {  createContext, useContext, useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import { getUser } from "../_shared/Api/ApiUser";
export const AuthContext = createContext({});



export const AuthProvider = ( { children } ) =>{


    const [jwt, setJWT] = useState(() => window.sessionStorage.getItem("token"));
    const [userId, setUserId] = useState(undefined);
    const [user, setUser] = useState(undefined);
    const [userName, setUserName] = useState(undefined);
    const [fullname, setFullname] = useState(undefined);
    const [avatar, setAvatar] = useState(undefined);

    useEffect(() => {
        if (Boolean(jwt)) {
          const getUserContext = async () => {
            const token = jwtDecode(jwt);
            const res = await getUser({ userId: token.id });
            if (res.status === 200) {
              setUser(res.data);
              setUserId(res.data._id);
              setFullname(res.data.fullname);
              setUserName(res.data.userName);
              setAvatar(res.data?.avatar?.url);
              
            }
          };
          getUserContext();
        }
      }, [jwt]);
    
    
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
        <AuthContext.Provider value={{
                                jwt,
                                user,
                                userId,
                                fullname,
                                userName,
                                avatar,
                                setUserId,
                                setJWT, isAuthenticated ,isAuthorization, login , authorization, logout }}>
            {children}
        </AuthContext.Provider>
    )
}