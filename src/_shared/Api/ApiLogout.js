import axios from 'axios';
import { toast } from 'react-toastify';
import {LOGOUT} from './ApiRoutes';
const config= {
    headers : {
        
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    },
     withCredentials: true
}
export const logoutUser = async()=> {
    try{
        //Desconectando usuario
        axios.defaults.withCredentials = true
        const req = await toast.promise(axios.get(LOGOUT, config),
        {
            pending: "Desconectando...",
            success: `¡Hasta pronto PUMA!`,
            error: {render({data}){return data.response.data.message}},
          });
          window.sessionStorage.clear()
        return req;
    }catch(error){
        console.error(error)
    }
}

export const logoutUserExpired = async()=> {
    try{
        //Desconectando usuario
        axios.defaults.withCredentials = true
        const req = await toast.promise(axios.get(LOGOUT, config),
        {
            pending: "Desconectando...",
            success: {render:'Sesión caducada, vuelve a conectar',type:'warning'},
            error: {render({data}){return data.response.data.message}},
          });
          window.sessionStorage.clear()
        return req;
    }catch(error){
        console.error(error)
    }
}