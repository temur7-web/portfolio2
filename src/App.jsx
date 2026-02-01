import { Routes, Route } from 'react-router-dom';
import Header from './companents/Header/Header';
import SkyBar from './companents/SkyBar/SkyBar';
import Banner from './companents/Banner/Banner'; // 👈 shu yerda import
import About from './pages/About/About';
import Skills from './pages/Skills/Skills';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import Bio from './pages/Bio/Bio';
import Futer from './companents/Futer/Futer';
// import BottomNav from './companents/BottomNav/BottomNav';
function App() {
  return (
    <>

      <Header />
      {/* <BottomNav/> */}
      <SkyBar />
      
      <Routes>
        <Route path="/" element={<Banner />} /> {/* 👈 mana shu yerda ishlatiladi */}
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bio" element={<Bio />} />
      </Routes>

      <Futer />
    </>
  );
}

export default App;
