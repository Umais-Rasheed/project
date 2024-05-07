import './App.css';

import About from './components/About';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Purchase from './components/Purchase';
import Sell from './components/Sell';
import Services from './components/Services';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route>
            <Route index element={<Home />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Cards" element={<Cards />} />
            <Route path="/Sell" element={<Sell />} />
            <Route path="/Purchase" element={<Purchase />} />
            <Route path="/About" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
