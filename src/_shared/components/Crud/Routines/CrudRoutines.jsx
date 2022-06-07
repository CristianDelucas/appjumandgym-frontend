import React, { useEffect, useState } from 'react'
import CrudFormRoutines from './CrudFormRoutines';
import CrudTable from './CrudTable';
import "../Crud.scss";
import { useForm } from 'react-hook-form';

 

  const initialDb = [
  ];


const CrudRoutines = () => {

    const [db, setDb] = useState(initialDb);
    const [dataToEdit, setDataToEdit] = useState(null);

    //variable de estado para la rutina que se esta editando
    const [rutina, setRutina] = useState({});

    const addData = (data) => {
        data.id = db.length + 1;
        setDb([...db, data]);

    }
    const updateData = (data) => {
        console.log(data);
        let newData = db.map(el => el.id === data.id ? data : el);
        setDb(newData);


    }
    const deleteData = (id) => {
        let isDelete = window.confirm(`¿Estás seguro de eliminar la rutina ´${id}´`);
        if(isDelete){
            let newData = db.filter(el => el.id !== id);
            setDb(newData);
        }
        return;
        
        

    }


    const {register, handleSubmit, watch, reset, formState: {errors}} = useForm({});


    const [diasRutina, setDiasRutina] = useState([]);

    const [selectFields, setSelectFields] = useState([]);

    

    useEffect(() => {
      
      
      const aux = [];
      const auxSelect = [];
      const auxRutina = [];

      for(let i = 1; i <= watch('diasRutina'); i++){
        aux.push(i);
        auxSelect.push({nameObject:`dia${i}`});
        
        //se crean las posiones de los dias en la rutina
        auxRutina.push({[`dia`]:[]});
      }
      setRutina(auxRutina);
      setSelectFields(auxSelect);
      setDiasRutina(aux);
      
      
      
    }, [watch('diasRutina')]);
  
    const submit = (data) => {

      console.log(errors);
      for (const property in data) {
        
        console.log(`${property}: ${data[property]}`);
      }
      const aux = data
      console.log(aux);
    }

    

  return (
    <div >
    <form onSubmit={handleSubmit(submit)}>
      <div>
      <label>Dias de rutina</label>
      <select  {...register('diasRutina', {required:{value:true, message:"Días de rutina requerido"}})}>
                <option value="">--SESIONES A LA SEMANA--</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
            </select>
      {errors.diasRutina && <p className="error">{errors.diasRutina.message}</p>}
      </div>
      
      { diasRutina === null ? "":  diasRutina.map((el,index) => (
        
        <>
        
        <div className='card' key={index}>
            <div className='card--title'><h2>Dia {index+1} de entrenamiento</h2></div>
            
            <div className='card--content'>
            
            <CrudFormRoutines

            nrutina={index+1}

            selectFields={selectFields}
            setSelectFields={setSelectFields}
            setRutina={setRutina}
            rutina={rutina}

            register={register}
            errors={errors}
            watch={watch}

            addData={addData}
            updateData={updateData}
            dataToEdit={dataToEdit}
            setDataToEdit={setDataToEdit}
            />
            </div>
        </div>
        </>)) }

        <button className="buttonBlue" type="submit">Crear rutina</button>
            <button className="buttonBlue" >Limpiar</button>
        </form>


        <CrudTable 
        data={db} 
        deleteData={deleteData}
        setDataToEdit={setDataToEdit}
        />
    </div>
  )
}


export default CrudRoutines;