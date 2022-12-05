import React, { useContext } from "react";
import { AdminContext } from "../../../../context/AdminContext";
import Select from "react-select";
import { Controller } from "react-hook-form";
import { AiOutlineUser } from "react-icons/ai";

const CrudFormRoutinesRow = ({
  numero,
  register,
  control,
  watch,
  errors,
  selectExercises,
}) => {
  const { exercises } = useContext(AdminContext);

  return (
    <div className="row input-boxes ">
      <div className="col-12 col-sm-1 input-box">
        <span className="input-box__title"> Ejercicio {numero}</span>
      </div>
      <div className="col-12 col-lg-4 col-xl-2  input-box">
        <i>
          <AiOutlineUser />
        </i>
        <span className="input-box__title">Ejercicio</span>
        <Controller
          name={selectExercises[numero - 1].nameExercise}
          control={control}
          placeholder="Nombre"
          defaultValue={null}
          {...register(selectExercises[numero - 1].nameExercise, {
            required: { value: true, message: "Seleccione un ejercicio" },
          })}
          render={({ field }) => (
            <Select
              placeholder="Ejercicio"
              {...field}
              ref={this}
              options={exercises.map((exercise) => {
                return {
                  value: exercise._id,
                  label: exercise.nombre,
                };
              })}
            //   isOptionDisabled={() =>
            //     watch(selectExercises[numero - 1].nameExercise).length > 1
            //   }
              isMulti
            />
          )}
        />
        {errors[selectExercises[numero - 1].nameExercise] && (
            <span className="error-message">
            {errors[selectExercises[numero - 1].nameExercise].message}
          </span>
        )}
      </div>
      <div className="col-12 col-lg-4 col-xl-2  input-box">
      <span className="input-box__title">SERIES</span>
        <select
          {...register(selectExercises[numero - 1].series, {
            required: { value: true, message: "Número de series requerido" },
          })}
        >
          <option value="">--SERIES--</option>

          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        {errors[selectExercises[numero - 1].series] && (
            <span className="error-message">
            {errors[selectExercises[numero - 1].series].message}
          </span>
        )}
      </div>
      <div className="col-12 col-lg-4 col-xl-2  input-box">
      <span className="input-box__title">REPETICIONES</span>

        <Controller
          name={selectExercises[numero - 1].repeticiones}
          control={control}
          placeholder="Nombre"
          defaultValue={null}
          {...register(selectExercises[numero - 1].repeticiones, {
            required: { value: true, message: "REPETICIONES" },
          })}
          render={({ field }) => (
            <Select
              placeholder="Repeticiones"
              {...field}
              ref={this}
              options={[
                { value: "8", label: "8" },
                { value: "10", label: "10" },
                { value: "12", label: "12" },
                { value: "14", label: "14" },
                { value: "15", label: "15" },
                { value: "16", label: "16" },
                { value: "20", label: "20" },
              ]}
              isMulti
            />
          )}
        />
        {errors[selectExercises[numero - 1].repeticiones] && (
            <span className="error-message">
            {errors[selectExercises[numero - 1].repeticiones].message}
          </span>
        )}
      </div>
      <div className="col-12 col-lg-4 col-xl-2  input-box">
      <span className="input-box__title">DESCANSO</span>
        <select
          {...register(selectExercises[numero - 1].descanso, {
            required: { value: true, message: "Descanso requerido" },
          })}
        >
          <option value="">--DESCANSO--</option>
          <option value="45">45</option>
          <option value="60">60</option>
          <option value="90">90</option>
          <option value="120">120</option>
        </select>
        {errors[selectExercises[numero - 1].descanso] && (
            <span className="error-message">
            {errors[selectExercises[numero - 1].descanso].message}
          </span>
        )}
      </div>
      <div className="col-12 col-lg-4 col-xl-2  input-box">
      <span className="input-box__title">RIR</span>
        <select
          {...register(selectExercises[numero - 1].rir, {
            required: { value: true, message: "RIR requerido" },
          })}
        >
          <option value="1">1</option>
          <option value="2" selected>2</option>
        </select>
        {errors[selectExercises[numero - 1].rir] && (
            <span className="error-message">
            {errors[selectExercises[numero - 1].rir].message}
          </span>
        )}
      </div>
    </div>
  );
};

export default CrudFormRoutinesRow;
