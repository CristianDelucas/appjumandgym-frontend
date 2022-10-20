import React, { useEffect, useState } from "react";
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

  const [theme, setTheme] = useState(window.localStorage.getItem('theme-color')?0:1)

  useEffect(()=>{
    if(!window.localStorage.getItem('theme-color')){
      window.localStorage.setItem('theme-color',0)
      setTheme(theme => 0)
    }
  },[setTheme])

  const changeTheme = ()=>{
    setTheme(theme=> !theme);
    console.log(theme)
    window.localStorage.setItem('theme-color',theme?0:1)
  }
  
  return (
     
    <div className={theme?'App theme--dark':'App theme--light'}>
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

      <div className="button-theme" onClick={()=>changeTheme()}>
          {theme? <MdDarkMode />: <BsSun/> }
      </div>
    </div>
  );
}

export default App;
