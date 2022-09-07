const BASE_URL= "http://localhost:3000";
const USER=`${BASE_URL}/users`
const LOGIN=  `${BASE_URL}/users/login`;
const LOGOUT=  `${BASE_URL}/users/auth/logout`;
const REFRESH=  `${BASE_URL}/users/token/refresh`;

export {
    LOGIN,
    LOGOUT,
    USER,
    REFRESH
}
