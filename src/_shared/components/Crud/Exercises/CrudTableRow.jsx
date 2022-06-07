import React from 'react'

const CrudTableRow = ({el, setDataToEdit, deleteData}) => {

    const {id,ejercicio, zona, imagen, video} = el;


  return (
    <tr key={id}>
                        <td >{ejercicio}</td>
                        <td >{zona}</td>
                        <td >{imagen}</td>
                        <td >{video}</td>
                        <td>
                            <button onClick={() => setDataToEdit(el)}>Editar</button>
                            <button onClick={()=>  deleteData(id)}>Eliminar</button>
                        </td>
    </tr>
  )
}

export default CrudTableRow