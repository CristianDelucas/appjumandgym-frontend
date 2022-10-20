import React, { useCallback, useEffect, useState } from "react";
import Login from './@pages/Login/Login';
import { ToastContainer, toast } from 'react-toastify';
import { Routes, Route, Outlet } from "react-router-dom";

import "./styles/app.scss";
import Training from "./@pages/Training/Training";
import Navbar from "./_shared/components/core/Navbar/Navbar";
import Dashboard from "./@pages/Dashboard/Dashboard";
import Profile from "./@pages/Profile/Profile";

import { MdDarkMode } from "react-icons/md";
import { BsSun } from "react-icons/bs";
import Admin from "./@pages/Admin/Admin";
import ProtectAppRoutes from "./protect/app/ProtectAppRoutes";
import ProtectAuthRoutes from "./protect/auth/ProtectAuthRoutes";
import { AdminProvider } from "./context/AdminContext";
import ForgotPassword from "./@pages/ForgotPassword/ForgotPassword";
import ResetPassword from "./@pages/ResetPassword/ResetPassword";

//  const ProtectedRoute = ({ children }) =>{
//    const { isAuthenticated } = useAuth();
//    const location = useLocation();
//   console.log(isAuthenticated);
//    if(!isAuthenticated){
//      return <Navigate to="/login" state={{location}}/>
//    }
//    return children;
//  }

const ROLES = {
  'user': '62e29413d5f87b1c40b64929',
  'moderator': '62e29413d5f87b1c40b6492a',
  'admin': '62e29413d5f87b1c40b6492b'
}

 


function App() {

  const [theme, setTheme] = useState('light')

  const toggleTheme = () =>{
    if(theme === 'dark'){
      setTheme('light')
      window.localStorage.setItem('theme','light')
    }else{
      setTheme('dark')
      window.localStorage.setItem('theme','dark')
    }
  }

  useEffect(()=>{
    const localTheme = window.localStorage.getItem('theme');
    if(localTheme){
      setTheme(localTheme);
      window.localStorage.setItem('theme',localTheme)
    }
  },[])

  
  return (
     
    <div className={theme==="light"?'App theme--light':'App theme--dark'}>
        <ToastContainer 
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            
        />
    

        <Routes>
          {/* PUBLIC ROUTES*/}
          <Route path='/login' element={<Login/>}/>
          <Route path='/forgotpassword'>
            <Route index element={<ForgotPassword/>}/>
            <Route path=':id/:token' element={<ResetPassword/>}/>
          </Route>
          {/* PRIVATE ROUTES*/}
          <Route path='/' element={<ProtectAppRoutes><Navbar/><div className="content"><Outlet/></div></ProtectAppRoutes>}>
            <Route index element={<Dashboard/>}/>
            <Route path="/training" element={<Training/>}/>
            <Route path="/profile" element={<Profile/>}/>
            
              <Route path="/admin" element={<ProtectAuthRoutes allowedRoles={[ROLES.admin]}><AdminProvider><Admin/></AdminProvider></ProtectAuthRoutes>}/>
            
            
          </Route>
          
          <Route path='*' element={<h1>Not found</h1>}/>
        </Routes>

      <div className="button-theme" onClick={toggleTheme}>
          {theme === "light"? <BsSun/>:<MdDarkMode /> }
      </div>
    </div>
  );
}

export default App;
