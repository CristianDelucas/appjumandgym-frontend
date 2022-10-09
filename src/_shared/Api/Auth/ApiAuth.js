import axios from "axios";
import { toast } from "react-toastify";
import { AUTH } from "../ApiRoutes";

const config = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  withCredentials: true,
};
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
