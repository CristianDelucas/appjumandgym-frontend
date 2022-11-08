

import axios from './Axios';
import { toast } from 'react-toastify';
import { addToken } from '../../utils/jwt';
import { USER} from './ApiRoutes';

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
        const {data,status} = await axios.get(`${USER}/`, config)
        return {data,status};

    }catch(error){
        return {status:error.response.status}
    }
};

export const getUser = async(_id)=> {
    try{
        config.headers.Authorization=addToken();
        const {data,status} = await axios.get(`${USER}/${_id}`, config);
        console.log(data);
        return {userdata:data,status}
    }catch(error){
        console.log(error)
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

export const updateUser = async (_id,_userUpdate) => {
    try {
        config.headers.Authorization=addToken();
        //cambiar metodo
        console.log(updateUser)
        const req = await toast.promise(axios.put(`${USER}/${_id}`, _userUpdate, config),
        {
            pending: "Modificando usuario...",
            success: `¡Usuario con email ${_userUpdate.email} actualizado!`,
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