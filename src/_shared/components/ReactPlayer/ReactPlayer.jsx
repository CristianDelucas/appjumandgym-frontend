import React from 'react'
import "./ReactPlayer.scss";

const ReactPlayer = ({accion}) => {

    const cerrar = () => {
        console.log(accion);
        accion.setOpenVideo(false);
      }

  return (
    <div className='c-player'>ReactPlayer
    <button onClick={()=>cerrar}>Close Modal</button>
    </div>
  )
}

export default ReactPlayer