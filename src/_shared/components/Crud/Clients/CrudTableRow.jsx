import moment from 'moment/moment';
import React from 'react'
import { AiOutlineForm } from 'react-icons/ai';
import { FiTrash2 } from 'react-icons/fi';
import { Tr, Td } from 'react-super-responsive-table';
const CrudTableRow = ({el, setDataToEdit, deleteData}) => {


  

    const {_id,nombre,
            apellidos,
            email,
            movil,
            sexo,
            fin_plan,
            roles,
            estado} = el;

    

   
    const formatFin_plan = moment(fin_plan).format('DD-MM-YYYY');

  return (
    <Tr key={_id}>
                        <Td >{email}</Td>
                        <Td >{nombre} {apellidos}</Td>
                        <Td> {movil}</Td>
                        <Td> {sexo}</Td>
                        <Td> {formatFin_plan}</Td>
                        <Td> {roles.map((el,index) => (<>{el.name} </>) )}</Td>
                        <Td >{estado}</Td>
                        <Td>
                        <button className='button-update' onClick={() => setDataToEdit(el)}><AiOutlineForm/></button>
                            <button className='button-delete' onClick={()=>  deleteData(_id)}><FiTrash2/></button>
                        </Td>
    </Tr>
  )
}

export default CrudTableRow