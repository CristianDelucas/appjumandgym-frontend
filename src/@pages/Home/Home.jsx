import React from 'react'
import Dashboard from './../Dashboard/Dashboard'
import Navbar from '../../_shared/components/core/Navbar/Navbar';
const Home = () => {
  return (
    <div>
    <Navbar/>
    <div className="content">
      <Dashboard/>
    </div>
    

    </div>
  )
}

export default Home