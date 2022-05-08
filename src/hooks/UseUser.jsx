import  UserContext  from "../context/UserContext";
import {  useCallback, useContext} from "react";


export function useUser(){
    const {jwt, setJWT} = useContext(UserContext);
    //Cada vez que cambie el jwt, se ejecuta la funcion
    const login = useCallback(()=>{
        console.log("login");
        setJWT('test');
    }, [setJWT]);

    const logout = useCallback(()=>{
        setJWT(null)
        }, [setJWT])


    return {
        isLogged: Boolean(jwt),
        login,
        logout
    }
}

export default useUser;