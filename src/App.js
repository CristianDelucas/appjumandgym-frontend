import React from "react";
import Login from './@pages/Login/Login';

import { Routes, Route, Outlet, Navigate, useLocation } from "react-router-dom";

import "./styles/app.scss";
import Training from "./@pages/Training/Training";
import Navbar from "./_shared/components/core/Navbar/Navbar";
import Dashboard from "./@pages/Dashboard/Dashboard";
import Profile from "./@pages/Profile/Profile";
import { AuthProvider, useAuth } from "./utils/useAuth/useAuth";

 const ProtectedRoute = ({ children }) =>{
   const { isAuthenticated } = useAuth();
   const location = useLocation();

   if(!isAuthenticated){
     return <Navigate to="/login" state={{location}}/>
   }
   return children;
 }




function App() {
  return (
    // <AuthProvider>
    <div className="App">



        <Routes>
        
          <Route path='/login' element={<Login/>}/>
          
          <Route path='/' element={<><Navbar/><div className="content"><Outlet/></div></>}>
            <Route index element={<Dashboard/>}/>
            <Route path="/training" element={<Training/>}/>
            <Route path="/profile" element={<Profile/>}/>
          </Route>
          
          <Route path='*' element={<h1>Not found</h1>}/>
        </Routes>

      
    </div>
    // </AuthProvider>
  );
}

export default App;
