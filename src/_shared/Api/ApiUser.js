import axios from 'axios';
import { addToken } from '../../utils/jwt';
import {USER} from './ApiRoutes';

const config= {
    headers : {
        
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    }
}

export const getUser = async(id)=> {
    try{
        config.headers.Authorization=addToken();
        const req = await axios.get(`${USER}/${id}`, config)
        return req.data
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

export const verifyEmailAndMobile = async(email,mobile)=> {
    try{
        config.headers.Authorization=addToken();
        const req = await axios.get(`${USER}/validateUser/${email}/${mobile}`, config)
        return req.data
    }catch(error){
        console.error(error)
    }
};


export const registerUser = async (userRegister) => {
    try {
        const req = await axios.post(USER, userRegister, config)
        return req
    } catch (error) {
        console.error(error)
    }
}
