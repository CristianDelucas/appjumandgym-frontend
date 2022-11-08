import axios from "axios";
import { addToken } from "../../utils/jwt";
import { AUTH } from "./ApiRoutes";

const config = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  withCredentials: true,
};

axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.headers.Authorization = addToken();
    
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const originalRequest = error.config;
    if (
      error.response.status === 403 &&
      originalRequest.url === `${AUTH}/refresh`
    ) {
      //limpiamos las credenciales en el localStorage y entonces returnamos
      return Promise.reject(error);
    }

    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      axios.defaults.withCredentials = true;
      config.headers.Authorization = addToken();
      return axios.post(`${AUTH}/refresh`, config).then((res) => {
        if (res.status === 201) {
          window.sessionStorage.setItem("token", JSON.stringify(res.data));
          return axios(originalRequest);
        }
      });
    }
    return Promise.reject(error);
  }
);

export default axios;
