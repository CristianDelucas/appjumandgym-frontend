import React from 'react'
import CrudTableRow from './CrudTableRow';

const CrudTable = ({data, setDataToEdit, deleteData}) => {

  return (
    <div>
        <h3>Tabla de datos</h3>
        <table >
            <thead>
                <tr>
                    <th>NOMBRE</th>
                    <th>ROL</th>
                    <th>ESTADO</th>
                    <th>ACCIONES</th>
                </tr>
            </thead>
            <tbody>
                
                    {data.length === 0 ? <tr><td colSpan={4}>Sin datos</td></tr>: data.map(el => (
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