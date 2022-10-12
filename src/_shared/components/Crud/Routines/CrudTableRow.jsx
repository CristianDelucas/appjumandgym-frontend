import React from 'react'
import { AiOutlineForm } from 'react-icons/ai';
import { FiTrash2 } from "react-icons/fi";
import { Td, Tr } from 'react-super-responsive-table';

const CrudTableRow = ({el, editValues, deleteData}) => {

    const {idRutina,nombreRutina, nDias} = el;
  

  return (
    <Tr className='row' key={idRutina}>
                        <Td  className='col-12 col-sm' >{idRutina}</Td>
                        <Td className='col-12 col-sm'>{nombreRutina}</Td>
                        <Td className='col-12 col-sm'>{nDias}</Td>
                        <Td className='col-12 col-sm'>
                        <button className='button-update' onClick={() => editValues(el)}><AiOutlineForm/></button>
                            <button className='button-delete' onClick={()=>  deleteData(idRutina)}><FiTrash2/></button>
                        </Td>
    </Tr>
  )
}

export default CrudTableRow