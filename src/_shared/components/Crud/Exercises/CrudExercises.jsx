import React, { useState } from "react";
import CrudFormExercises from "./CrudFormExercises";
import CrudTable from "./CrudTable";
import "../Crud.scss";
import useAdmin from "../../../../hooks/admin";

const CrudExercises = () => {
  const { createExercise, deleteExercise, updateExercise } = useAdmin();

  const [dataToEdit, setDataToEdit] = useState(null);

  const addData = (data) => {
    createExercise(data);
  };

  const updateData = (data) => {
    updateExercise(data);
  };
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
    <div>
      <CrudFormExercises
        addData={addData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      <CrudTable deleteData={deleteData} setDataToEdit={setDataToEdit} />
    </div>
  );
};

export default CrudExercises;
