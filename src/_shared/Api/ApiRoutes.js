
const BASE_URL= process.env.REACT_APP_API_URL
//const BASE_URL= "https://shrouded-ravine-61384.herokuapp.com";
//const BASE_URL= "https://appjumandgym-api-production.up.railway.app"
const USER=`${BASE_URL}/users`
const AUTH=`${BASE_URL}/auth`
const REFRESH=  `${BASE_URL}/users/token/refresh`;
const EXERCISE= `${BASE_URL}/exercises`
const ROUTINE= `${BASE_URL}/routines`

export {
    AUTH,
    USER,
    EXERCISE,
    ROUTINE
    
}
