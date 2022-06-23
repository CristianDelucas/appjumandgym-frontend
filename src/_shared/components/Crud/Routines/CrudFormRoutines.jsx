import React, { useEffect, useState } from 'react'
import CrudFormRoutinesRow from './CrudFormRoutinesRow';





const CrudFormRoutines = ({register,errors,nrutina, selectFields, watch, setRutina, rutina}) => {

  
  const valueSelectField = selectFields[nrutina-1].nameObject;
  
  const [selectExercises, setSelectExercises] = useState([]);


    const [numEjercicios, setNumEjercicio] = useState([]);

    

    useEffect(() => {
      
      const auxSelect = [];
      const aux = [];
      setNumEjercicio([]);

      

      for(let i = 1; i <= watch(valueSelectField); i++){
        aux.push(i);
        auxSelect.push({
          nameExercise:`nameDia${nrutina}ejercicio${i}`,
          series:`seriesDia${nrutina}ejercicio${i}`,
          repeticiones:`repeticionesDia${nrutina}ejercicio${i}`,
          descanso:`descansoDia${nrutina}ejercicio${i}`});
        }

      
      setNumEjercicio(aux);
      setSelectExercises(auxSelect);
        
    }, [watch(valueSelectField)]);

    
  
  return (
    <>
    <div className='section-exercises'>
    <label>Nº de ejercicios</label>
    <select  {...register(`${valueSelectField}`, {required:{value:true, message:"Número de ejercicios requerido"}})}>
                  <option value="">--Nº EJERCICIOS--</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
              </select>
      {errors[valueSelectField] && <p className="error">{errors[valueSelectField].message}</p>}
    </div>
    {numEjercicios === null ? "": 
    
    numEjercicios.map((el,index) => (
      <>
      <div className='card'>
      <CrudFormRoutinesRow 
      
      setRutina={setRutina}
      rutina={rutina}
      nrutina={nrutina}
      
      register={register}
      errors={errors}
      watch={watch}
      selectExercises={selectExercises}
      numero={index+1}/>
      </div>
      </>
    ))

    }

    
    </>
  )
}

export default CrudFormRoutines;