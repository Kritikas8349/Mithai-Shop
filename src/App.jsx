import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import LandingPage from './components/LandingPage';
import Footer from './components/Footer'; 
// import Hero from './components/Hero';
// import Resturant from './components/Resturant';
import Menu from './components/Menu';


function App() {
 

  return (
    <>
     <Navbar/>
     {/* <Hero/> */}
     {/* <LandingPage/> */}
     {/* <Resturant/> */}
     <Menu/>
     <Footer/>
     

    </>
  )
}

export default App
