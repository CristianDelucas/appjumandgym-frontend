import React, { useContext } from 'react'
import { AdminContext } from '../../../../context/AdminContext';
import CrudTableRow from './CrudTableRow';

const CrudTable = ({ setDataToEdit, deleteData}) => {

    const {exercises} = useContext(AdminContext)

  return (
    <div>
        <h3>Tabla de datos</h3>
        <table >
            <thead>
                <tr>
                    <th>Nombre ejercicio</th>
                    <th>Músculo</th>
                    <th>Imagen</th>
                    <th>Video</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                
                    {exercises.length === 0 ? <tr><td colSpan={5}>Sin datos</td></tr>: exercises.map(el => (
                        <CrudTableRow 
                        el={el} 
                        key={el._id} 
                        setDataToEdit={setDataToEdit} 
                        deleteData={deleteData}/>
                    ))}
                    
                
            </tbody>
        </table>
    </div>
  )
}

export default CrudTable