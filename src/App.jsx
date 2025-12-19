import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer'; 


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <LandingPage/>
     <Footer/>
     

    </>
  )
}

export default App
