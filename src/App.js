import React, { useEffect, useState } from "react";
import Login from './@pages/Login/Login';


import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

import "./styles/app.scss";

function App() {
  return (
    <div className="App">

<BrowserRouter>
       {/* <Link to='/home'>Tablero</Link>  */}

        <Routes>
          
          
          <Route path='' element={<Login/>}/>
        </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
