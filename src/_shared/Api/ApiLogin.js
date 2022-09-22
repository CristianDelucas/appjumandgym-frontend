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
        const req = await axios.post(LOGIN, user, config);
        return req;
    }catch(error){
        console.error(error);
        
        if(    error.request.status===404 
            || error.request.status===0 
            || error.request.status===500){
            toast.error("Hubo un error, prueba más tarde.");
        }else{
            toast.error("Email ó contraseña incorrecta");
        }
    }
}