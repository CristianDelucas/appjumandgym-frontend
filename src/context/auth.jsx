import { createContext, useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import { logoutUserExpired } from "../_shared/Api/ApiLogout";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { getUserAndRoutine } from "../_shared/Api/AxiosAll/AxiosAll";
import { getUser } from "../_shared/Api/ApiUser";
export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  //recoger estas variables en una misma
  const [jwt, setJWT] = useState(() =>
    JSON.parse(window.sessionStorage.getItem("token"))
  );
  const [userId, setUserId] = useState(undefined);
  const [user, setUser] = useState(undefined);
  const [userName, setUserName] = useState(undefined);
  const [fullname, setFullname] = useState(undefined);
  const [movil, setMovil] = useState(undefined);
  const [fechaNacimiento, setFechaNacimiento] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [avatar, setAvatar] = useState(undefined);
  const [objetivo, setObjetivo] = useState(undefined);
  const [altura, setAltura] = useState(undefined);
  const [roles, setRoles] = useState(undefined);
  const [routine, setRoutine] = useState([]);

  const removeUserProvider = () => {
    setUser(undefined);
    setUserId(undefined);
    setFullname(undefined);
    setUserName(undefined);
    setEmail(undefined);
    setObjetivo(undefined);
    setAltura(undefined);
    setRoles(undefined);
    setAvatar(undefined);
    setRoutine([]);
    
  };

  const getUserAndRoutineProvider = useCallback(() => {

    const post = async () =>{

      //const {routinedata,userdata,status} = await getUserAndRoutine(jwt.reqUserId);
      const {routinedata,userdata,status} = await getUserAndRoutine(jwt.reqUserId);

      if(status ===404){
        const {userdata,status} = await getUser(jwt.reqUserId);

        if(status===200){
          setUser(userdata);
          setUserId(userdata._id);
          setFullname(userdata.nombre + " " + userdata.apellidos);
          setUserName(userdata.nombre);
          setFechaNacimiento(userdata.fecha_nacimiento);
          setMovil(userdata.movil);
          setEmail(userdata.email);
          setObjetivo(userdata.objetivo);
          setAltura(userdata.altura);
          setRoles(userdata.roles);
          setAvatar(userdata.avatar?.url);
        }
        

      }

      if(status ===200){
          setUser(userdata);
          setUserId(userdata._id);
          setFullname(userdata.nombre + " " + userdata.apellidos);
          setUserName(userdata.nombre);
          setFechaNacimiento(userdata.fecha_nacimiento);
          setMovil(userdata.movil);
          setEmail(userdata.email);
          setObjetivo(userdata.objetivo);
          setAltura(userdata.altura);
          setRoles(userdata.roles);
          setAvatar(userdata.avatar?.url);
          
          setRoutine((prev) => routinedata);
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
      getUserAndRoutineProvider();
    }
  }, [jwt]);

  return (
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
        objetivo,
        altura,
        roles,
        routine,

        setUserId,
        setJWT,
        removeUserProvider,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
