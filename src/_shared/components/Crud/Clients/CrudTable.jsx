import React, { useContext } from 'react'
import { AdminContext } from '../../../../context/AdminContext';
import CrudTableRow from './CrudTableRow';

const CrudTable = ({ setDataToEdit, deleteData}) => {
    
    const {users} = useContext(AdminContext)

  return (
    <div>
        <h3>Tabla de datos</h3>
        <table >
            <thead>
                <tr>
                    <th>EMAIL</th>
                    <th>NOMBRE</th>
                    <th>APELLIDOS</th>
                    <th>MOVIL</th>
                    <th>SEXO</th>
                    <th>FECHA NACIMIENTO</th>
                    <th>ALTURA</th>
                    <th>PESO ACTUAL (Kg)</th>
                    <th>OBJETIVO DESEADO</th>
                    <th>ACTIVIDAD FISICA</th>
                    <th>FIN PLAN</th>
                    <th>ROLES</th>
                    <th>ESTADO</th>
                    <th>ACCIONES</th>
                </tr>
            </thead>
            <tbody>
                
                    {users.length === 0 ? <tr><td colSpan={14}>Sin datos</td></tr>: users.map(el => (
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