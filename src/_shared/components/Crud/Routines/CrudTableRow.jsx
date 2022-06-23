import React from 'react'

const CrudTableRow = ({el, editValues, deleteData}) => {

    const {idRutina,nombreRutina, nDias} = el;
  

  return (
    <tr className='row' key={idRutina}>
                        <td  className='col-12 col-sm' >{idRutina}</td>
                        <td className='col-12 col-sm'>{nombreRutina}</td>
                        <td className='col-12 col-sm'>{nDias}</td>
                        <td className='col-12 col-sm'>
                            <button onClick={() => editValues(el)}>Editar</button>
                            <button onClick={()=>  deleteData(idRutina)}>Eliminar</button>
                        </td>
    </tr>
  )
}

export default CrudTableRow