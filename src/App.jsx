import React from 'react'
import { Route, Routes } from "react-router-dom";

import NavBar from './components/navbar'
import BuyPage from './components/buypage';
import Features from './components/features';
import LandingPage from './components/landingPage';
import ControlPanel from './components/controlPanel';
import Dashboard from './components/dashboard';



const App = () => {
  return (
    <div >

      <NavBar />


      <Routes>
        <Route path="/features" element={<Features />} />
        <Route path="/buy" element={<BuyPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/controls" element={<ControlPanel />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>


    </div>
  )
}

export default App