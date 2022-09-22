import moment from 'moment/moment';
import React from 'react'

const CrudTableRow = ({el, setDataToEdit, deleteData}) => {


  

    const {_id,nombre,
            apellidos,
            email,
            movil,
            sexo,
            fecha_nacimiento,
            altura,
            peso,
            objetivo,
            actividad,
            fin_plan,
            roles,
            estado} = el;

    

    const formatFecha_nacimiento = moment(fecha_nacimiento).format('DD-MM-YYYY');
    const formatFin_plan = moment(fin_plan).format('DD-MM-YYYY');

  return (
    <tr key={_id}>
                        <td >{email}</td>
                        <td >{nombre}</td>
                        <td >{apellidos}</td>
                        <td> {movil}</td>
                        <td> {sexo}</td>
                        <td> {formatFecha_nacimiento}</td>
                        <td> {altura}</td>
                        <td> {peso}</td>
                        <td> {objetivo}</td>
                        <td> {actividad}</td>
                        <td> {formatFin_plan}</td>
                        <td> {roles.map((el,index) => (<>{el.name} </>) )}</td>
                        <td >{estado}</td>
                        <td>
                            <button onClick={() => setDataToEdit(el)}>Editar</button>
                            <button onClick={()=>  deleteData(_id)}>Eliminar</button>
                        </td>
    </tr>
  )
}

export default CrudTableRow