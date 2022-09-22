import React, { useContext, useState } from 'react'
import CrudFormClients from './CrudFormClients';
import CrudTable from './CrudTable';
import "../Crud.scss";
import useAdmin from '../../../../hooks/admin';
import { AdminContext } from '../../../../context/AdminContext';



const CrudClients = () => {

    const {createUser,updateExistUser,deleteUser } = useAdmin();
    const {users,setUsers} = useContext(AdminContext);
  
    const [dataToEdit, setDataToEdit] = useState(null);


    const addData = (data) => {
        createUser(data,users);
    }
    const updateData = (data) => {
        updateExistUser(data,users);
    }
    const deleteData = (_id) => {
        let isDelete = window.confirm(`¿Estás seguro de eliminar el ejercicio ´${_id}´`);
        if(isDelete){
            deleteUser(_id);
            let newData = users.filter(el => el._id !== _id);
            setUsers(newData);
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