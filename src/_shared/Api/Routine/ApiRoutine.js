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

export const registerRoutine = async (newRoutine) => {
    try {
        config.headers.Authorization=addToken();
        
        const {data,status} = await toast.promise(axios.post(ROUTINE, newRoutine, config),
        {
            pending: "Creando rutina...",
            success: `¡Rutina creada! `,
            error: {render({data}){return (data.response.status===0)?'Error de red':data.response.data.message}},
          });
        
          return {data,status};
    } catch (error) {
        return {status:error.response.status}
    }
}

export const updateRoutineByID = async (_id,routineUpdated) => {
    try {
        
        config.headers.Authorization=addToken();
        const {data,status} = await toast.promise(axios.put(`${ROUTINE}/${_id}`, routineUpdated, config),{
            pending: `Modificando rutina de <${routineUpdated.id_user.email}>...`,
            success: `¡Rutina de <${routineUpdated.id_user.email}> modificado!`,
            error: {render({data}){return (data.response.status===0)?'Error de red':data.response.data.message}},
          });

          console.log(data);
          return {data,status};
    } catch (error) {
        return {status:error.response.status}
    }
}

export const deleteRoutineById = async(_id)=> {
    try{
        config.headers.Authorization=addToken();
        const {data,status} = await toast.promise(axios.delete(`${ROUTINE}/${_id}`, config),{
            pending: `Borrando rutina con ID <${_id}>...`,
            success: `¡Rutina con ID: <${_id}> eliminado!`,
            error: {render({data}){return (data.response.status===0)?'Error de red':data.response.data.message}},
          });
        
          return {data,status};
    }catch(error){
        return {status:error.response.status}
    }
};