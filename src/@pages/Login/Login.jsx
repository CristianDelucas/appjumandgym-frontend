import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import FormLogin from './components/FormLogin';

import 'react-toastify/dist/ReactToastify.css';

import logo from '../../assets/img/logo.png';
import walker from '../../assets/img/walker.png';
import imgform from '../../assets/img/img-form-low.png';
import whatsapp from '../../assets/img/whatsapp.png';
import instagram from '../../assets/img/instagram.png';
import web from '../../assets/img/web.png';
import useAuth from '../../hooks/auth';
import { refreshUser } from '../../_shared/Api/ApiRefresh';
import FormRegister from './components/FormRegister';



const Login = () => {

    const {state} = useLocation();
    console.log(state?.location?.pathname);

  return (
    <div className="c-login">
        
        <div className='c-login__container'>
        <input type="checkbox" id='flip' />
        <div className='cover'>
            <div className='front'>
                <img src={imgform} alt=""/>
                <div className='text'>
                    <span className='text-1'>¡Bienvenido PUMA!</span>
                    <span className='text-2'>Conectate y superate cada día</span>
                </div>
            </div>
            <div className='back'>
                <img className='backImg' src={walker} alt=""/>
                <div className='text'>
                    <span className='text-1'>¡Registrate y unete!</span>
                    <span className='text-2'>Disfruta de todas las ventajas de ser un PUMA</span>
                </div>
            </div>
        </div>
        <div className='forms'>
            <div className='form-content'>
            <FormLogin/>
            <FormRegister/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Login