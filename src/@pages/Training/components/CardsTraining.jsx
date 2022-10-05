import { useState } from "react";
import ReactPlayer from "react-player";
import { useModal } from "../../../hooks/useModal";
import Modal from "../../../_shared/components/Modals/Modal";
import { AiOutlinePlayCircle } from "react-icons/ai";
export default function CardsTraining({ ejercicios ,indexExercises}) {
  const [isOpen, openModal, closeModal] = useModal(false);
  const [urlVideo, setUrlVideo] = useState("");

  const openVideo = (url) => {
    setUrlVideo(url);
    openModal();
  };

  return (
    <>
      {ejercicios.id_exercise.length>1  ? (
        ejercicios.id_exercise.map((ejercicio,index)=>{
          return(
          <div
          className="card-training isBiserie"
          style={{
            background:
              `linear-gradient(180deg, rgba(0, 0, 0, 0.697) 10%, grey 180%),url(` +
              ejercicio.url_miniatura +
              `)`,
            backgroundRepeat: "no-repeat",
            backgroundPositionX: "center",
            backgroundPositionY: "10%",
            backgroundSize: "cover",
          }}
        >
        <div className="card-training--number"><label>{indexExercises+1}</label></div>
        <div className="card-training--biserie"><label>BISERIE</label></div>
          <div className="card-training-content">
            
            <div className="card-training-content--title">
                {ejercicio.nombre}
            </div>
            <div className="card-training-content--zone">
              <b>Grupo muscular:</b> {ejercicios.zona}
            </div>
            <div className="card-training-content--series">
            <b>Series:</b> {ejercicios.series}
            </div>
            <div className="card-training-content--reps">
            <b>Repeticiones:</b> {ejercicios.repeticiones[index]}
            </div>
            <div className="card-training-content--descanso">
            <b>Descanso:</b>  {ejercicios.descanso}''
            </div>
          </div>
          <div className="card-training-button">
          <AiOutlinePlayCircle alt="video"  onClick={() => openVideo(ejercicio.url_video)}/>
          </div>
          
          
          
        </div>
        )})
        
      ) : (
        ejercicios.id_exercise.map((ejercicio,index)=>{
          return(
          <div
          className="card-training"
          style={{
            background:
              `linear-gradient(180deg, rgba(0, 0, 0, 0.697) 10%, grey 180%),url(` +
              ejercicio.url_miniatura +
              `)`,
            backgroundRepeat: "no-repeat",
            backgroundPositionX: "center",
            backgroundPositionY: "10%",
            backgroundSize: "cover",
          }}
        >
        <div className="card-training--number"><label>{indexExercises+1}</label></div>
          <div className="card-training-content">
            
          <div className="card-training-content--title">
                {ejercicio.nombre}
            </div>
            <div className="card-training-content--zone">
              <b>Grupo muscular:</b> {ejercicios.zona}
            </div>
            <div className="card-training-content--series">
            <b>Series:</b> {ejercicios.series}
            </div>
            <div className="card-training-content--reps">
            <b>Repeticiones:</b> {ejercicios.repeticiones[index]}
            </div>
            <div className="card-training-content--descanso">
            <b>Descanso:</b>  {ejercicios.descanso}''
            </div>
          </div>
          <div className="card-training-button">
          <AiOutlinePlayCircle alt="video"  onClick={() => openVideo(ejercicio.url_video)}/>
          </div>
          
          
          
        </div>
        )})
      )}

      {isOpen && (
        <Modal isOpen={isOpen} closeModal={closeModal}>
          <ReactPlayer
            config={{
              vimeo: { playerOptions: { title: true, transparent: false } },
            }}
            controls
            title
            width="100%"
            height="100%"
            url={urlVideo}
          />
        </Modal>
      )}
    </>
  );
}
