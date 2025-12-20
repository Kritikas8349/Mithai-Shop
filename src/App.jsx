import { useState } from 'react';
import './App.css';
// import LandingPage from './components/LandingPage';
import Footer from './components/Footer';  
import Navbar from './components/Navbar'; 
import Resturant from './components/Resturant';
// import Hero from './components/Hero';


function App() {
 

  return (
    <>
     <Navbar/>
     
     {/* <Hero/> */}
     <Resturant/>
     {/* <LandingPage/> */}
     <Footer/>
     

    </>
  )
}

export default App
