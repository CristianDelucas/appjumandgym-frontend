import React, { useContext } from 'react'
import { AdminContext } from '../../../../context/AdminContext';
import CrudTableRow from './CrudTableRow';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';

const CrudTable = ({ setDataToEdit, deleteData}) => {

    const {exercises} = useContext(AdminContext)

  return (
    <div>
        <h3>Tabla de datos</h3>
        <Table >
            <Thead>
                <Tr>
                    <Th>Nombre ejercicio</Th>
                    <Th>Músculo</Th>
                    <Th>Indicaciones</Th>
                    <Th>Imagen</Th>
                    <Th>Video</Th>
                    <Th>Acciones</Th>
                </Tr>
            </Thead>
            <Tbody>
                
                    {exercises.length === 0 ? <Th><Td colSpan={6}>Sin datos</Td></Th>: exercises.map(el => (
                        <CrudTableRow 
                        el={el} 
                        key={el._id} 
                        setDataToEdit={setDataToEdit} 
                        deleteData={deleteData}/>
                    ))}
                    
                
            </Tbody>
        </Table>
    </div>
  )
}

export default CrudTable