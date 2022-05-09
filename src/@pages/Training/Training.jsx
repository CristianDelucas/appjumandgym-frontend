import React, { useState } from 'react'

const Training = () => {


  const [selected, setSelected] = useState(null);

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
          
        {data.map((item, i) => {
          return (
            <div className='item'>
                <div className='title' onClick={() => toggle(i)}>
                  <h1>Día {i+1}</h1>
                  <h2>{item.entrenamiento}</h2>
                  <span>{selected === i ? '-': '+'}</span>
                </div>

                <div className={selected === i ? 'accordion-content show' : 'accordion-content'}>
              {/* Entrenamientos asociados a ese día */}
              {item.ejercicios.map((ejercicios, x) => {
                return(
                <div className='card-training' style={{background:`linear-gradient(180deg, rgba(0, 0, 0, 0.697) 10%, grey 180%),url(`+ejercicios.imagen+`)`, backgroundRepeat:'no-repeat', backgroundPositionX:'center', backgroundPositionY:'10%',backgroundSize:'cover'}}>
                  <div className='card-training--title'>{ejercicios.ejercicio}</div>
                  <div className='card-training--zone'>Musculo: {ejercicios.zona}</div>
                  <div className='card-training--reps'>Repeticiones: {ejercicios.repeticiones}</div>
              </div>
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


const data = [{
  entrenamiento: 'Pecho y hombros',
  ejercicios:[
  {
    ejercicio: 'Curl de biceps',
    zona: 'Biceps',
    repeticiones: '15/12/10/8',
    imagen: 'https://t2.uc.ltmcdn.com/es/posts/9/6/2/ejercicios_para_biceps_y_triceps_50269_orig.jpg',
    video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'

  },
  {
    ejercicio: 'Extension de pierna',
    zona: 'Cuadriceps',
    repeticiones: '15/12/10/8',
    imagen: 'https://www.entrenamientos.com/uploads/exercise/curl-femoral-sentado-en-maquina-1887.png',
    video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    ejercicio: 'Extension de pierna',
    zona: 'Cuadriceps',
    repeticiones: '15/12/10/8',
    imagen: 'https://www.entrenamientos.com/uploads/exercise/curl-femoral-sentado-en-maquina-1887.png',
    video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    ejercicio: 'Extension de pierna',
    zona: 'Cuadriceps',
    repeticiones: '15/12/10/8',
    imagen: 'https://www.entrenamientos.com/uploads/exercise/curl-femoral-sentado-en-maquina-1887.png',
    video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    ejercicio: 'Extension de pierna',
    zona: 'Cuadriceps',
    repeticiones: '15/12/10/8',
    imagen: 'https://www.entrenamientos.com/uploads/exercise/curl-femoral-sentado-en-maquina-1887.png',
    video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  }]
},
{
  entrenamiento: 'Biceps y triceps',
  ejercicios:[
  {
    ejercicio: 'Curl de biceps',
    zona: 'Biceps',
    repeticiones: '15/12/10/8',
    imagen: 'https://t2.uc.ltmcdn.com/es/posts/9/6/2/ejercicios_para_biceps_y_triceps_50269_orig.jpg',
    video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'

  },
  {
    ejercicio: 'Extension de pierna',
    zona: 'Cuadriceps',
    repeticiones: '15/12/10/8',
    imagen: 'https://www.entrenamientos.com/uploads/exercise/curl-femoral-sentado-en-maquina-1887.png',
    video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    ejercicio: 'Extension de pierna',
    zona: 'Cuadriceps',
    repeticiones: '15/12/10/8',
    imagen: 'https://www.entrenamientos.com/uploads/exercise/curl-femoral-sentado-en-maquina-1887.png',
    video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  }]
},
{
  entrenamiento: 'Espalda y hombros',
  ejercicios:[
  {
    ejercicio: 'Curl de biceps',
    zona: 'Biceps',
    repeticiones: '15/12/10/8',
    imagen: 'https://t2.uc.ltmcdn.com/es/posts/9/6/2/ejercicios_para_biceps_y_triceps_50269_orig.jpg',
    video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'

  },
  {
    ejercicio: 'Extension de pierna',
    zona: 'Cuadriceps',
    repeticiones: '15/12/10/8',
    imagen: 'https://www.entrenamientos.com/uploads/exercise/curl-femoral-sentado-en-maquina-1887.png',
    video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    ejercicio: 'Extension de pierna',
    zona: 'Cuadriceps',
    repeticiones: '15/12/10/8',
    imagen: 'https://www.entrenamientos.com/uploads/exercise/curl-femoral-sentado-en-maquina-1887.png',
    video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  }]
},
{
  entrenamiento: 'Biceps y triceps',
  ejercicios:[
  {
    ejercicio: 'Curl de biceps',
    zona: 'Biceps',
    repeticiones: '15/12/10/8',
    imagen: 'https://t2.uc.ltmcdn.com/es/posts/9/6/2/ejercicios_para_biceps_y_triceps_50269_orig.jpg',
    video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'

  },
  {
    ejercicio: 'Extension de pierna',
    zona: 'Cuadriceps',
    repeticiones: '15/12/10/8',
    imagen: 'https://www.entrenamientos.com/uploads/exercise/curl-femoral-sentado-en-maquina-1887.png',
    video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    ejercicio: 'Extension de pierna',
    zona: 'Cuadriceps',
    repeticiones: '15/12/10/8',
    imagen: 'https://www.entrenamientos.com/uploads/exercise/curl-femoral-sentado-en-maquina-1887.png',
    video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  }]
},
{
  entrenamiento: 'Pierna',
  ejercicios:[
  {
    ejercicio: 'Curl de biceps',
    zona: 'Biceps',
    repeticiones: '15/12/10/8',
    imagen: 'https://t2.uc.ltmcdn.com/es/posts/9/6/2/ejercicios_para_biceps_y_triceps_50269_orig.jpg',
    video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'

  },
  {
    ejercicio: 'Extension de pierna',
    zona: 'Cuadriceps',
    repeticiones: '15/12/10/8',
    imagen: 'https://www.entrenamientos.com/uploads/exercise/curl-femoral-sentado-en-maquina-1887.png',
    video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    ejercicio: 'Extension de pierna',
    zona: 'Cuadriceps',
    repeticiones: '15/12/10/8',
    imagen: 'https://www.entrenamientos.com/uploads/exercise/curl-femoral-sentado-en-maquina-1887.png',
    video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  }]
}
]