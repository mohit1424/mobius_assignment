import React from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import NavSec from './Component/NavSec'
import About from './Component/aboutUS/About'
import Player from './Component/player/Player'
import HeroVideo from './Component/heroVideo/HeroVideo'
import Choose from './Component/heroVideo/Choose'
import ServicePlan from './Component/servicePlan/ServicePlan'
import Footer from './Component/footer/Footer'

function App() {
 

  return (
    <>
     <Navbar/>
     <NavSec/>
     <About/>
     <Player/>
     <HeroVideo/>
     <Choose/>
     <ServicePlan/>
     <Footer/>
    </>
  )
}

export default App
