import React, { useState } from 'react'
import CrudFormClients from './CrudFormClients';
import CrudTable from './CrudTable';
import "../Crud.scss";
import useAdmin from '../../../../hooks/admin';



const CrudClients = () => {

    const {createUser,updateExistUser,deleteUser } = useAdmin();
  
    const [dataToEdit, setDataToEdit] = useState(null);


    const addData = (data) => {
        createUser(data);
    }
    const updateData = (data) => {
        updateExistUser(data);
    }
    const deleteData = (_id) => {
        let isDelete = window.confirm(`¿Estás seguro de eliminar el ejercicio ´${_id}´`);
        if(isDelete){
            deleteUser(_id);
        }
        return;
        
        

    }

  return (
    <>
        <CrudFormClients 
        addData={addData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
        />
        <CrudTable 
        deleteData={deleteData}
        setDataToEdit={setDataToEdit}
        />
    </>
  )
}

export default CrudClients