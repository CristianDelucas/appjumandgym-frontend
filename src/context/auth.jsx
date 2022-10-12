import {  createContext, useEffect, useState } from "react";
import { getUser } from "../_shared/Api/ApiUser";
import jwtDecode from "jwt-decode";
import { getRoutineByIdUser } from "../_shared/Api/Routine/ApiRoutine";

export const AuthContext = createContext({});



export const AuthProvider = ( { children } ) =>{

    //recoger estas variables en una misma
    const [jwt, setJWT] = useState(() => JSON.parse(window.sessionStorage.getItem('token')));
    const [userId, setUserId] = useState(undefined);
    const [user, setUser] = useState(undefined);
    const [userName, setUserName] = useState(undefined);
    const [fullname, setFullname] = useState(undefined);
    const [movil, setMovil] = useState(undefined);
    const [fechaNacimiento, setFechaNacimiento] = useState(undefined);
    const [email, setEmail] = useState(undefined);
    const [avatar, setAvatar] = useState(undefined);
    const [roles, setRoles] = useState(undefined);
    const [routine, setRoutine] = useState(undefined);

    

    const removeUserProvider = () =>{

        setUser(undefined);
        setUserId(undefined);
        setFullname(undefined);
        setUserName(undefined);
        setEmail(undefined);
        setRoles(undefined);
        setAvatar(undefined);
        setRoutine(undefined);

    }

    const getUserProvider = async () => {
      //recoger datos del token
      //const token = jwtDecode(jwt);
      const res = await getUser(jwt.reqUserId);
      if (res.status === 200) {
        setUser(res);
        setUserId(res._id);
        setFullname(res.nombre + ' ' + res.apellidos);
        setUserName(res.nombre);
        setFechaNacimiento(res.fecha_nacimiento);
        setMovil(res.movil);
        setEmail(res.email);
        setRoles(res.roles);
        setAvatar(res.avatar?.url);
      }
    };
    const getRoutine = async () => {
      //recoger datos del token
      //const token = jwtDecode(jwt);
      console.log(jwt.reqUserId)
      const {data,status} = await getRoutineByIdUser(jwt.reqUserId);
      
      if (status === 200) {
        console.log('hola')
        setRoutine(prev=>data);
      }
    };


    useEffect(() => {
        if (Boolean(jwt)) {
          getUserProvider();
          getRoutine();
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
                    fechaNacimiento,
                    avatar,
                    movil,
                    email,
                    roles,
                    routine,
                    
                    setUserId,
                    setJWT,
                    removeUserProvider
                  }}>
                {children}
        </AuthContext.Provider>
    )
}