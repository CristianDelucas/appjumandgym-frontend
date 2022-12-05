import { createContext, useEffect, useState } from "react";
import jwtDecode from "jwt-decode";

import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { getUserAndRoutine } from "../_shared/Api/AxiosAll/AxiosAll";
import { getUser } from "../_shared/Api/ApiUser";
import { logoutUserExpired } from "../_shared/Api/Auth/ApiAuth";
import { getRoutineByIdUser } from "../_shared/Api/Routine/ApiRoutine";
import useUser from "../hooks/useUser";
export const AuthContext = createContext({});


export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  //recoger estas variables en una misma
  const [jwt, setJWT] = useState(() =>
    JSON.parse(window.sessionStorage.getItem("token"))
  );
  const {user,routine,setRoutine,setUser} = useUser();

  const removeUserProvider = () => {
    setUser(undefined);
    setRoutine(undefined);
    
  };

  const getUserProvider = useCallback(() => {

    const post = async () =>{

      //const {routinedata,userdata,status} = await getUserAndRoutine(jwt.reqUserId);
      const {userdata,status} = await getUser(jwt.reqUserId);

      
      console.log(status);
        if(status===200){
          setUser(userdata);
          getRoutineProvider();
        }

      if(status ===403){
        removeUserProvider();
        await logoutUserExpired(status);
        navigate("/login");
      }

    }

    post()

  },[jwt,navigate])

  const getRoutineProvider = useCallback(() => {

    const post = async () =>{
console.log('hola')
      //const {routinedata,userdata,status} = await getUserAndRoutine(jwt.reqUserId);
      const {data,status} = await getRoutineByIdUser(jwt.reqUserId);

        if(status===200){
          setRoutine(data);
        }

      if(status ===403){
        removeUserProvider();
        await logoutUserExpired(status);
        navigate("/login");
      }

    }

    post()

  },[jwt,navigate])

  useEffect(() => {
    if (Boolean(jwt)) {
      getUserProvider();
      
      
    }
    
  }, [jwt]);

  return (
    <AuthContext.Provider
      value={{
        jwt,
        user,
        routine,
        setJWT,
        removeUserProvider,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
