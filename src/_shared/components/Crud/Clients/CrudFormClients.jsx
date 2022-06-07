import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';

 

  const initialForm = {
    nombre: '',
    rol: '',
    estado: '',
    id:null
  }


const CrudFormClients = ({addData, updateData, dataToEdit, setDataToEdit}) => {




    const {register, handleSubmit, watch, reset, formState: {errors}} = useForm({
      nombre: '',
      rol: '',
      estado: '',
      id:null
      
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
    <h3>{dataToEdit? "Editar":"Añadir"} cliente</h3>
    <form onSubmit={handleSubmit(submit)}>
            <div>
                <input className="input" type="text" name="nombre" placeholder='Nombre de cliente'  {...register('nombre', {required:{value:true, message:"Es obligatorio"}})} />
                {errors.nombre && <span>{errors.nombre.message}</span>}
            </div>
            <div>
            <select  {...register('rol', {required:{value:true, message:"Rol requerido"}})}>
                <option value="">--Rol cliente--</option>
                <option value="user">USUARIO</option>
                <option value="admin">ADMINISTRADOR</option>
            </select>
            {errors.rol && <span>{errors.rol.message}</span>}
            </div>
            
            <div>
            <select  {...register('estado', {required:{value:true, message:"Estado requerido"}})}>
                <option value="">--Estado cliente--</option>
                <option value="inactivo">INACTIVO</option>
                <option value="activo">ACTIVO</option>
            </select>
            {errors.estado && <span>{errors.estado.message}</span>}
            </div>
            
            
            <button className="buttonBlue" type="submit">{dataToEdit? "Editar":"Registrar"} cliente</button>
            <button className="buttonBlue"  onClick={()=>handleReset()}>Limpiar</button>
           
        
        </form>
    </>
  )
}

export default CrudFormClients;