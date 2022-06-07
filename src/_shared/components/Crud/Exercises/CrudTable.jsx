import React from 'react'
import CrudTableRow from './CrudTableRow';

const CrudTable = ({data, setDataToEdit, deleteData}) => {

  return (
    <div>
        <h3>Tabla de datos</h3>
        <table >
            <thead>
                <tr>
                    <th>Nombre ejercicio</th>
                    <th>Zona</th>
                    <th>Imagen</th>
                    <th>Video</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                
                    {data.length === 0 ? <tr><td colSpan={5}>Sin datos</td></tr>: data.map(el => (
                        <CrudTableRow 
                        el={el} 
                        key={el.id} 
                        setDataToEdit={setDataToEdit} 
                        deleteData={deleteData}/>
                    ))}
                    
                
            </tbody>
        </table>
    </div>
  )
}

export default CrudTable