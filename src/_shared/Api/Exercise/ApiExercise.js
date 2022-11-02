
import axios from 'axios';
import { toast } from 'react-toastify';
import { addToken } from '../../../utils/jwt';
import { EXERCISE } from '../ApiRoutes';

const config= {
    headers : {
        
        "Accept": "application/json",
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*"
        
    }
}


export const getExercises = async()=> {
    try{
        
        config.headers.Authorization=addToken();
        const req = await axios.get(`${EXERCISE}/`, config);
        
        req.data.status = req.status;
        console.log(req.data);
        return req;
    }catch(error){
        return {status:error.response.status}
    }
};

export const getExerciseById = async(id)=> {
    try{
        config.headers.Authorization=addToken();
        const req = await axios.get(`${EXERCISE}/${id}`, config);

        req.data.status = req.status;
        return req.data;
    }catch(error){
        return {status:error.response.status}
    }
};

export const registerExercise = async (exerciseRegister) => {
    try {
        config.headers.Authorization=addToken();
        const req = await toast.promise(axios.post(EXERCISE, exerciseRegister, config),{
            pending: `Creando ejercicio <${exerciseRegister.nombre}>...`,
            success: `¡Ejercicio <${exerciseRegister.nombre}> creado!`,
            error: {render({data}){return data.response.data.message}},
          });
        return req;
    } catch (error) {
        return {status:error.response.status}
    }
}

export const updateExerciseByID = async (_id,exerciseUpdate) => {
    try {
        //cambiar metodo
        config.headers.Authorization=addToken();
        const req = await toast.promise(axios.put(`${EXERCISE}/${_id}`, exerciseUpdate, config),{
            pending: `Modificando ejercicio <${exerciseUpdate.nombre}>...`,
            success: `¡Ejercicio <${exerciseUpdate.nombre}> modificado!`,
            error: {render({data}){return data.response.data.message}},
          });
        return req;
    } catch (error) {
        return {status:error.response.status}
    }
}

export const deleteExerciseById = async(_id)=> {
    try{
        config.headers.Authorization=addToken();
        const req = await toast.promise(axios.delete(`${EXERCISE}/${_id}`, config),{
            pending: `Borrando ejercicio <${_id}>...`,
            success: `¡Ejercicio con ID: <${_id}> eliminado!`,
            error: {render({data}){return data.response.data.message}},
          });
        
        return req;
    }catch(error){
        return {status:error.response.status}
    }
};