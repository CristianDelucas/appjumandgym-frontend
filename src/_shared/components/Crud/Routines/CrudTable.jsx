import React from 'react'
import { Table, Tbody, Td, Th, Thead, Tr } from 'react-super-responsive-table';
import CrudTableRow from './CrudTableRow';

const CrudTable = ({data, editValues, deleteData}) => {

  return (
    <div>
        <h3>Tabla de datos</h3>
        <Table >
            <Thead>
                <Tr className='row'>
                    <Th className='col-12 col-sm'>Id rutina</Th>
                    <Th className='col-12 col-sm'>Nombre Rutina</Th>
                    <Th className='col-12 col-sm'>Días</Th>
                    <Th className='col-12 col-sm'>Acciones</Th>
                </Tr>
            </Thead>
            <Tbody>
                
                    {data.length === 0 ? <Tr><Td colSpan={4}>Sin datos</Td></Tr>: data.map(el => (
                        <CrudTableRow 
                        el={el} 
                        key={el.idRutina}
                        editValues={editValues} 
                        deleteData={deleteData}/>
                    ))}
                    
                
            </Tbody>
        </Table>
    </div>
  )
}

export default CrudTable