import React, { useEffect } from 'react'

const CrudFormRoutinesRow = ({
    numero,
    register,
    errors,
    selectExercises,
    selectFields,
    setRutina,
    rutina,
    nrutina,
    watch,
    }) => {
  


    useEffect(() => {
        const data = {
            nameExercise:watch(selectExercises[numero-1].nameExercise),
            series:watch(selectExercises[numero-1].series),
            repeticiones:watch(selectExercises[numero-1].repeticiones),
            descanso:watch(selectExercises[numero-1].descanso)
        }
        console.log('dia ' + nrutina + ' ejercicios --->' + numero);
        rutina[(nrutina-1)].dia[0].ejercicios[(numero-1)] = []
        //console.log('dia'+ nrutina + 'ejercicio' + numero );
        rutina[(nrutina-1)].dia[0].ejercicios[(numero-1)] =[data] ;
        console.log(numero)
        console.log(rutina);
        
    }, [watch(selectExercises[numero-1].nameExercise), watch(selectExercises[numero-1].series), watch(selectExercises[numero-1].repeticiones), watch(selectExercises[numero-1].descanso)]);

    return (
    <div className='row'>
        <div className='col-1'>
                <label></label>
                <p> Ejercicio {numero}</p>  
        </div>
        <div className='col'>
            <label>EJERCICIO</label>
            <select {...register(selectExercises[numero-1].nameExercise, {required:{value:true, message:"Número de ejercicios requerido"}})}>
                    <option value="">--EJERCICIO--</option>
                    <option value="curl de biceps">curl de biceps</option>
                    <option value="extension de biceps">extensión de biceps</option>
                    <option value="extension de pierna">extension de pierna</option>
            </select>
            {errors[selectExercises[numero-1].nameExercise] && <p className='error'>{errors[selectExercises[numero-1].nameExercise].message}</p>}
        </div>
        <div className='col'>
            <label>SERIES</label>
            <select {...register(selectExercises[numero-1].series, {required:{value:true, message:"Número de series requerido"}})}>
                <option value="">--SERIES--</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            {errors[selectExercises[numero-1].series] && <p className='error'>{errors[selectExercises[numero-1].series].message}</p>}
        </div>
        <div className='col'>
            <label>REPETICIONES X SERIE</label>
            <select {...register(selectExercises[numero-1].repeticiones, {required:{value:true, message:"Número de repeticiones requerido"}})}>
                <option value="">--REPETICIONES--</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            {errors[selectExercises[numero-1].repeticiones] && <p className='error'>{errors[selectExercises[numero-1].repeticiones].message}</p>}
        </div>
        <div className='col'>
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