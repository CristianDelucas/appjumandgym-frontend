import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { BiKey } from "react-icons/bi";
import { HiEye, HiEyeOff } from "react-icons/hi";
import useAuth from '../../../hooks/auth';


const FormLogin = () => {

    


    const { signIn,isLogged } = useAuth();
    const [show,setShow]  = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const submit = async (data, e) => {
        e.preventDefault();
        console.log(data);
        signIn(data);
      };
   

  return (
    <form onSubmit={ handleSubmit(submit)} className='login-form'>
                <div className='title'>
                    Iniciar Sesión
                </div>
                <div className='input-boxes'>
                    <div className='input-box'>
                    <span className='title-input-box'>Email</span>
                        <i className='fas fa-envelope'><AiOutlineMail/></i>
                        <input style={errors.email && {border:'2px solid red'}}
                        type="text" name="email" placeholder="Introduce tu email" {...register("email", {
                required: {value: true, message: "Campo 'Email' obligatorio" },
                pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Email con formato incorrecto"}
                
                })}  />
                 {errors.email && <span className='error-message'>{errors.email.message}</span>}
                    </div>
                    <div>
                </div>
                    <div className='input-box'>
                        <span className='title-input-box'>Contraseña</span>
                        <i className='fas fa-envelope'><BiKey/></i>
                        <input style={errors.password && {border:'2px solid red'}}
                        type={show ? 'text':'password'} placeholder="Contraseña" name='password' 
                            {...register("password", {
                            required: { value: true, message: "Campo 'Contraseña' obligatoria" },
                            })}
                        />
                        {show?<HiEyeOff onClick={()=> setShow(!show)} className='showpassword'/>:
                        <HiEye onClick={()=> setShow(!show)} className='showpassword'/>}
                            {errors.password && <span className='error-message'>{errors.password.message}</span>}
                        
                    </div>
                    <div>
                        
                        </div>
                    <div className='text'> <a href="#">¿Contraseña olvidada?</a></div>
                    <div className='input-box'>
                        <input type="submit" className='button' value="CONECTAR" required/>
                    </div>
                </div>
                <div className='text sign-up-text'>¿No tienes una cuenta? <br/> <label htmlFor="flip">Registrate ahora</label></div>
            </form>
  )
}

export default FormLogin