import React from 'react'
import { AiOutlineForm } from 'react-icons/ai';
import { FiTrash2 } from "react-icons/fi";
import { Td, Tr } from 'react-super-responsive-table';

const CrudTableRow = ({el, editValues, deleteData}) => {

    const {_id,nombre_rutina, numero_dias} = el;
  

  return (
    <Tr key={_id}>
                        <Td >{_id}</Td>
                        <Td >{nombre_rutina}</Td>
                        <Td>{el.id_user.email}</Td>
                        <Td >{numero_dias}</Td>
                        <Td >
                        <button className='button-update' onClick={() => editValues(el)}><AiOutlineForm/></button>
                            <button className='button-delete' onClick={()=>  deleteData(_id)}><FiTrash2/></button>
                        </Td>
    </Tr>
  )
}

export default CrudTableRow