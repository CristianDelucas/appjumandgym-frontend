import React, { useState } from "react";
import CrudFormExercises from "./CrudFormExercises";
import CrudTable from "./CrudTable";
import "../Crud.scss";
import useAdmin from "../../../../hooks/admin";

const CrudExercises = () => {
  const { createExercise, deleteExercise, updateExercise, updateImageExercise } = useAdmin();

  const [dataToEdit, setDataToEdit] = useState(null);

  const addData = (data) => {
    createExercise(data);
  };

  const updateData = (data) => {
    updateExercise(data);
  };

  const updateImage = (data) =>{
    updateImageExercise(data);
  }

  const deleteData = (_id) => {
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el ejercicio ´${_id}´`
    );

    if (isDelete) {
      deleteExercise(_id);
    }
    return;
  };

  return (
    <div >
      <CrudFormExercises
        addData={addData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      <CrudTable  deleteData={deleteData} setDataToEdit={setDataToEdit} updateImage={updateImage} />
    </div>
  );
};

export default CrudExercises;
