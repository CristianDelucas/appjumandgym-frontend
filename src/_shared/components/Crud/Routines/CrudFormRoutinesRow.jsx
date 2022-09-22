
import React, { useContext } from 'react'
import { AdminContext } from '../../../../context/AdminContext'

const CrudFormRoutinesRow = ({
    numero,
    register,
    watch,
    errors,
    selectExercises
    }) => {
  
    
    const {exercises} = useContext(AdminContext);

   
    return (
    <div className='row'>
        <div className='col-12 col-sm-1'>
                <label></label>
                <p> Ejercicio {numero}</p>  
        </div>
        <div className='col-12 col-sm'>
            <label>EJERCICIO</label>
            <select {...register(selectExercises[numero-1].nameExercise, {required:{value:true, message:"Número de ejercicios requerido"}})}>
                    <option value="">--EJERCICIO--</option>
                    {exercises && exercises.map( exercise =>{
                        return (
                            <option value={exercise._id}>{exercise.nombre}</option>
                        )
                    })}
                    
            </select>
            {errors[selectExercises[numero-1].nameExercise] && <p className='error'>{errors[selectExercises[numero-1].nameExercise].message}</p>}
        </div>
        <div className='col-12 col-sm'>
            <label>SERIES</label>
            <select {...register(selectExercises[numero-1].series, {required:{value:true, message:"Número de series requerido"}})}>
                <option value="">--SERIES--</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            {errors[selectExercises[numero-1].series] && <p className='error'>{errors[selectExercises[numero-1].series].message}</p>}
        </div>
        <div className='col-12 col-sm'>
            <label>REPETICIONES X SERIE</label>
            <select {...register(selectExercises[numero-1].repeticiones, {required:{value:true, message:"Número de repeticiones requerido"}})}>
                <option value="">--REPETICIONES--</option>
                <option value="6">6</option>
                <option value="8">8</option>
                <option value="10">10</option>
                <option value="12">12</option>
                <option value="15">15</option>
            </select>
            {errors[selectExercises[numero-1].repeticiones] && <p className='error'>{errors[selectExercises[numero-1].repeticiones].message}</p>}
        </div>
        <div className='col-12 col-sm'>
            <label>DESCANSO X SERIE</label>
            <select {...register(selectExercises[numero-1].descanso, {required:{value:true, message:"Descanso requerido"}})}>
                <option value="">--DESCANSO--</option>
                <option value="45">45</option>
                <option value="60">60</option>
                <option value="90">90</option>
                <option value="120">120</option>
            </select>
            {errors[selectExercises[numero-1].descanso] && <p className='error'>{errors[selectExercises[numero-1].descanso].message}</p>}
        </div>
    </div>
  )
}

export default CrudFormRoutinesRow