import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { AiOutlineMail } from 'react-icons/ai';

 

  const initialForm = {
    nombre: '',
    musculo: '',
    url_miniatura: '',
    url_video: '',
    _id:null
  }


const CrudFormExercises = ({addData, updateData, dataToEdit, setDataToEdit}) => {




    const {register, handleSubmit, reset, formState: {errors}} = useForm({
      nombre: '',
      musculo: '',
      url_miniatura: '',
      url_video: '',
      _id:null
      
    });

    useEffect(() => {
      if(dataToEdit){
        reset(initialForm);
        reset(dataToEdit);
      }
    }, [dataToEdit])



    const submit = (data,e) => {
        e.preventDefault();
        if(!data._id){
          addData(data);
        }else{
          console.log('intentando editar');
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
    <form className='container' onSubmit={handleSubmit(submit)}>
      <div className='row input-boxes '>
            <div className='col-12 col-lg-4 col-xl-3  input-box'>
            <i>
              <AiOutlineMail />
            </i>
            <span className="input-box__title">Nombre del ejercicio</span>
                <input className="input" type="text" label="email" name="nombre" placeholder='Nombre de ejercicio'  {...register('nombre', {required:{value:true, message:"Es obligatorio"}})} />
                {errors.nombre && <span className="error-message">{errors.nombre.message}</span>}
            </div>
            <div className='col-12 col-lg-4 col-xl-3  input-box'>
            <i>
              <AiOutlineMail />
            </i>
            <span className="input-box__title">Músculo</span>
            <select  {...register('musculo', {required:{value:true, message:"Zona de musculo requerido"}})}>
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
            {errors.musculo && <span className="error-message">{errors.musculo.message}</span>}
            </div>
            
            <div className='col-12 col-lg-4 col-xl-3  input-box'>
            <i>
              <AiOutlineMail />
            </i>
            <span className="input-box__title">Url imagen</span>
                <input className="input" type="text" name="imagen" placeholder='Url miniatura' {...register('url_miniatura', {required:{value:true, message: 'Se requiere url miniatura'}})} />
                {errors.url_miniatura && <span className="error-message">{errors.url_miniatura.message}</span>}
            </div>
            
            <div className='col-12 col-lg-4 col-xl-3  input-box'>
            <i>
              <AiOutlineMail />
            </i>
            <span className="input-box__title">Url video</span>
                <input className="input" type="text" name="url_video" placeholder='Url video' {...register('url_video', {required:{value:true, message: 'Se requiere url video'}})} />
                {errors.url_video && <span className="error-message">{errors.url_video.message}</span>}
            </div>
            </div>
            <div className="input-buttons">
            <button className=" col-6" type="submit">{dataToEdit? "Editar":"Registrar"} ejercicio</button>
            <button className=" col-6"  onClick={()=>handleReset()}>Limpiar</button>

            </div>
            
           
        
        </form>
    </>
  )
}

export default CrudFormExercises;