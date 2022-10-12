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
        const req = await axios.get(`${USER}/`, config)
        return req;

    }catch(error){
        return error.response;
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
        const req = await toast.promise(axios.put(`${USER}/${_id}`, userUpdate, config),
        {
            pending: "Modificando usuario...",
            success: `¡Usuario con email ${userUpdate.email} actualizado!`,
            error: {render({data}){return data.response.data.message}},
          });
        return req;
    } catch (error) {
        console.log(error)
    }
}

export const deleteUserById = async(_id)=> {
    try{
        config.headers.Authorization=addToken();
        const req = await toast.promise(axios.delete(`${USER}/${_id}`, config),
        {
            pending: "Eliminando...",
            success: `¡Usuario con ID ${_id} eliminado!`,
            error: {render({data}){return data.response.data.message}},
          });
        console.log(req);
        return req;
    }catch(error){
        console.error(error)
    }
};