import React, { useState } from 'react'
import Chart from '../../_shared/components/Charts/Chart'

const Dashboard = () => {

  const [data, setData] = useState([]);

  return (
    <div className='c-dashboard'>

      <div className='c-dashboard__header'>
        <div className='c-dashboard__header-title'>
        <div className='c-dashboard__header-title-text'>
        Bienvenid@ a la aplicación, ¡PUMA!
        </div>
        </div>
      </div>

      <div className='c-dashboard__content row'>
            <div className="col-12 col-sm-4 ">
              <div className="card">
                <div className="card--title">PLAN CONTRATADO</div>
                <div className="card--content">
                Plan: <strong>Entrenamiento muscular</strong>
                <br/>
                <br/>
                Duración: <strong>2 meses</strong>
                <br/>
                <br/>
                Caducidad: <strong>12/12/2020</strong>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-4 ">
              <div className="card">
                <div className="card--title">INFORMACIÓN DE RUTINA
                  
                </div>
                <div className="card--content">
                Días a la semana: <strong>5</strong>
                <br/>
                <br/>
                Minutos por entreno: <strong>90 minutos</strong>
                <br/>
                <br/>
                Tipo: <strong>Hipertrofia</strong>

                </div>
              </div>
            </div>
            <div className="col-12 col-sm-4">
              <div className="card">
                <div className="card--title">GUIA DE APP</div>
                <div className="card--content">
                ¿Donde ver mi rutina? <strong>Aquí</strong>
                <br/>
                <br/>
                ¿Como personalizar mi perfil y datos? <strong>Aquí</strong>
                <br/>
                <br/>
                ¿No encuentras lo deseado? <strong>Aquí</strong>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 ">
              <div className="card">
                <div className="card--title">PROGRESO</div>
                <div className="card--content">
                <Chart
                  labels={data.length === 0 ? ["01/01/21", "01/01/21", "01/01/21", "01/01/21" ,"01/01/21" ,"01/01/21" ] : data[0].labels}
              data1={data.length === 0 ? [67, 69, 72, 75, 77, 77] : data[0].data[0].values}
                />
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-3 ">
              <div className="card">
                <div className="card--title">ACCESOS DIRECTOS</div>
                <div className="card--content">
                Rutinas <strong>Aquí</strong>
                <br/>
                <br/>
                Perfil <strong>Aquí</strong>
                <br/>
                <br/>
                ¿Preguntas frecuentes? <strong>Aquí</strong>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-3 ">
              <div className="card">
                <div className="card--title">REDES SOCIALES</div>
                <div className="card--content">Este va a ser el contenido</div>
              </div>
            </div>
      </div>

      <div className='c-dashboard__footer'>

      </div>

    </div>
  )
}

export default Dashboard