import React, { useContext, useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import CrudFormRoutinesRow from "./CrudFormRoutinesRow";
import Select from "react-select";
import { AiOutlineUser } from "react-icons/ai";

const CrudFormRoutines = ({
  control,
  register,
  errors,
  nrutina,
  selectFields,
  watch,
  setRutina,
  rutina,
}) => {
  const valueSelectField = selectFields[nrutina - 1].nameObject;
  const valueSelectMusculos =
    selectFields[nrutina - 1].nameObject + "_musculos";

  const [selectExercises, setSelectExercises] = useState([]);

  const [numEjercicios, setNumEjercicio] = useState([]);

  useEffect(() => {
    const auxSelect = [];
    const aux = [];
    setNumEjercicio([]);

    for (let i = 1; i <= watch(valueSelectField); i++) {
      aux.push(i);
      auxSelect.push({
        nameExercise: `nameDia${nrutina}ejercicio${i}`,
        series: `seriesDia${nrutina}ejercicio${i}`,
        repeticiones: `repeticionesDia${nrutina}ejercicio${i}`,
        descanso: `descansoDia${nrutina}ejercicio${i}`,
        rir: `rirDia${nrutina}ejercicio${i}`,
      });
    }

    setNumEjercicio(aux);
    setSelectExercises(auxSelect);
  }, [watch(valueSelectField)]);

  return (
    <>
      <div className="row input-boxes ">
        <div className="col-12 col-lg-4 col-xl-3  input-box">
          <span className="input-box__title">Número de ejercicios</span>
          <select
            {...register(`${valueSelectField}`, {
              required: {
                value: true,
                message: "Número de ejercicios requerido",
              },
            })}
          >
            <option value="">--Nº EJERCICIOS--</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </select>
          {errors[valueSelectField] && (
            <p className="error">{errors[valueSelectField].message}</p>
          )}
        </div>
        <div className="col-12 col-lg-4 col-xl-3  input-box">
        <span className="input-box__title">Músculos</span>

        <Controller
          control={control}
          placeholder="Nombre"
          defaultValue={null}
          {...register(`${valueSelectMusculos}`, {
            required: {
              value: true,
              message: "Músculos de ejercicios requerido",
            },
          })}
          render={({ field }) => (
            <Select
              placeholder="Selecciona los músculos"
              {...field}
              ref={this}
              options={[
                { value: "ISQUIOS", label: "ISQUIOS" },
                { value: "BICEPS", label: "BICEPS" },
                { value: "TORSO", label: "TORSO" },
                { value: "PIERNAS", label: "PIERNAS" },
              ]}
              isMulti
            />
          )}
        />

        {errors[valueSelectMusculos] && (
          <p className="error">{errors[valueSelectMusculos].message}</p>
        )}
        </div>
      </div>
      {numEjercicios === null
        ? ""
        : numEjercicios.map((el, index) => (
            <>
              <div className="container">
                <CrudFormRoutinesRow
                  control={control}
                  setRutina={setRutina}
                  rutina={rutina}
                  nrutina={nrutina}
                  register={register}
                  errors={errors}
                  watch={watch}
                  selectExercises={selectExercises}
                  numero={index + 1}
                />
              </div>
            </>
          ))}
    </>
  );
};

export default CrudFormRoutines;
