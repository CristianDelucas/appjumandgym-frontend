import React from 'react'
import "./Modal.scss";

const Modal = ({children, isOpen, closeModal}) => {

    //detenemos el evento del componente padre sobre el que se ejecuta el evento
    const handleModalContainerClick = (e) => e.stopPropagation();

  return (
    <article className={isOpen?'modal is-open':'modal'} onClick={closeModal}>
        <div className='modal-container' onClick={handleModalContainerClick}>
        <div onClick={closeModal} className='modal-close'>{'<'} VOLVER</div>
            {children}
        </div>
    </article>
  )
}

export default Modal