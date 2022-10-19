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
        return req;
    }catch(error){
        console.error(error);
    }
};

export const getRoutineByIdUser = async(id)=> {
    try{
        config.headers.Authorization=addToken();
        const {data,status} = await axios.get(`${ROUTINE}/user/${id}`, config);
        return {data,status}
    }catch(error){
        return {status:error.response.status}
    }
};

export const createRoutine = async (newRoutine) => {
    try {
        config.headers.Authorization=addToken();
        
        const req = await toast.promise(axios.post(ROUTINE, newRoutine, config),
        {
            pending: "Creando rutina...",
            success: `¡Rutina creada! `,
            error: {render({data}){return (data.response.message)}},
          });
        
        return req;
    } catch (error) {
        console.log(error)
    }
}