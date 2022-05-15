import React, { useState } from 'react';
import { useModal } from '../../hooks/useModal';
import Modal from '../../_shared/components/Modals/Modal';
import ReactPlayer from 'react-player'

const Training = () => {


  const [selected, setSelected] = useState(null);
  const [isOpen,openModal,closeModal] = useModal(false);
  const [urlVideo,setUrlVideo] = useState('');
  
  const openVideo = (url) =>{
    setUrlVideo(url);
    openModal();
  }

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
                  <>
                <div className='card-training' style={{background:`linear-gradient(180deg, rgba(0, 0, 0, 0.697) 10%, grey 180%),url(`+ejercicios.imagen+`)`, backgroundRepeat:'no-repeat', backgroundPositionX:'center', backgroundPositionY:'10%',backgroundSize:'cover'}}>
                  
                  <div className='card-training-content'>
                    <div className='card-training-content--title'>{ejercicios.ejercicio}</div>
                    <div className='card-training-content--zone'>Musculo: {ejercicios.zona}</div>
                    <div className='card-training-content--reps'>Repeticiones: {ejercicios.repeticiones}</div>
                    <div className='card-training-content--descanso'>Descanso: {ejercicios.descanso} segs</div>
                  </div>

                  <div className='card-training-button'>
                    <button onClick={()=>openVideo(ejercicios.video)}>Video</button>
                  </div>

              </div>
              
              </>
              )})}
              </div>

              </div>
          )
        })}
              
        </div>
      </div>
        
    <Modal isOpen={isOpen} closeModal={closeModal}>
      {isOpen && 
      <ReactPlayer 
      config={{vimeo:{ playerOptions: {responsive:true , title:true} }}}
      controls={true}  
      playing={true} 
      width='100%' 
      height='100%' 
      url={urlVideo} 
      />}
    </Modal>
    </div>
  )
}

export default Training


const data = [{
  entrenamiento: 'Pecho y deltoides',
  ejercicios:[
  {
    ejercicio: 'Curl de biceps',
    zona: 'Biceps',
    repeticiones: '15/12/10/8',
    descanso: '45',
    imagen: 'https://t2.uc.ltmcdn.com/es/posts/9/6/2/ejercicios_para_biceps_y_triceps_50269_orig.jpg',
    video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'

  },
  {
    ejercicio: 'Extension de pierna',
    zona: 'Cuadriceps',
    repeticiones: '15/12/10/8',
    descanso: '45',
    imagen: 'https://www.entrenamientos.com/uploads/exercise/curl-femoral-sentado-en-maquina-1887.png',
    video: 'https://vimeo.com/169599296'
  },
  {
    ejercicio: 'Extension de pierna',
    zona: 'Cuadriceps',
    repeticiones: '15/12/10/8',
    descanso: '45',
    imagen: 'https://www.entrenamientos.com/uploads/exercise/curl-femoral-sentado-en-maquina-1887.png',
    video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    ejercicio: 'Extension de pierna',
    zona: 'Cuadriceps',
    repeticiones: '15/12/10/8',
    descanso: '45',
    imagen: 'https://www.entrenamientos.com/uploads/exercise/curl-femoral-sentado-en-maquina-1887.png',
    video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    ejercicio: 'Extension de pierna',
    zona: 'Cuadriceps',
    repeticiones: '15/12/10/8',
    descanso: '45',
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
    descanso: '45',
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
    descanso: '45',
    imagen: 'https://www.entrenamientos.com/uploads/exercise/curl-femoral-sentado-en-maquina-1887.png',
    video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  }]
},
{
  entrenamiento: 'Espalda y deltoides',
  ejercicios:[
  {
    ejercicio: 'Curl de biceps',
    zona: 'Biceps',
    repeticiones: '15/12/10/8',
    descanso: '45',
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
    descanso: '45',
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
    descanso: '45',
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
    descanso: '45',
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
    descanso: '45',
    imagen: 'https://t2.uc.ltmcdn.com/es/posts/9/6/2/ejercicios_para_biceps_y_triceps_50269_orig.jpg',
    video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'

  },
  {
    ejercicio: 'Extension de pierna',
    zona: 'Cuadriceps',
    repeticiones: '15/12/10/8',
    descanso: '45',
    imagen: 'https://www.entrenamientos.com/uploads/exercise/curl-femoral-sentado-en-maquina-1887.png',
    video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    ejercicio: 'Extension de pierna',
    zona: 'Cuadriceps',
    repeticiones: '15/12/10/8',
    descanso: '45',
    imagen: 'https://www.entrenamientos.com/uploads/exercise/curl-femoral-sentado-en-maquina-1887.png',
    video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  }]
}
]