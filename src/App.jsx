import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
import Hero from './components/Hero';
import Menu from './components/Menu';   
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
