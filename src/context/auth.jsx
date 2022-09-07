import {  createContext, useEffect, useState } from "react";
import { getUser } from "../_shared/Api/ApiUser";
import jwtDecode from "jwt-decode";

export const AuthContext = createContext({});



export const AuthProvider = ( { children } ) =>{

    //recoger estas variables en una misma
    const [jwt, setJWT] = useState(() => JSON.parse(window.sessionStorage.getItem('token')));
    const [userId, setUserId] = useState(undefined);
    const [user, setUser] = useState(undefined);
    const [userName, setUserName] = useState(undefined);
    const [fullname, setFullname] = useState(undefined);
    const [email, setEmail] = useState(undefined);
    const [avatar, setAvatar] = useState(undefined);
    const [roles, setRoles] = useState(undefined);

    //comprobación de si esta conectado y si esta autorizado para ciertas rutas
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isAuthorization, setAuthorization] = useState(false);

    const removeUserProvider = () =>{

        setUser(undefined);
        setUserId(undefined);
        setFullname(undefined);
        setUserName(undefined);
        setEmail(undefined);
        setRoles(undefined);
        setAvatar(undefined);

    }

    const getUserProvider = async () => {
      //recoger datos del token
      //const token = jwtDecode(jwt);
      const res = await getUser(jwt.reqUserId);
      console.log(res.status);
      if (res.status === 200) {
        setUser(res);
        setUserId(res._id);
        setFullname(res.nombre + ' ' + res.apellidos);
        setUserName(res.nombre);
        setEmail(res.email);
        setRoles(res.roles);
        setAvatar(res.avatar?.url);
      }
    };

    useEffect(() => {
        if (Boolean(jwt)) {
          getUserProvider();
        }
      }, [jwt]);


    return(
        <AuthContext.Provider 
        value={{
                jwt,
                user,
                userId,
                fullname,
                userName,
                avatar,
                isAuthenticated,
                isAuthorization,
                email,
                roles,
                setUserId,
                setJWT,
                removeUserProvider
               }}>
            {children}
        </AuthContext.Provider>
    )
}