import React, { useContext, useEffect, useState } from 'react'
import CrudFormExercises from './CrudFormExercises';
import CrudTable from './CrudTable';
import "../Crud.scss";
import { AdminContext } from '../../../../context/AdminContext';
import useAdmin from '../../../../hooks/admin';

 


const CrudExercises = () => {


    const {createExercise, deleteExercise,updateExercise } = useAdmin();
    const {exercises,setExercises} = useContext(AdminContext);

    const [dataToEdit, setDataToEdit] = useState(null);


    const addData = (data) => {
        createExercise(data,exercises);
    }
    
    const updateData = (data) => {
      updateExercise(data,exercises);

    }
    const deleteData = (_id) => {
        let isDelete = window.confirm(`¿Estás seguro de eliminar el ejercicio ´${_id}´`);
        if(isDelete){
            deleteExercise(_id);
            let newData = exercises.filter(el => el._id !== _id);
            setExercises(newData);
        }
        return;
        
        

    }

  return (
    <div >
        <CrudFormExercises  
        addData={addData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
        />
        <CrudTable 
        deleteData={deleteData}
        setDataToEdit={setDataToEdit}
        />
    </div>
  )
}

export default CrudExercises