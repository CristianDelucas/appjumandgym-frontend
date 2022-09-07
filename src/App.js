import React from "react";
import Login from './@pages/Login/Login';

import { Routes, Route, Outlet } from "react-router-dom";

import "./styles/app.scss";
import Training from "./@pages/Training/Training";
import Navbar from "./_shared/components/core/Navbar/Navbar";
import Dashboard from "./@pages/Dashboard/Dashboard";
import Profile from "./@pages/Profile/Profile";

import Admin from "./@pages/Admin/Admin";
import ProtectAppRoutes from "./protect/app/ProtectAppRoutes";
import ProtectAuthRoutes from "./protect/auth/ProtectAuthRoutes";

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

  
  return (
     
    <div className="App">

    

        <Routes>
          {/* PUBLIC ROUTES*/}
          <Route path='/login' element={<Login/>}/>
          {/* PRIVATE ROUTES*/}
          <Route path='/' element={<ProtectAppRoutes><Navbar/><div className="content"><Outlet/></div></ProtectAppRoutes>}>
            <Route index element={<Dashboard/>}/>
            <Route path="/training" element={<Training/>}/>
            <Route path="/profile" element={<Profile/>}/>
            
              <Route path="/admin" element={<ProtectAuthRoutes allowedRoles={[ROLES.admin]}><Admin/></ProtectAuthRoutes>}/>
            
            
          </Route>
          
          <Route path='*' element={<h1>Not found</h1>}/>
        </Routes>

      
    </div>
  );
}

export default App;
