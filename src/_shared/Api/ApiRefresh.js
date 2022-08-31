import axios from 'axios';
import { addToken } from '../../utils/jwt';
import {REFRESH} from './ApiRoutes';
const config= {
    headers : {
        
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    },
     withCredentials: true
}
export const refreshUser = async()=> {
    try{
        axios.defaults.withCredentials = true
        config.headers.Authorization=addToken();
        console.log(config.headers.Authorization);
        console.log('REFRESCANDO----------------');
        const req = await axios.post(REFRESH, config);
        
        console.log('REFRESCANDO----------------');
        console.log(req.data);

        return req;
    }catch(error){
        console.error(error)
    }
}