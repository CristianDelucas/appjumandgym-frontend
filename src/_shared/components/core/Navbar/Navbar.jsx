import React, {useState, useEffect} from 'react';
import { GiJumpingRope } from "react-icons/gi";
import { AiOutlineMenu } from "react-icons/ai";
import { BiGridAlt, BiUser, BiBookContent,BiQuestionMark, BiLogOut , BiShieldQuarter} from "react-icons/bi";
import logo from '../../../../assets/img/logo.png';
import { Link, useNavigate } from "react-router-dom";

import "./Navbar.scss";
import useAuth from '../../../../hooks/auth';
import ProtectAuthRoutes from '../../../../protect/auth/ProtectAuthRoutes';


const ROLES = {
    'user': '62e29413d5f87b1c40b64929',
    'moderator': '62e29413d5f87b1c40b6492a',
    'admin': '62e29413d5f87b1c40b6492b'
  }

const Navbar = () => {
    const [active, setActive] = useState('');
    const [width, setWindowWidth] = useState(0)
    const { logout } = useAuth();

    const sidebarActive = () =>{
        if(!active){
            setActive('active');
        }else{
            setActive('')
        }
        
    };

    const handleLogoutUser = () =>{
        //desconectar borrado de cookies y tokenSession
         logout();
    }

    useEffect(() => { 

        updateDimensions();
   
        window.addEventListener('resize', updateDimensions);
        return () => 
          window.removeEventListener('resize',updateDimensions);
       }, [])

       const updateDimensions = () => {
        const width = window.innerWidth
        setWindowWidth(width)
      }

  return (
    <>
    {width>768?<></>:<div className='navbar'>
    <div className="navbar__content"> 
            <AiOutlineMenu id="btn" onClick={sidebarActive}/>
        </div>
    </div>
    }
    
    <div className={'sidebar '+active}>
        <div className="logo_content"> 
            <div className="logo">
                <GiJumpingRope id="icon"/>
                <div className="logo_name">APP JUMANDGYM</div>
            </div>
            <AiOutlineMenu id="btn" onClick={sidebarActive}/>

        </div>
        <ul className="nav_list list-unstyled">
            <li>
                <Link to="/" onClick={()=>setActive('')}>
                    <BiGridAlt id="icon"/>
                    <span className="links_name">Dashboard</span>
                </Link>
                <span className="tooltip">Dashboard</span>
            </li>
            <li>
                <Link to="/training" onClick={()=>setActive('')}>
                    <BiBookContent id="icon"/>
                    <span className="links_name">Entrenamiento</span>
                </Link>
                <span className="tooltip">Entrenamiento</span>
            </li>
            <li>
                <Link to="/profile" onClick={()=>setActive('')}>
                    <BiUser id="icon"/>
                    <span className="links_name">Perfil</span>
                </Link>
                <span className="tooltip">Perfil</span>
            </li>
            <ProtectAuthRoutes allowedRoles={[ROLES.admin]}>
            <li className='link-auth'>
                <Link id='auth'  to="/admin" onClick={()=>setActive('')}>
                    <BiShieldQuarter  id="icon"/>
                    <span className="links_name">Admin</span>
                </Link>
                <span className="tooltip">Admin</span>
            </li>
            </ProtectAuthRoutes>
            
            
            <li>
                <a href="#" onClick={()=>setActive('')}>
                    <BiQuestionMark id="icon"/>
                    <span className="links_name">Preguntas frecuentes</span>
                </a>
                <span className="tooltip">Preguntas frecuentes</span>
            </li>
        </ul>
        <div className="profile_content">
        <div className="profile">
            <div className="profile__details">
                <img src={logo} alt="logo"/>
                <div className="name__plan">
                    <div className="name">Juanito</div>
                    <div className="plan">2 meses Entrenamiento</div>
                </div>
            </div>
            <BiLogOut id="log_out" onClick={handleLogoutUser} />
            
        </div>
        </div>
    </div>
    </>
  )
}

export default Navbar