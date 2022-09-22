import React from 'react'

const CrudTableRow = ({el, setDataToEdit, deleteData}) => {

    const {_id,nombre, musculo, url_miniatura, url_video} = el;


  return (
    <tr key={_id}>
                        <td >{nombre}</td>
                        <td >{musculo}</td>
                        <td >{url_miniatura}</td>
                        <td >{url_video}</td>
                        <td>
                            <button onClick={() => setDataToEdit(el)}>Editar</button>
                            <button onClick={()=>  deleteData(_id)}>Eliminar</button>
                        </td>
    </tr>
  )
}

export default CrudTableRow