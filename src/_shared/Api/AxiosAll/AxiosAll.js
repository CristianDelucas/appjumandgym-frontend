

import axios from 'axios';
import { toast } from 'react-toastify';
import { addToken } from '../../../utils/jwt';

import { EXERCISE, ROUTINE } from '../ApiRoutes';
import {USER} from '../ApiRoutes';

const config= {
    headers : {
        
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    }
}

export const getUserAndRoutine = async(id)=> {
    try{
        config.headers.Authorization=addToken();
        const response = await axios.all(
            [
                axios.get(`${USER}/${id}`, config),
                axios.get(`${ROUTINE}/user/${id}`, config)
            ]
        )
        // .then(response =>{
        //     console.log(response[0].data);
        //     console.log(response[1].data);
        // });

        console.log(response)

        return {userdata:response[0].data,'routinedata':response[1].data, status: response[0].status}

    }catch(error){
        return {status:error.response.status}
    }
};

export const getUsersAndExercises = async()=> {
    try{
        config.headers.Authorization=addToken();
        const response = await axios.all(
            [
                await axios.get(`${USER}/`, config),
                await axios.get(`${EXERCISE}/`, config),
                await axios.get(`${ROUTINE}/`, config)
            ]
        )

        console.log(response)

        return {_users:response[0].data,_exercises:response[1].data, _routines:response[2].data, status: response[0].status}

    }catch(error){
        return {status:error.response.status}
    }
};