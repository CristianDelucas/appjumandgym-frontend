import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import { AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { BiKey } from "react-icons/bi";
import { useForm } from "react-hook-form";


import logo from '../../assets/img/logo.png';
import walker from '../../assets/img/walker.png';
import imgform from '../../assets/img/img-form-low.png';
import whatsapp from '../../assets/img/whatsapp.png';
import instagram from '../../assets/img/instagram.png';
import web from '../../assets/img/web.png';
import useAuth from '../../hooks/auth';
import { refreshUser } from '../../_shared/Api/ApiRefresh';



const Login = () => {
    //const [error,setError]=useState(false);
    

    const navigate = useNavigate();
    const {state} = useLocation();
    const { signIn,isLogged } = useAuth();
    console.log(state?.location?.pathname);

    
    
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const submit = async (data, e) => {
        e.preventDefault();
        
        
        signIn(data);
      };


    //   const singIn = (user) =>{
    //     const {login, isLogged} = useUser;
    //         login();
    // }

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
        <form onSubmit={ handleSubmit(submit)}>
            <div className='form-content'>
            <div className='login-form'>
                <div className='title'>
                    Iniciar Sesión
                </div>
                <div className='input-boxes'>
                    <div className='input-box'>
                        <i className='fas fa-envelope'><AiOutlineMail/></i>
                        <input type="text" name="email" placeholder="Introduce tu email" {...register("email", {
                required: { value: true, message: "Es obligatorio" },
                })}  />
                
                    </div>
                    <div>
                {errors.email && <span style={{color: "red"}}>{errors.email.message}</span>}
                </div>
                    <div className='input-box'>
                        <i className='fas fa-envelope'><BiKey/></i>
                        <input type="password" placeholder="Contraseña" name='password' 
                            {...register("password", {
                            required: { value: true, message: "Es obligatorio" },
                            })}
                        />
                        
                    </div>
                    <div>
                        {errors.password && <span style={{color: "red"}}>{errors.password.message}</span>}
                        </div>
                    <div className='text'> <a href="#">¿Contraseña olvidada?</a></div>
                    <div className='input-box'>
                        <input type="submit" className='button' value="CONECTAR" required></input>
                    </div>
                </div>
                <div className='text sign-up-text'>¿No tienes una cuenta? <br/> <label htmlFor="flip">Registrate ahora</label></div>
            </div>
            <div className='signup-form'>
                <div className='title'>
                    Registro
                </div>
                <div className='input-boxes'>
                    <div className='input-box'>
                        <i className='fas fa-envelope'><AiOutlineMail/></i>
                        <input type="text" placeholder="Introduce tu email" ></input>
                    </div>
                    <div className='input-box'>
                        <i className='fas fa-envelope'><AiOutlineUser/></i>
                        <input type="text" placeholder="Nombre" ></input>
                    </div>
                    <div className='input-box'>
                        <i className='fas fa-envelope'><AiOutlineUser/></i>
                        <input type="text" placeholder="Apellidos" ></input>
                    </div>
                    <div className='input-box'>
                        <i className='fas fa-envelope'><BiKey/></i>
                        <input type="passsword" placeholder="Contraseña" ></input>
                    </div>
                    <div className='input-box'>
                        <input type="submit" className='button' value="REGISTRAR" ></input>
                    </div>
                </div>
                <div className='text sign-up-text'>¿Ya tienes una cuenta? <br/> <label htmlFor="flip">Conectate ahora</label></div>
            </div>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Login