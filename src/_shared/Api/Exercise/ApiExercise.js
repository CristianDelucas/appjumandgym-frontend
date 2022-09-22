import axios from 'axios';
import { toast } from 'react-toastify';
import { addToken } from '../../../utils/jwt';
import { EXERCISE } from '../ApiRoutes';

const config= {
    headers : {
        
        "Accept": "application/json",
        "Content-Type": "application/json",
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
        if(error.request.status===403){
            toast.error("Sesión caducada.");
        }
        if(error.request.status===0){
            toast.error("Hubo un error, prueba más tarde.");
        }
        console.error(error);
    }
};

export const getExerciseById = async(id)=> {
    try{
        config.headers.Authorization=addToken();
        const req = await axios.get(`${EXERCISE}/${id}`, config);

        req.data.status = req.status;
        return req.data;
    }catch(error){
        console.error(error)
    }
};

export const registerExercise = async (exerciseRegister) => {
    try {
        const req = await axios.post(EXERCISE, exerciseRegister, config);
        console.log('prueba');
        console.log(req);
        return req;
    } catch (error) {
        toast.error('El ejercicio ya existe.'); 
    }
}

export const updateExerciseByID = async (_id,exerciseUpdate) => {
    try {
        //cambiar metodo
        const req = await axios.put(`${EXERCISE}/${_id}`, exerciseUpdate, config);
        return req;
    } catch (error) {
        toast.error('Hubo un error.'); 
    }
}

export const deleteExerciseById = async(_id)=> {
    try{
        config.headers.Authorization=addToken();
        const req = await axios.delete(`${EXERCISE}/${_id}`, config);
        console.log(req);
        return req;
    }catch(error){
        console.error(error)
    }
};