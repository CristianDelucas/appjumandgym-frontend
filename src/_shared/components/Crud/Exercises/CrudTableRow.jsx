import React from 'react'
import { AiFillFileImage, AiOutlineForm } from 'react-icons/ai';
import { FiTrash2 } from 'react-icons/fi';
import { Tr, Td } from 'react-super-responsive-table';
const CrudTableRow = ({el, setDataToEdit, deleteData,updateImage}) => {

    const {_id,nombre, musculo,indicaciones, url_miniatura, url_video} = el;


  return (
    <Tr key={_id}>
                        <Td >{nombre}</Td>
                        <Td >{musculo}</Td>
                        <Td>{indicaciones}</Td>
                        <Td ><img src={url_miniatura} alt={nombre}/></Td>
                        <Td >{url_video}</Td>
                        <Td>
                            
                            <button className='button-update' onClick={() => setDataToEdit(el)}><AiOutlineForm/></button>
                            <button className='button-delete' onClick={()=>  deleteData(_id)}><FiTrash2/></button>
                            <button className='button-update-image' onClick={() => updateImage(el)}><AiFillFileImage/></button>
                        </Td>
    </Tr>
  )
}

export default CrudTableRow