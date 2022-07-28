import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { BiKey } from "react-icons/bi";
import { useForm } from "react-hook-form";


import logo from '../../assets/img/logo.png';
import whatsapp from '../../assets/img/whatsapp.png';
import instagram from '../../assets/img/instagram.png';
import web from '../../assets/img/web.png';
import { useAuth } from '../../utils/useAuth/useAuth';
import { loginUser } from '../../_shared/Api/ApiLogin';
import { getRol } from '../../_shared/Api/ApiUser';



const Login = () => {
    //const [error,setError]=useState(false);
    

    const navigate = useNavigate();
    const {state} = useLocation();
    
    console.log(state?.location?.pathname);
    const {login,authorization,isAuthenticated } = useAuth();

    useEffect(() => {

        if(isAuthenticated) navigate('/');
        },[]);
    
    
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const submit = async (data) => {
        const user = await loginUser(data);

        //añadir información a localstore
        localStorage.setItem('token',user.token);
        localStorage.setItem('idUser',user.reqUserId);
        if(user.token){
            login();
            const roles = await getRol(user.reqUserId);
            console.log(roles);
            if(roles){
                authorization();
            }
        }
        navigate('/');

      };

    //   const singIn = (user) =>{
    //     const {login, isLogged} = useUser;
    //         login();
    // }

  return (
    <div className="c-login">
    <div className="c-login__title">JUM AND GYM <br/> Nutrición y entrenamiento</div>
    <div className="c-login__content">
    <div className="f-description">
        <div className="f-description__logo"><img src={logo} alt="logo"/></div>
        <div className="f-description__redes">
        <a className="links"  href="https://www.instagram.com/jumandgym/" target="_blank" rel="noreferrer"><img src={web} alt="web"/></a>
        <a className="links" href="https://www.instagram.com/jumandgym/" target="_blank" rel="noreferrer"><img src={instagram} alt="instagram"/></a>
            <a className="links" href="https://web.whatsapp.com/send?phone=34641040558&text=¡Hola JumAndGym!" target="_blank" rel="noreferrer"><img src={whatsapp} alt="whatsapp"/></a>
        </div>
    </div>
    

    <form onSubmit={ handleSubmit(submit)} className="f-login">
        <div className="f-login__header"><p>Conectate</p></div>
        
            <div className="f-login__body">
                <div >
                <label>Correo Electrónico</label>
                <div className="input-wrapper">
                <input
                className="login-input"
                type="text"
                name="email"
                value={'admin@gmail.com'}
                placeholder="Dirección de email"
                {...register("email", {
                required: { value: true, message: "Es obligatorio" },
                })}
                />
                <span id="icon">
                    <AiOutlineMail/>
                </span>
                </div>
            {errors.email && <span style={{color: "red"}}>{errors.email.message}</span>}
            </div>
            <div>
            <label>Contraseña</label>
            <div className="input-wrapper">
            <input
                className="login-input"
                type="password"
                name="password"
                placeholder="Password"
                value={'123456'}
                {...register("password", {
                required: { value: true, message: "Es obligatorio" },
                })}
            />
             <span id="icon">
                    <BiKey/>
                </span>
                </div>
            {errors.password && <span style={{color: "red"}}>{errors.password.message}</span>}
            </div>
                <div>¿Olvidaste la contraseña?</div>
            </div>
        <div className="f-login__footer">
        <input type="submit" value="Login" name="submit" className="input-button"/></div>
    </form>
    </div>
    
    
    </div>
  )
}

export default Login