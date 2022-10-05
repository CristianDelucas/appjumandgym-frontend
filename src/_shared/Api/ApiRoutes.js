
//const BASE_URL= "http://localhost:3000";
const BASE_URL= "https://shrouded-ravine-61384.herokuapp.com";

const USER=`${BASE_URL}/users`
const LOGIN=  `${BASE_URL}/users/login`;
const LOGOUT=  `${BASE_URL}/users/auth/logout`;
const REFRESH=  `${BASE_URL}/users/token/refresh`;

const EXERCISE= `${BASE_URL}/exercises`
const ROUTINE= `${BASE_URL}/routines`

export {
    LOGIN,
    LOGOUT,
    REFRESH,
    USER,
    EXERCISE,
    ROUTINE
    
}
