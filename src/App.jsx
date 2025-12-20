import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import LandingPage from './components/LandingPage';
import Footer from './components/Footer'; 
import Hero from './components/Hero';


function App() {
 

  return (
    <>
     <Navbar/>
     <Hero/>
     {/* <LandingPage/> */}
     <Footer/>
     

    </>
  )
}

export default App
