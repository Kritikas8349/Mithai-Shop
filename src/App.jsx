import { useState } from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer'; 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <LandingPage/>
     <Footer/>

    </>
  )
}

export default App
