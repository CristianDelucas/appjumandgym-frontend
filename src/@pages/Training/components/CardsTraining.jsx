import { useState } from "react";
import ReactPlayer from "react-player";
import { useModal } from "../../../hooks/useModal";
import Modal from "../../../_shared/components/Modals/Modal";
import ReactTooltip from "react-tooltip";
import { AiOutlineInfoCircle, AiOutlinePlayCircle } from "react-icons/ai";
export default function CardsTraining({ ejercicios, indexExercises }) {
  const [isOpen, openModal, closeModal] = useModal(false);
  const [urlVideo, setUrlVideo] = useState("");

  const openVideo = (url) => {
    setUrlVideo(url);
    openModal();
  };

  

  return (
    <>
      {ejercicios.id_exercise.length > 1
        ? ejercicios.id_exercise.map((ejercicio, index) => {
            return (
              <div key={ejercicio._id} className="card-training col-12 col-md-6">
              <div
                
                className="body-training isBiserie"
                style={{
                  background:
                    `linear-gradient(180deg, rgba(0, 0, 0, 0.4) 10%, grey 180%),url(` +
                    ejercicio.url_miniatura +
                    `)`,
                }}
              >
                <div className="body-training--number">
                  <label>{indexExercises + 1}</label>
                </div>
                <div className="body-training--biserie">
                  <label>SUPERSERIE</label>
                </div>
                <div className="body-training-content">
                  <div className="body-training-content--title">
                    {ejercicio.nombre}
                  </div>
                  <div className="body-training-content--zone">
                    <b>Músculo:</b> {ejercicio.musculo}
                  </div>
                  <div className="body-training-content--series">
                    <b>Series:</b> {ejercicios.series}
                  </div>
                  <div className="body-training-content--reps">
                    <b>Repeticiones:</b>{" "}
                    {ejercicios.repeticiones[index]
                      ? ejercicios.repeticiones[index]
                      : ejercicios.repeticiones[index - 1]}
                  </div>
                  <div className="body-training-content--descanso">
                    <b>Descanso:</b> {ejercicios.descanso}''
                  </div>
                </div>
                <div className="body-training-button">
                  <AiOutlinePlayCircle
                    alt="video"
                    onClick={() => openVideo(ejercicio.url_video)}
                  />
                </div>
                <div className="body-training-info">
                  <AiOutlineInfoCircle
                    data-tip={ejercicio.indicaciones}
                    alt="info"
                  />
                  <ReactTooltip place="left" type="light" effect="solid" />
                </div>
              </div>
              </div>
            );
          })
        : ejercicios.id_exercise.map((ejercicio, index) => {
            return (
              <div key={ejercicio._id} className="card-training col-12 col-md-6">
              <div
                className="body-training"
                style={{
                  background:
                    `linear-gradient(180deg, rgba(0, 0, 0, 0.4) 10%, grey 180%),url(` +
                    ejercicio.url_miniatura +
                    `)`,
                  
                }}
              >
                <div className="body-training--number">
                  <label>{indexExercises + 1}</label>
                </div>
                <div className="body-training--biserie">
                </div>
                <div className="body-training-content">
                  <div className="body-training-content--title">
                    {ejercicio.nombre}
                  </div>
                  <div className="body-training-content--zone">
                    <b>Músculo:</b> {ejercicio.musculo}
                  </div>
                  <div className="body-training-content--series">
                    <b>Series:</b> {ejercicios.series}
                  </div>
                  <div className="body-training-content--reps">
                    <b>Repeticiones:</b> {ejercicios.repeticiones[index]}
                  </div>
                  <div className="body-training-content--descanso">
                    <b>Descanso:</b> {ejercicios.descanso}''
                  </div>
                </div>
                <div className="body-training-button">
                  <AiOutlinePlayCircle
                    alt="video"
                    onClick={() => openVideo(ejercicio.url_video)}
                  />
                </div>
                <div className="body-training-info">
                  <AiOutlineInfoCircle
                    data-tip={ejercicio.indicaciones}
                    alt="info"
                  />
                  <ReactTooltip place="left" type="light" effect="solid" />
                </div>
              </div>
              </div>
            );
          })}

      

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
