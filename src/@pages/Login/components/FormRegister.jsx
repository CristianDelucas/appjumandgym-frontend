import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  AiOutlineMail,
  AiOutlineUser,
  AiOutlineCalendar,
  AiOutlineDashboard,
  AiOutlinePushpin,
} from "react-icons/ai";
import { BiKey } from "react-icons/bi";
import { GiBodySwapping } from "react-icons/gi";

import { HiEye, HiEyeOff, HiOutlinePhone } from "react-icons/hi";
import { ImMan, ImWoman } from "react-icons/im";
import useAuth from "../../../hooks/auth";

const FormRegister = () => {
  const { signUp, isLogged } = useAuth();
  const [show, setShow] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const submit = async (data, e) => {
    e.preventDefault();
    console.log(data);
    signUp(data);
  };
  const password = watch("passwordRegister");
  return (
    <form onSubmit={handleSubmit(submit)} className="signup-form">
      <div className="title">Registro</div>
      <div className="input-boxes">
        <div className="input-box">
          <i className="fas fa-envelope">
            <AiOutlineMail />
          </i>
          <span className="title-input-box">Email</span>
          <input
            style={errors.emailRegister && { border: "2px solid red" }}
            type="text"
            placeholder="Introduce tu email"
            name="email"
            {...register("emailRegister", {
              required: { value: true, message: "'Email' es obligatorio" },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Email con formato incorrecto",
              },
            })}
          />
          {errors.emailRegister && (
            <span className="error-message">{errors.emailRegister.message}</span>
          )}
        </div>

        <div className="input-box">
          <i className="fas fa-envelope">
            <AiOutlineUser />
          </i>
          <span className="title-input-box">Nombre</span>
          <input
            style={errors.nombre && { border: "2px solid red" }}
            type="text"
            placeholder="Nombre"
            name="nombre"
            {...register("nombre", {
              required: { value: true, message: "'Nombre' es obligatorio" },
              pattern: { value: /^[a-zA-Z]+$/, message: "Solo letras" },
            })}
          />
          {errors.nombre && (
            <span className="error-message">{errors.nombre.message}</span>
          )}
        </div>

        <div className="input-box">
          <i className="fas fa-envelope">
            <AiOutlineUser />
          </i>
          <span className="title-input-box">Apellidos</span>
          <input
            style={errors.apellidos && { border: "2px solid red" }}
            type="text"
            placeholder="Apellidos"
            name="apellidos"
            {...register("apellidos", {
              required: { value: true, message: "'Apellidos' es obligatorio" },
              pattern: { value: /^[a-zA-Z ]+$/, message: "Solo letras" },
              maxLength: { value: 24, message: "Apellido demasiado largo" },
            })}
          />
          {errors.apellidos && (
            <span className="error-message">{errors.apellidos.message}</span>
          )}
        </div>

        <div className="input-box">
          <i className="fas fa-envelope">
            <HiOutlinePhone />
          </i>
          <span className="title-input-box">Móvil</span>
          <input
            style={errors.movil && { border: "2px solid red" }}
            type="tel"
            placeholder="Móvil"
            name="movil"
            {...register("movil", {
              required: { value: true, message: "'Móvil' es obligatorio" },
              pattern: { value: /^[0-9\b]+$/, message: "Sólo números" },
            })}
          />
          {errors.movil && (
            <span className="error-message">{errors.movil.message}</span>
          )}
        </div>

        <div className="input-box radios">
          <span className="title-input-box">Sexo</span>
          <label>
            <div>
              <input
                type="radio"
                name="sexo"
                value="hombre"
                {...register("sexo", {
                  required: {
                    value: true,
                    message: "Debe seleccionar un 'Sexo'",
                  },
                })}
              />
              <ImMan alt="hombre"/>
            </div>
          </label>
          <label>
            <div>
              <input
                type="radio"
                name="sexo"
                value="mujer"
                {...register("sexo", {
                  required: {
                    value: true,
                    message: "Debe seleccionar un 'Sexo'",
                  },
                })}
              />
              <ImWoman alt="mujer"/>
            </div>
          </label>
          {errors.sexo && (
            <span className="error-message">{errors.sexo.message}</span>
          )}
        </div>

        <div className="input-box">
          <span className="title-input-box">Fecha de nacimiento</span>
          <i className="fas fa-envelope">
            <AiOutlineCalendar />
          </i>
          <input
            style={errors.fecha_nacimiento && { border: "2px solid red" }}
            type="date"
            name="fecha_nacimiento"
            {...register("fecha_nacimiento", {
              required: {
                value: true,
                message: "'Fecha de nacimiento' es obligatorio",
              },
              min: { value: 16, message: "Es menor de edad" },
              max: { value: 100, message: "¿No prefieres ser más joven?" },
            })}
          />
          {errors.fecha_nacimiento && (
            <span className="error-message">
              {errors.fecha_nacimiento.message}
            </span>
          )}
        </div>

        <div className="input-box">
          <span className="title-input-box">Peso actual (Kg)</span>
          <i className="fas fa-envelope">
            <AiOutlineDashboard />
          </i>
          <input
            style={errors.peso && { border: "2px solid red" }}
            type="number"
            placeholder="Peso actual"
            name="peso"
            {...register("peso", {
              required: {
                value: true,
                message: "'Peso actual' es obligatorio",
              },
              min: { value: 35, message: "Peso inválido" },
            })}
          />
          {errors.peso && (
            <span className="error-message">{errors.peso.message}</span>
          )}
        </div>

        <div className="input-box">
          <span className="title-input-box">Altura (cm)</span>
          <i className="fas fa-envelope">
            <AiOutlineDashboard />
          </i>
          <input
            style={errors.altura && { border: "2px solid red" }}
            type="number"
            placeholder="Altura"
            name="altura"
            {...register("altura", {
              required: { value: true, message: "'Altura' es obligatorio" },
              min: { value: 35, message: "Altura inválida" },
            })}
          />
          {errors.altura && (
            <span className="error-message">{errors.altura.message}</span>
          )}
        </div>

        <div className="input-box">
          <span className="title-input-box">Objetivo deseado</span>
          <i className="fas fa-envelope">
            <GiBodySwapping />
          </i>
          <select
            name="objetivo"
            label="objetivo"
            style={errors.objetivo && { border: "2px solid red" }}
            {...register("objetivo", {
              required: { value: true, message: "'Objetivo' es obligatorio" },
            })}
          >
            <option value="">--OBJETIVO--</option>
            <option value="perder grasa">Perder grasa</option>
            <option value="mantener peso">Mantener peso</option>
            <option value="ganar musculo">Ganar músculo</option>
          </select>
          {errors.objetivo && (
            <span className="error-message">{errors.objetivo.message}</span>
          )}
        </div>

        <div className="input-box">
          <span className="title-input-box">Actividad física</span>
          <i className="fas fa-envelope">
            <GiBodySwapping />
          </i>
          <select
            name="actividad"
            label="actividad"
            style={errors.actividad && { border: "2px solid red" }}
            {...register("actividad", {
              required: { value: true, message: "'actividad' es obligatorio" },
            })}
          >
            <option value="">--NIVEL--</option>
            <option value="Sedentario">Sedentario (0 días)</option>
            <option value="Ligero">Ligero (2-3 días)</option>
            <option value="Moderado">Moderado (4-5 días)</option>
            <option value="Alto">Alto (6-7 días)</option>
            <option value="Profesional">Profesional (6-7 días)</option>
          </select>
          {errors.actividad && (
            <span className="error-message">{errors.actividad.message}</span>
          )}
        </div>

        <div className="input-box">
          <span className="title-input-box">Contraseña</span>
          <i className="fas fa-envelope">
            <BiKey />
          </i>
          <input
            style={errors.passwordRegister && { border: "2px solid red" }}
            type={show ? "text" : "password"}
            placeholder="Contraseña"
            name="passwordRegister"
            {...register("passwordRegister", {
              required: { value: true, message: "'Contraseña' es obligatorio" },
              pattern:{
                        value:/^(\S)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])[a-zA-Z0-9~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]{10,16}$/,
                        message:'La contraseña debe incluir al menos una mayúscula, un valor numérico y un carácter especial'
                    },
              minLength: {
                value: 8,
                message: "Longitud minima de 8",
              },
            })}
          />
          {show ? (
            <HiEyeOff onClick={() => setShow(!show)} className="showpassword" />
          ) : (
            <HiEye onClick={() => setShow(!show)} className="showpassword" />
          )}
          {errors.password && (
            <span className="error-message">{errors.password.message}</span>
          )}
        </div>

        <div className="input-box">
          <span className="title-input-box">Repite la contraseña</span>
          <i className="fas fa-envelope">
            <BiKey />
          </i>
          <input
            style={errors.confirmpassword && { border: "2px solid red" }}
            type={show ? "text" : "password"}
            placeholder="Repite la contraseña"
            name="passwordrepetido"
            {...register("confirmpassword", {
              required: { value: true, message: "'Contraseña' es obligatorio" },
              pattern:{
                        value:/^(\S)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])[a-zA-Z0-9~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]{10,16}$/,
                        message:'La contraseña debe incluir al menos una mayúscula, un valor numérico y un carácter especial'
                    },
              minLength: {
                value: 8,
                message: "Longitud minima de 8",
              },
              validate: (value) =>
                value === password || "La contraseña no coincide",
            })}
          />
          {show ? (
            <HiEyeOff onClick={() => setShow(!show)} className="showpassword" />
          ) : (
            <HiEye onClick={() => setShow(!show)} className="showpassword" />
          )}
          {errors.confirmpassword && (
            <span className="error-message">
              {errors.confirmpassword.message}
            </span>
          )}
        </div>

        <div className="input-box button">
          <input type="submit" className="button" value="REGISTRAR"></input>
        </div>
      </div>
      <div className="text sign-up-text">
        ¿Ya tienes una cuenta? <br />{" "}
        <label htmlFor="flip">Conectate ahora</label>
      </div>
    </form>
  );
};

export default FormRegister;
