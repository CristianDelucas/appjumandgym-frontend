import axios from 'axios';
import {LOGIN} from './ApiRoutes';

const config= {
    headers : {
        
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    }
}

export const loginUser = async(user)=> {
    try{
        console.log(user);
        const req = await axios.post(LOGIN, user, config);
        console.log('LOGEANDO');
        console.log(req.data);
        return req.data;
    }catch(error){
        console.error(error)
    }
}