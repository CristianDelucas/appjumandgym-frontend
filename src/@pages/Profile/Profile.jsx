import React, { useState } from 'react'
import { useContext } from 'react';
import { AuthContext } from '../../context/auth';
import Chart from '../../_shared/components/Charts/Chart'

const Profile = () => {
  const [data, setData] = useState([]);

  const { fullname, email } = useContext(AuthContext);

  return (
    <div className='c-profile'>
      <div className='c-profile__header'>
        <div className='c-profile__header-title'>
        <div className='c-profile__header-title-img'>
          <img src='https://cdn-icons-png.flaticon.com/512/1998/1998607.png' alt='logo-puma' />
        </div>
        <div className='c-profile__header-title-text'>
            {fullname} <br/>
            <span>2 meses de entrenamiento</span>
            </div>
        </div>
        <div className='c-profile__header-footer'>
          
        </div>
        </div>
        <div className='c-profile__content'>
          
        <div className='row'>
              <div className="col-12 col-sm-6 ">
                    <div className="card">
                      <div className="card--title">INFORMACIÓN PERSONAL</div>
                      <div className="card--content">
                      Fecha nacimiento: <strong>28/03/1991</strong>
                      <br/>
                      <br/>
                      Altura: <strong>177 cm</strong>
                      <br/>
                      <br/>
                      Usuario con rutina: <strong>Si</strong>
                      </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 ">
                    <div className="card">
                      <div className="card--title">INFORMACIÓN DE CONTACTO</div>
                      <div className="card--content">
                      Numero de telefono: <strong>685234234</strong>
                      <br/>
                      <br/>
                      Email: <strong>{email}</strong>
                      <br/>
                      <br/>
                      Instagram: <strong>@ejemploa</strong>
                      </div>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 ">
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
            <div className="col-12 col-sm-12 col-md-6 ">
              <div className="col-12 ">
              <div className="card">
                      <div className="card--title">TU PLAN</div>
                      <div className="card--content">
                      Plan: <strong>2 meses</strong>
                      <br/>
                      <br/>
                      Tipo: <strong>Entrenamiento muscular</strong>
                      </div>
                    </div>
              </div>
              <div className="col-12 ">
              <div className="card">
                      <div className="card--title">INFORMACIÓN PERSONAL</div>
                      <div className="card--content">
                      Fecha nacimiento: <strong>28/03/1991</strong>
                      <br/>
                      <br/>
                      Altura: <strong>177 cm</strong>
                      <br/>
                      <br/>
                      Usuario con rutina: <strong>Si</strong>
                      </div>
                    </div>
              </div>
            </div>

        </div>
          
        </div>
    </div>
  )
}

export default Profile