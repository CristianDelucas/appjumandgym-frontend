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
        const {data,status} = await toast.promise(axios.post(LOGIN, user, config),
            {
            pending: "Iniciando sesión...",
            success: `¡Bienvenido ${user.email}! `,
            error: {render({data}){return (data.response.status===0)?'Error de red':data.response.data.message}},
          });
          console.log({data,status})
        return {data,status};
    }catch(error){
        return {status:error.response.status}
    }
}