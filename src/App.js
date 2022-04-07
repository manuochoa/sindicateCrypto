import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HttpsRedirect from 'react-https-redirect';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import DashboardContainer from './Pages/Dashboard/DashboardContainer';
import CalculatorContainer from './Pages/Calculator/CalculatorContainer';
import SwapContainer from './Pages/Swap/SwapContainer';
import MobileMenu from './Components/Navbar/MobileMenu/MobileMenu';
import ConnectWalletModal from './Components/ConnectWalletModal/ConnectWalletModal';

const App = () => {
  const [isShowWalletModal, setIsShowWalletModal] = useState(false)

  const handleIsShowWalletModal = () => {
    setIsShowWalletModal(!isShowWalletModal)
  }

  return (
    <Router>
      <HttpsRedirect>
        {isShowWalletModal && <ConnectWalletModal onClose={handleIsShowWalletModal}/>}
        <div className='main'>
          <Navbar showModal={handleIsShowWalletModal}/>
          <div className='content'>
            <Routes>
              <Route path="/" element={<DashboardContainer/>} />
              <Route path="/calculator" element={<CalculatorContainer/>} />
              <Route path="/swap" element={<SwapContainer/>} />
            </Routes>
          </div>
        </div>
        <MobileMenu/>
      </HttpsRedirect>
    </Router>
  )
}

export default App;
