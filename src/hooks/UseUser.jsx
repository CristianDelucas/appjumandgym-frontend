import  Context  from "../context/UserContext";
import {  useCallback, useContext} from "react";


export default function useUser(){
    const {jwt, setJWT} = useContext(Context);


    //Cada vez que cambie el jwt, se ejecuta la funcion
    const login = useCallback(()=>{
        setJWT('test')
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