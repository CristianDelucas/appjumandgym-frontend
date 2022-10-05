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

  console.log(routine)

  

  

  return (
    <div className='c-training'>
    <div className='wrapper'>
        <div className='accordion'>
          
        {routine.dias.map((item, i) => {
          return (
            <div className='item'>
                <div className='title' onClick={() => toggle(i)}>
                  <h1>Día {i+1}</h1>
                  <h2>{item.musculos.map((musculo,index)=>  {
                    return index >= (item.musculos.length-1) ? musculo + '' :musculo +' y '})}</h2>
                  <span>{selected === i ? <FaArrowAltCircleUp/>: <FaArrowAltCircleDown/>}</span>
                </div>

                <div className={selected === i ? 'accordion-content show' : 'accordion-content'}>
              {/* Entrenamientos asociados a ese día */}
              {item.ejercicios.map((ejercicios, indexExercises) => {
                return(
                  <CardsTraining ejercicios={ejercicios} indexExercises={indexExercises}/>
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