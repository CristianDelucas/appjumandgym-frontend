import React, {useEffect} from 'react'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BiKey } from 'react-icons/bi';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { validIdAndResetToken,resetPassword } from '../../_shared/Api/Auth/ApiAuth';

const ResetPassword = () => {

  const [valid,setValid] = useState(false);

  const {id,token} = useParams();

  const validTokenAndId = async () =>{
    const validUser = await validIdAndResetToken(id,token);
    
    if(validUser.status===200){
      console.log('Validado')
    }
  }

  useEffect(function(params) {
    validTokenAndId(id,token);
  },[])

  const navigate = useNavigate();
  const [show,setShow]  = useState(false);
  
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const submit = async (data, e) => {
        e.preventDefault();
        const setNewPassword = await resetPassword(id,token,data);

        if(setNewPassword){
          navigate('/login');
        }
      };

      

  return (
    
    <div className="c-login">
      <form className="forgotpassword" onSubmit={ handleSubmit(submit)}>
        <div className="title">Cambio de contraseña
        <div className='back'>
        <Link to="/login">X</Link>
        </div>
        </div>
        <div className='info'>
        A continuación , introduzca la nueva contraseña que quiera usar para el uso de esta aplicación.
        </div>
        
        
        <div className="input-boxes">
        <div className='input-box'>
                        <span className='title-input-box'>Nueva contraseña</span>
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
            <div className='input-box'>
            <input className='button' type="submit" value="ENVIAR" />
            </div>
        </div>
        
      </form>
    </div>
  );
}

export default ResetPassword