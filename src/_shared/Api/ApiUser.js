

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

// axios.interceptors.response.use(
//     response => response,
//     error => {
//         if(error.response.status === 403){
//             console.log('hola');
//         }
//     }
// )

export const getUsers = async()=> {
    try{
        
        config.headers.Authorization=addToken();
        const {data,status} = await axios.get(`${USER}/`, config)
        return {data,status};

    }catch(error){
        return {status:error.response.status}
    }
};

export const getUser = async(id)=> {
    try{
        config.headers.Authorization=addToken();
        const {data,status} = await axios.get(`${USER}/${id}`, config);
        return {data,status}
    }catch(error){
        return {status:error.response.status}
    }
};

export const getRol = async(id)=> {
    try{
        config.headers.Authorization=addToken();
        const req = await axios.get(`${USER}/rol/${id}`, config)
        return req.data
    }catch(error){
        return {status:error.response.status}
    }
};



export const registerUser = async (userRegister) => {
    try {
        const {data,status} = await toast.promise(axios.post(USER, userRegister, config),
        {
            pending: "Registrando...",
            success: `Usuario con email ${userRegister.email} registrado!`,
            error: {render({data}){return (data.response.status===0)?'Error de red':data.response.data.message}},
          });
        
        return {data,status}
    } catch (error) {
        return {status:error.response.status}
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
        return {status:error.response.status}
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
        return {status:error.response.status}
    }
};