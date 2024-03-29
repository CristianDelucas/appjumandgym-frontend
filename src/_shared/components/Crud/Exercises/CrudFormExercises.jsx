import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineFileImage, AiOutlineMail,AiOutlineProfile } from "react-icons/ai";
import { BiMoviePlay, BiPencil, BiWalk } from "react-icons/bi";

const initialForm = {
  nombre: "",
  musculo: "",
  indicaciones: "",
  url_miniatura: "",
  url_video: "",
  _id: null,
};

const CrudFormExercises = ({
  addData,
  updateData,
  dataToEdit,
  setDataToEdit,
}) => {

  const [_file, _setFile] = useState(undefined);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    nombre: "",
    musculo: "",
    indicaciones: "",
    url_miniatura: "",
    url_video: "",
    _id: null,
  });

  useEffect(() => {
    if (dataToEdit) {
      reset(initialForm);
      reset(dataToEdit);
    }
  }, [dataToEdit]);



  const submit = (data, e) => {
    e.preventDefault();

    if(data.url_video[0]){
      data.url_video= data.url_video[0];
    }

    if (!data._id) {
      addData(data);
      _setFile(undefined)
    } else {
      console.log("intentando editar");
      updateData(data);
      setDataToEdit(null);
      _setFile(undefined)
    }
    reset(initialForm);
  };

  const handleReset = () => {
    setDataToEdit(null);
    _setFile(undefined)
    reset(initialForm);
  };

  return (
    <>
      <h3>{dataToEdit ? "Editar" : "Añadir"} ejercicio</h3>
      <form className="container" onSubmit={handleSubmit(submit)}>
        <div className="row input-boxes ">
          <div className="col-12 col-lg-4 col-xl-3  input-box">
            <i>
              <AiOutlineProfile />
            </i>
            <span className="input-box__title">Nombre del ejercicio</span>
            <input
              style={errors.nombre && { border: "2px solid red" }}
              className="input"
              type="text"
              label="email"
              name="nombre"
              placeholder="Nombre de ejercicio"
              {...register("nombre", {
                required: { value: true, message: "Campo requerido" },
              })}
            />
            {errors.nombre && (
              <span className="error-message">{errors.nombre.message}</span>
            )}
          </div>
          <div className="col-12 col-lg-4 col-xl-3  input-box">
            <i>
              <BiWalk />
            </i>
            <span className="input-box__title">Músculo</span>
            <select
              style={errors.musculo && { border: "2px solid red" }}
              {...register("musculo", {
                required: { value: true, message: "Campo requerido" },
              })}
            >
              <option value="">--Musculo del ejercicio--</option>
              <option value="ABDOMEN">ABDOMEN</option>
              <option value="ADUCTORES">ADUCTORES</option>
              <option value="PECTORAL MAYOR">PECTORAL MAYOR</option>
              <option value="DORSAL ANCHO">DORSAL ANCHO</option>
              <option value="EXTENSORES TRONCO">EXTENSORES TRONCO</option>
              <option value="DELTOIDES">DELTOIDES</option>
              <option value="TRAPECIO">TRAPECIO</option>
              <option value="SERRATO">SERRATO</option>
              <option value="TRICEPS BRAQUIAL">TRICEPS BRAQUIAL</option>
              <option value="BICEPS BRAQUIAL">BICEPS BRAQUIAL</option>
              <option value="TREN INFERIOR">TREN INFERIOR</option>
              <option value="CUADRICEPS">CUADRICEPS</option>
              <option value="PIERNA">PIERNA</option>
              <option value="ISQUIOSURALES">ISQUIOSURALES</option>
              <option value="TRICEPS SURAL">TRICEPS SURAL</option>
              <option value="FLEXORES DORSALES PIE">FLEXORES DORSALES PIE</option>
              <option value="FLEXORES TRONCO">FLEXORES TRONCO</option>
              <option value="GLUTEOS">GLUTEOS</option>
              <option value="MOVILIDAD">MOVILIDAD</option>
              <option value="REHABILITACION">REHABILITACION</option>
              <option value="CARDIO">CARDIO</option>
              <option value="REPERTORIO FITBALL">REPERTORIO FITBALL</option>
              <option value="REPERTORIO BOZU">REPERTORIO BOZU</option>
            </select>
            {errors.musculo && (
              <span className="error-message">{errors.musculo.message}</span>
            )}
          </div>
          <div className="col-12 col-lg-4 col-xl-3  input-box">
            <i>
              <BiPencil />
            </i>
            <span className="input-box__title">Indicaciones del ejercicio</span>
            <input
            style={errors.indicaciones && { border: "2px solid red" }}
              className="input"
              type="text"
              label="indicaciones"
              name="indicaciones"
              placeholder="Indicaciones del ejercicio"
              {...register("indicaciones", {
                required: { value: true, message: "Campo requerido" },
              })}
            />
            {errors.indicaciones && (
              <span className="error-message">
                {errors.indicaciones.message}
              </span>
            )}
          </div>
          <div className="col-12 col-lg-4 col-xl-3  input-box">
            <i>
              <AiOutlineFileImage />
            </i>
            <span className="input-box__title">Url imagen</span>
            <input
              style={errors.imagen && { border: "2px solid red" }}
              className="input"
              type="text"
              name="imagen"
              placeholder="Url miniatura"
              {...register("url_miniatura")}
            />
          </div>

          <div className="col-12 col-lg-4 col-xl-3  input-box">
            <i>
              <BiMoviePlay />
            </i>
            <span className="input-box__title">Video de ejercicio</span>
            <button
            style={errors.url_video && { border: "2px solid red" }} 
            className="button-file">
            {_file?_file.substring(12):'Subir archivo...'}</button>
            <input
              
              className="input"
              type="file"
              name="url_video"
              placeholder="Selecciona el video"
              {...register("url_video", {
                required: { value: dataToEdit ? false:true, message: "Campo requerido" },
                onChange: (e) => {_setFile(e.target.value)},
              
              })}
            />
            
            {errors.url_video && (
              <span className="error-message">{errors.url_video.message}</span>
            )}
          </div>
        </div>
        <div className="input-buttons">
          <button className=" col-6" type="submit">
            {dataToEdit ? "Editar" : "Registrar"} ejercicio
          </button>
          <button className=" col-6" onClick={() => handleReset()}>
            Limpiar
          </button>
        </div>
      </form>
    </>
  );
};

export default CrudFormExercises;
