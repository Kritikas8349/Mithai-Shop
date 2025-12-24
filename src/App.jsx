import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
import Hero from './components/Hero';
import Menu from './components/Menu';   
import { Routes, Route } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop/>
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
