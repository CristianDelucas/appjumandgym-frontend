import React from 'react'
import { useForm } from 'react-hook-form';
import { AiOutlineMail } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { sendEmailForgotPassword } from '../../_shared/Api/Auth/ApiAuth';

const ForgotPassword = () => {
  const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const submit = async (data, e) => {
        e.preventDefault();
        const sendEmail = await sendEmailForgotPassword(data);
        
        if(sendEmail.status ===200){
          navigate('/login');
        }
      };

  return (
    <div className="c-login">
      <form className="forgotpassword" onSubmit={ handleSubmit(submit)}>
        <div className="title">¿Contraseña olvidada?
        <div className='back'>
        <Link to="/login">X</Link>
        </div>
        </div>
        <div className='info'>
        Para restablecer su contraseña, ingrese su correo electrónico a continuación y envíelo. Se le enviará un correo electrónico con instrucciones sobre cómo completar el proceso.
        </div>
        
        
        <div className="input-boxes">
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
            <input className='button' type="submit" value="ENVIAR" />
            </div>
        </div>
        
      </form>
    </div>
  );
}

export default ForgotPassword