import axios from 'axios';
import { toast } from 'react-toastify';
import { addToken } from '../../utils/jwt';
import {USER} from './ApiRoutes';

const config= {
    headers : {
        
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    }
}


export const getUsers = async()=> {
    try{
        
        config.headers.Authorization=addToken();
        console.log('Estot en get/users/ all');
        const req = await axios.get(`${USER}/`, config);
        
        req.data.status = req.status;
        console.log(req.data);
        return req;
    }catch(error){
        if(error.request.status===403){
            toast.error("Sesión caducada.");
        }
        if(error.request.status===0){
            toast.error("Hubo un error, prueba más tarde.");
        }
        return error
    }
};

export const getUser = async(id)=> {
    try{
        config.headers.Authorization=addToken();
        const req = await axios.get(`${USER}/${id}`, config);
        console.log('holaaa usuariooo');
        req.data.status = req.status;
        return req.data;
    }catch(error){
        console.error(error)
    }
};

export const getRol = async(id)=> {
    try{
        config.headers.Authorization=addToken();
        const req = await axios.get(`${USER}/rol/${id}`, config)
        return req.data
    }catch(error){
        console.error(error)
    }
};

export const verifyEmailAndMobile = async(email,mobile)=> {
    try{
        config.headers.Authorization=addToken();
        const req = await axios.get(`${USER}/validateUser/${email}/${mobile}`, config)
        return req.data
    }catch(error){
        console.error(error)
    }
};


export const registerUser = async (userRegister) => {
    try {
        const req = await toast.promise(axios.post(USER, userRegister, config),
        {
            pending: "Registrando...",
            success: `Usuario con email ${userRegister.email} registrado!`,
            error: {render({data}){return data.response.data.message}},
          });
        console.log(req);
        return req;
    } catch (error) {
        console.log(error);
    }
}

export const updateUser = async (_id,userUpdate) => {
    try {
        //cambiar metodo
        const req = await axios.put(`${USER}/${_id}`, userUpdate, config);
        console.log('PRUEBA DE ACTUALIZANDO');
        console.log(req);
        return req;
    } catch (error) {
        toast.error('El correo pertenece a una cuenta existente.'); 
    }
}

export const deleteUserById = async(_id)=> {
    try{
        config.headers.Authorization=addToken();
        const req = await axios.delete(`${USER}/${_id}`, config);
        console.log(req);
        return req;
    }catch(error){
        console.error(error)
    }
};