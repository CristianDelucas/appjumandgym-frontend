import React, { useContext } from 'react'
import { AdminContext } from '../../../../context/AdminContext';
import CrudTableRow from './CrudTableRow';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';


const CrudTable = ({ setDataToEdit, deleteData}) => {
    
    const {users} = useContext(AdminContext)

  return (
    <div>
        <h3>Tabla de datos</h3>
        <Table >
            <Thead>
                <Tr>
                    <Th>EMAIL</Th>
                    <Th>NOMBRE Y APELLIDOS</Th>
                    <Th>MOVIL</Th>
                    <Th>SEXO</Th>
                    <Th>FIN PLAN</Th>
                    <Th>ROLES</Th>
                    <Th>ESTADO</Th>
                    <Th>ACCIONES</Th>
                </Tr>
            </Thead>
            <Tbody>
                
                    {users.length === 0 ? <Th><Td colSpan={14}>Sin datos</Td></Th>: users.map(el => (
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