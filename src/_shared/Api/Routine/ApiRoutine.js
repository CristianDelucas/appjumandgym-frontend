import axios from 'axios';
import { toast } from 'react-toastify';
import { addToken } from '../../../utils/jwt';
import { ROUTINE } from '../ApiRoutes';

const config= {
    headers : {
        
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    }
}


export const getRoutines = async()=> {
    try{
        
        config.headers.Authorization=addToken();
        const req = await axios.get(`${ROUTINE}/`, config);
        
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
        console.error(error);
    }
};

export const getRoutineByIdUser = async(id)=> {
    try{
        config.headers.Authorization=addToken();
        const req = await axios.get(`${ROUTINE}/user/${id}`, config);
        console.log(req)
        req.data.status = req.status;
        return req.data;
    }catch(error){
        console.error(error)
    }
};

export const createRoutine = async (newRoutine) => {
    try {
        config.headers.Authorization=addToken();
        const req = await axios.post(ROUTINE, newRoutine, config);
        console.log('prueba');
        console.log(req);
        return req;
    } catch (error) {
        toast.error('La rutina ya existe.'); 
    }
}

export const updateExerciseByID = async (_id,exerciseUpdate) => {
    try {
        //cambiar metodo
        const req = await axios.put(`${ROUTINE}/${_id}`, exerciseUpdate, config);
        return req;
    } catch (error) {
        toast.error('Hubo un error.'); 
    }
}

export const deleteExerciseById = async(_id)=> {
    try{
        config.headers.Authorization=addToken();
        const req = await axios.delete(`${ROUTINE}/${_id}`, config);
        
        return req;
    }catch(error){
        console.error(error)
    }
};