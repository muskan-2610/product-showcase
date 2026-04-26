import React from 'react'
import { Route, Routes } from "react-router-dom";

import NavBar from './components/navbar'
import BuyPage from './components/buypage';
import Features from './components/features';
import LandingPage from './components/landingPage';
import ControlPanel from './components/controlPanel';
import Dashboard from './components/dashboard';
import CustomCursor from './components/customCursor';

const App = () => {
  return (
    <div >
      <NavBar />
      <CustomCursor />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/features" element={<Features />} />
        <Route path="/buy" element={<BuyPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/controls" element={<ControlPanel />} />
      </Routes>

    </div>
  )
}
export default App