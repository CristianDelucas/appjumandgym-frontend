import moment from "moment";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  AiOutlineCalendar,
  AiOutlineDashboard,
  AiOutlineMail,
  AiOutlineUser,
} from "react-icons/ai";
import { BiKey } from "react-icons/bi";
import { GiBodySwapping } from "react-icons/gi";
import { HiOutlinePhone } from "react-icons/hi";
import { refreshUser } from "../../../Api/ApiRefresh";

const roles = [{ id: "user" }, { id: "moderator" }, { id: "admin" }];

const initialForm = {
  email: "",
    nombre: "",
    apellidos: "",
    movil: "",
    sexo: "",
    fecha_nacimiento:"",
    altura: "",
    peso: "",
    objetivo: "",
    actividad: "",
    fin_plan:"",
    roles: [],
    estado: "",
    _id: null,
};

const CrudFormClients = ({
  addData,
  updateData,
  dataToEdit,
  setDataToEdit,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },

    
  } = useForm({
    email: "",
    nombre: "",
    apellidos: "",
    movil: "",
    sexo: "",
    fecha_nacimiento:"",
    altura: "",
    peso: "",
    objetivo: "",
    actividad: "",
    fin_plan:"",
    roles: [],
    estado: "",
    _id: null,
  });

  useEffect(() => {
    if (dataToEdit) {
      reset(initialForm);
      const roles = dataToEdit.roles.map((el) => el.name);
      const fecha_nacimiento = moment(dataToEdit.fecha_nacimiento).format('YYYY-MM-DD');
      const fin_plan = moment(dataToEdit.fin_plan).format('YYYY-MM-DD');
      reset({ ...dataToEdit, roles,fecha_nacimiento,fin_plan });
    }
  }, [dataToEdit]);

  const [form, setForm] = useState(initialForm);

  const submit = (data) => {
    if (!data._id) {
      addData(data);
    } else {
      updateData(data);
      setDataToEdit(null);
    }
    reset(initialForm);
  };

  const handleReset = () => {
    setDataToEdit(null);
    reset(initialForm);
  };

  return (
    <>
      <h3>{dataToEdit ? "Editar" : "Añadir"} cliente</h3>
      <form className="container" onSubmit={handleSubmit(submit)}>
        {/* AQUI ENTRAN LOS INPUTS */}
        <div className="row input-boxes">
          <div className="col-12 col-lg-4 col-xl-3  input-box">
            <i>
              <AiOutlineMail />
            </i>
            <span className="input-box__title">Email</span>
            <input
              style={errors.email && { border: "2px solid red" }}
              type="text"
              placeholder="Introduce tu email"
              name="email"
              {...register("email", {
                required: { value: true, message: "'Email' es obligatorio" },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Email con formato incorrecto",
                },
              })}
            />
            {errors.email && (
              <span className="error-message">{errors.email.message}</span>
            )}
          </div>

          <div className="col-12 col-lg-4 col-xl-3 input-box">
            <i>
              <AiOutlineUser />
            </i>
            <span className="input-box__title">Nombre</span>
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

          <div className="col-12 col-lg-4 col-xl-3 input-box">
            <i>
              <AiOutlineUser />
            </i>
            <span className="input-box__title">Apellidos</span>
            <input
              style={errors.apellidos && { border: "2px solid red" }}
              type="text"
              placeholder="Apellidos"
              name="apellidos"
              {...register("apellidos", {
                required: {
                  value: true,
                  message: "'Apellidos' es obligatorio",
                },
                pattern: { value: /^[a-zA-Z ]+$/, message: "Solo letras" },
                maxLength: { value: 24, message: "Apellido demasiado largo" },
              })}
            />
            {errors.apellidos && (
              <span className="error-message">{errors.apellidos.message}</span>
            )}
          </div>

          <div className="col-12 col-lg-4 col-xl-3 input-box">
            <i>
              <HiOutlinePhone />
            </i>
            <span className="input-box__title">Móvil</span>
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

          <div className="col-12 col-lg-4 col-xl-3 input-box">
            <span className="input-box__title">Sexo</span>
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
                Hombre
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
                Mujer
              </div>
            </label>
            {errors.sexo && (
              <span className="error-message">{errors.sexo.message}</span>
            )}
          </div>

          <div className="col-12 col-lg-4 col-xl-3 input-box">
            <span className="input-box__title">Fecha de nacimiento</span>
            <i>
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

          <div className="col-12 col-lg-4 col-xl-3 input-box">
            <span className="input-box__title">Peso actual (Kg)</span>
            <i>
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

          <div className="col-12 col-lg-4 col-xl-3 input-box">
            <span className="input-box__title">Altura (cm)</span>
            <i>
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

          <div className="col-12 col-lg-4 col-xl-3 input-box">
            <span className="input-box__title">Objetivo deseado</span>
            <i>
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

          <div className="col-12 col-lg-4 col-xl-3 input-box">
            <span className="input-box__title">Actividad física</span>
            <i>
              <GiBodySwapping />
            </i>
            <select
              name="actividad"
              label="actividad"
              style={errors.actividad && { border: "2px solid red" }}
              {...register("actividad", {
                required: {
                  value: true,
                  message: "'actividad' es obligatorio",
                },
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
          <div className="col-12 col-lg-4 col-xl-3 input-box">
          <i><AiOutlineCalendar /></i>
          <span className="input-box__title">Fin de plan</span>
          <input
              style={errors.fin_plan && { border: "2px solid red" }}
              type="date"
              name="fin_plan"
              {...register("fin_plan", {
                required: {
                  value: true,
                  message: "'Fin plan' es obligatorio",
                }
              })}
            />
            {errors.fin_plan && (
              <span className="error-message">
                {errors.fin_plan.message}
              </span>
            )}
          </div>
          <div className="col-12 col-lg-4 col-xl-3 input-box">
            <span className="input-box__title">Roles</span>
            {roles.map((item) => (
              <label>
                <input
                  {...register("roles", {
                    required: { value: true, message: "Es obligatorio" },
                  })}
                  type="checkbox"
                  value={item.id}
                />{" "}
                {item.id}
              </label>
            ))}
            {errors.roles && (
              <span className="error-message">{errors.roles.message}</span>
            )}
          </div>
          <div className="col-12 col-lg-4 col-xl-3 input-box">
            <span className="input-box__title">Estado ON/OFF</span>
            <i>
              <GiBodySwapping />
            </i>
            <select
              name="estado"
              label="estado"
              style={errors.estado && { border: "2px solid red" }}
              {...register("estado", {
                required: { value: true, message: "'Estado' es obligatorio" },
              })}
            >
              <option value="">--ESTADO--</option>
              <option value="inactivo">INACTIVO</option>
              <option value="activo">ACTIVO</option>
            </select>
            {errors.estado && (
              <span className="error-message">{errors.estado.message}</span>
            )}
          </div>
          
          
        </div>
        <div className="input-buttons">
              <button className=" col-6" type="submit">
              {dataToEdit ? "Editar" : "Registrar"} cliente
              </button>
              <button className=" col-6" onClick={() => handleReset()}>
                Limpiar
              </button>
          </div>

        
      </form>
    </>
  );
};

export default CrudFormClients;
