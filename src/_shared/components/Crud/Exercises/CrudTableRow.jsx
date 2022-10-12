import React from 'react'
import { AiOutlineForm } from 'react-icons/ai';
import { FiTrash2 } from 'react-icons/fi';
import { Tr, Td } from 'react-super-responsive-table';
const CrudTableRow = ({el, setDataToEdit, deleteData}) => {

    const {_id,nombre, musculo, url_miniatura, url_video} = el;


  return (
    <Tr key={_id}>
                        <Td >{nombre}</Td>
                        <Td >{musculo}</Td>
                        <Td >{url_miniatura}</Td>
                        <Td >{url_video}</Td>
                        <Td>
                            <button className='button-update' onClick={() => setDataToEdit(el)}><AiOutlineForm/></button>
                            <button className='button-delete' onClick={()=>  deleteData(_id)}><FiTrash2/></button>
                        </Td>
    </Tr>
  )
}

export default CrudTableRow