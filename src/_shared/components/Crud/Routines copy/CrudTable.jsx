import React from 'react'
import CrudTableRow from './CrudTableRow';

const CrudTable = ({data, editValues, deleteData}) => {

  return (
    <div>
        <h3>Tabla de datos</h3>
        <table >
            <thead>
                <tr className='row'>
                    <th className='col-12 col-sm'>Id rutina</th>
                    <th className='col-12 col-sm'>Nombre Rutina</th>
                    <th className='col-12 col-sm'>Días</th>
                    <th className='col-12 col-sm'>Acciones</th>
                </tr>
            </thead>
            <tbody>
                
                    {data.length === 0 ? <tr><td colSpan={5}>Sin datos</td></tr>: data.map(el => (
                        <CrudTableRow 
                        el={el} 
                        key={el.idRutina}
                        editValues={editValues} 
                        deleteData={deleteData}/>
                    ))}
                    
                
            </tbody>
        </table>
    </div>
  )
}

export default CrudTable