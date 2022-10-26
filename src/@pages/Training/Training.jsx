import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/auth';
import CardsTraining from './components/CardsTraining';
import { FaArrowAltCircleUp,FaArrowAltCircleDown } from "react-icons/fa";

const Training = () => {


  const [selected, setSelected] = useState(null);
  const {routine} = useContext(AuthContext);
  
  

  const toggle = (i) => {
    if(selected === i){
      return setSelected(null);
    }
    setSelected(i);
  }


  

  return (
    <div className='c-training'>
    <div className='wrapper'>
        <div className='accordion'>
        {routine.length ===0?  
        <div className='card'>
        <div className='card--title'>SIN RUTINA ASIGNADA</div></div>:routine.dias.map((item, i) => {
          return (
            <div key={`${routine._id}${i}`} className='item'>
                <div className='title' onClick={() => toggle(i)}>
                  <h1>Día {i+1}</h1>
                  <h2>{item.musculos.map((musculo,index)=>  {
                    return index >= (item.musculos.length-1) ? musculo + '' :musculo +' y '})}</h2>
                  <span>{selected === i ? <FaArrowAltCircleUp/>: <FaArrowAltCircleDown/>}</span>
                </div>

                <div className={selected === i ? 'accordion-content show' : 'accordion-content'}>
              {/* Entrenamientos asociados a ese día */}
              {item.ejercicios.map((ejercicios, index) => {
                return(
                  <CardsTraining key={`${index}`} ejercicios={ejercicios} indexExercises={index}/>
              )})}
              </div>

              </div>
          )
        })}
              
        </div>
      </div>
    </div>
  )
}

export default Training