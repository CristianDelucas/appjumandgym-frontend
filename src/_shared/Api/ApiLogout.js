import axios from 'axios';
import {LOGOUT} from './ApiRoutes';
const config= {
    headers : {
        
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    },
     withCredentials: true
}
export const logoutUser = async()=> {
    try{
        //Desconectando usuario
        axios.defaults.withCredentials = true
        const req = await axios.get(LOGOUT, config);

        return req;
    }catch(error){
        console.error(error)
    }
}