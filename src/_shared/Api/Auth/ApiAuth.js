import axios from 'axios';
import { toast } from 'react-toastify';
import { AUTH } from '../ApiRoutes';

const config= {
    headers : {
        
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    },
     withCredentials: true
}
export const sendEmailForgotPassword = async(email)=> {
    try{
        const req = await axios.put(`${AUTH}/forgotpassword`, email, config);
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

export const validIdAndResetToken = async(id,resetToken)=> {
    try{
        const req = await axios.get(`${AUTH}/forgotpassword/${id}/${resetToken}`, config);
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

export const resetPassword = async(id,resetToken,password)=> {
    try{
        const req = await axios.post(`${AUTH}/resetpassword/${id}/${resetToken}`,password, config);
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