import React, { useState } from 'react'
import CrudFormClients from './CrudFormClients';
import CrudTable from './CrudTable';
import "../Crud.scss";

 

  const initialDb = [
  ];


const CrudClients = () => {

    const [db, setDb] = useState(initialDb);
    const [dataToEdit, setDataToEdit] = useState(null);



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
        let isDelete = window.confirm(`¿Estás seguro de eliminar el ejercicio ´${id}´`);
        if(isDelete){
            let newData = db.filter(el => el.id !== id);
            setDb(newData);
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
        data={db} 
        deleteData={deleteData}
        setDataToEdit={setDataToEdit}
        />
    </>
  )
}

export default CrudClients