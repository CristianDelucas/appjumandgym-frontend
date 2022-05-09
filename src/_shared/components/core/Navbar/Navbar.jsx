import React, {useState, useEffect} from 'react';
import { GiJumpingRope } from "react-icons/gi";
import { AiOutlineMenu } from "react-icons/ai";
import { BiGridAlt, BiUser, BiBookContent,BiQuestionMark, BiLogOut } from "react-icons/bi";
import logo from '../../../../assets/img/logo.png';
import { Link, useNavigate } from "react-router-dom";

import "./Navbar.scss";
import { useAuth } from '../../../../utils/useAuth/useAuth';
const Navbar = () => {
    const {logout} = useAuth();
    const [active, setActive] = useState('');
    const [width, setWindowWidth] = useState(0)
    const navigate = useNavigate();
    

    const sidebarActive = () =>{
        if(!active){
            setActive('active');
        }else{
            setActive('')
        }
        
    };

    const logoutUser = () =>{
        logout();
        navigate('/login');
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
            <Link onClick={()=>logoutUser}><BiLogOut id="log_out" /></Link>
            
        </div>
        </div>
    </div>
    </>
  )
}

export default Navbar