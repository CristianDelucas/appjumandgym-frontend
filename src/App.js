import React from "react";
import Login from './@pages/Login/Login';

import { Routes, Route, Outlet, useLocation } from "react-router-dom";

import "./styles/app.scss";
import Training from "./@pages/Training/Training";
import Navbar from "./_shared/components/core/Navbar/Navbar";
import Dashboard from "./@pages/Dashboard/Dashboard";
import Profile from "./@pages/Profile/Profile";

import Admin from "./@pages/Admin/Admin";

//  const ProtectedRoute = ({ children }) =>{
//    const { isAuthenticated } = useAuth();
//    const location = useLocation();
//   console.log(isAuthenticated);
//    if(!isAuthenticated){
//      return <Navigate to="/login" state={{location}}/>
//    }
//    return children;
//  }


 


function App() {

  const location = useLocation();
  
  return (
     
    <div className="App">



        <Routes>
          {/* PUBLIC ROUTES*/}
          <Route path='/login' element={<Login/>}/>
          {/* PRIVATE ROUTES*/}
          <Route path='/' element={<><Navbar/><div className="content"><Outlet/></div></>}>
            <Route index element={<Dashboard/>}/>
            <Route path="/training" element={<Training/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/admin" element={<Admin/>}/>
          </Route>
          
          <Route path='*' element={<h1>Not found</h1>}/>
        </Routes>

      
    </div>
  );
}

export default App;
