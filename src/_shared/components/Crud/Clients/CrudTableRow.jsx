import React from 'react'

const CrudTableRow = ({el, setDataToEdit, deleteData}) => {

    const {id,nombre, rol, estado} = el;


  return (
    <tr key={id}>
                        <td >{nombre}</td>
                        <td >{rol}</td>
                        <td >{estado}</td>
                        <td>
                            <button onClick={() => setDataToEdit(el)}>Editar</button>
                            <button onClick={()=>  deleteData(id)}>Eliminar</button>
                        </td>
    </tr>
  )
}

export default CrudTableRow