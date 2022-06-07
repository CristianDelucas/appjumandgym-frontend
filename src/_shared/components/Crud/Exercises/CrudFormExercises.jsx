import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';

 

  const initialForm = {
    ejercicio: '',
    zona: '',
    imagen: '',
    video: '',
    id:null
  }


const CrudFormExercises = ({addData, updateData, dataToEdit, setDataToEdit}) => {




    const {register, handleSubmit, watch, reset, formState: {errors}} = useForm({
      ejercicio: '',
      zona: '',
      imagen: '',
      video: '',
      
    });

    useEffect(() => {
      if(dataToEdit){
        reset(dataToEdit);
      }
    }, [dataToEdit])




    const [form, setForm] = useState(initialForm);


    

    const submit = (data) => {

        if(!data.id){
          addData(data);
        }else{
          updateData(data);
          setDataToEdit(null);
        }
        reset( initialForm );

    }

    const handleReset = () => {
      setDataToEdit(null);
      reset( initialForm );
    }

  return (
    <>
    <h3>{dataToEdit? "Editar":"Añadir"} ejercicio</h3>
    <form onSubmit={handleSubmit(submit)}>
            <div>
                <input className="input" type="text" name="ejercicio" placeholder='Nombre de ejercicio'  {...register('ejercicio', {required:{value:true, message:"Es obligatorio"}})} />
                {errors.ejercicio && <span>{errors.ejercicio.message}</span>}
            </div>
            <div>
            <select  {...register('zona', {required:{value:true, message:"Zona de musculo requerido"}})}>
                <option value="">--Musculo del ejercicio--</option>
                <option value="cuadriceps">CUADRICEPS</option>
                <option value="biceps">BICEPS</option>
                <option value="isquios">ISQUIOS</option>
                <option value="triceps">TRICEPS</option>
                <option value="pecho">PECHO</option>
                <option value="espalda">ESPALDA</option>
                <option value="abdomen">ABDOMEN</option>
                <option value="deltoides">DELTOIDES</option>
            </select>
            {errors.zona && <span>{errors.zona.message}</span>}
            </div>
            
            <div>
                <input className="input" type="text" name="imagen" placeholder='Url miniatura' {...register('imagen', {required:{value:true, message: 'Se requiere url miniatura'}})} />
                {errors.imagen && <span>{errors.imagen.message}</span>}
            </div>
            
            <div>
                <input className="input" type="text" name="video" placeholder='Url video' {...register('video', {required:{value:true, message: 'Se requiere url video'}})} />
                {errors.video && <span>{errors.video.message}</span>}
            </div>
            
            <button className="buttonBlue" type="submit">{dataToEdit? "Editar":"Registrar"} ejercicio</button>
            <button className="buttonBlue"  onClick={()=>handleReset()}>Limpiar</button>
           
        
        </form>
    </>
  )
}

export default CrudFormExercises;