import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Chart from "../../_shared/components/Charts/Chart";
import walker from '../../assets/img/walker.png';
const Dashboard = () => {
  const [data, setData] = useState([]);
  const {routine , user} = useContext(AuthContext);


  return (
    <div className="c-dashboard">
      
      <div className="c-dashboard__header">
      
        <div className="c-dashboard__header-title">
          <div className="c-dashboard__header-title-text">
            Bienvenid@ a JUM AND GYM, ¡{user?.nombre}!
          </div>
        </div>
      </div>

      <div className="c-dashboard__content row">
        <div className="col-12 col-sm-4 ">
          <div className="card">
            <div className="card--title">PLAN CONTRATADO</div>
            <div className="card--content">
              Plan: <strong>{user?.objetivo}</strong>
              <br />
              <br />
              Duración: <strong>2 meses</strong>
              <br />
              <br />
              Fin de rutina: <strong>12/12/2020</strong>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-4 ">
          <div className="card">
            <div className="card--title">INFORMACIÓN DE RUTINA</div>
            <div className="card--content">
              Días a la semana: <strong>{routine?.numero_dias}</strong>
              <br />
              <br />
              Minutos por entreno: <strong>25 minutos</strong>
              <br />
              <br />
              Nivel: <strong>{routine?.nivel}</strong>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-4">
          <div className="card">
            <div className="card--title">GUIA DE APP</div>
            <div className="card--content">
              ¿Donde ver mi rutina?{" "}
              <strong>
                <Link to="/training">Aquí</Link>
              </strong>
              <br />
              <br />
              ¿Como personalizar mi perfil y datos?{" "}
              <strong>
                <Link to="/profile">Aquí</Link>
              </strong>
              <br />
              <br />
              ¿No encuentras lo deseado?{" "}
              <strong>
                <Link to="#">Aquí</Link>
              </strong>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 ">
          <div className="card">
            <div className="card--title">PROGRESO</div>
            <div className="card--content">
              <Chart
                labels={
                  data.length === 0
                    ? [
                        "01/01/21",
                        "01/01/21",
                        "01/01/21",
                        "01/01/21",
                        "01/01/21",
                        "01/01/21",
                      ]
                    : data[0].labels
                }
                data1={
                  data.length === 0
                    ? [67, 69, 72, 75, 77, 77]
                    : data[0].data[0].values
                }
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-3 ">
          <div className="card">
            <div className="card--title">ACCESOS DIRECTOS</div>
            <div className="card--content">
              Rutinas <strong>Aquí</strong>
              <br />
              <br />
              Perfil <strong>Aquí</strong>
              <br />
              <br />
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

      <div className="c-dashboard__footer"></div>
    </div>
  );
};

export default Dashboard;
