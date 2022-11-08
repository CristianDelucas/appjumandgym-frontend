
import axios from "axios";
import { toast } from "react-toastify";
import { addToken } from "../../../utils/jwt";
import { AUTH } from "../ApiRoutes";

const config = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  withCredentials: true,
};


export const loginUser = async(user)=> {
  try{
      console.log(user);
      const {data,status} = await toast.promise(axios.post(`${AUTH}/login`, user, config),
          {
          pending: "Iniciando sesión...",
          success: `¡Bienvenido ${user.email}! `,
          error: {render({data}){return (data.response.status===0)?'Error de red':data.response.data.message}},
        });
        console.log({data,status})
      return {data,status};
  }catch(error){
      return {status:error.response.status}
  }
}

export const logoutUser = async()=> {
  try{
      //Desconectando usuario
      axios.defaults.withCredentials = true
      const req = await toast.promise(axios.get(`${AUTH}/logout`, config),
      {
          pending: "Desconectando...",
          success: `¡Hasta pronto PUMA!`,
          error: {render({data}){return data.response.data.message}},
        });
        window.sessionStorage.clear()
      return req;
  }catch(error){
      console.error(error)
  }
}

export const logoutUserExpired = async()=> {
  try{
      //Desconectando usuario
      axios.defaults.withCredentials = true
      const req = await toast.promise(axios.get(`${AUTH}/logout`, config),
      {
          pending: "Desconectando...",
          success: {render:'Sesión caducada, vuelve a conectar',type:'warning'},
          error: {render({data}){return data.response.data.message}},
        });
        window.sessionStorage.clear()
      return req;
  }catch(error){
      console.error(error)
  }
}

export const sendEmailForgotPassword = async (email) => {
  try {
    const req = await toast.promise(
      axios.put(`${AUTH}/forgotpassword`, email, config),
      {
        pending: "Enviando correo...",
        success: "¡Correo enviado!",
        error: {render({data}){return data.response.data.message}},
      }
    );
    return req;
  } catch (error) {
    console.error(error);
  }
};

export const validIdAndResetToken = async (id, resetToken) => {
  try {
    const req = await axios.get(
      `${AUTH}/forgotpassword/${id}/${resetToken}`,
      config
    );
    return req;
  } catch (error) {
    console.error(error);
  }
};

export const resetPassword = async (id, resetToken, password) => {
  try {
    const req = await toast.promise( axios.post(
      `${AUTH}/resetpassword/${id}/${resetToken}`,
      password,
      config
    ),{
        pending: "Cambiando contraseña...",
        success: "¡Contraseña cambiada!",
        error: "¡No se pudo cambiar la contraseña!",
    });

    return req;
  } catch (error) {
    console.error(error);
  }
};

export const refreshUser = async()=> {
  try{
      axios.defaults.withCredentials = true
      config.headers.Authorization=addToken();
      console.log(config.headers.Authorization);
      console.log('REFRESCANDO----------------');
      const req = await axios.post(`${AUTH}/refresh`, config);
      
      console.log('REFRESCANDO----------------');
      console.log(req.data);

      return req;
  }catch(error){
      console.error(error)
  }
}