import axios from 'axios';
import { toast } from 'react-toastify';
import {LOGIN} from './ApiRoutes';
const config= {
    headers : {
        
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    },
     withCredentials: true
}

export const loginUser = async(user)=> {
    try{
        console.log(user);
        const req = await toast.promise(axios.post(LOGIN, user, config),
            {
            pending: "Iniciando sesión...",
            success: `¡Bienvenido ${user.email}! `,
            error: 'No se pudo conectar',
          });
        return req;
    }catch(error){
        console.error(error);
    }
}