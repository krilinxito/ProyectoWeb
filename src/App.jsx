import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Contact from "./Contact";
import Header from "./Header"; 
import Tagline from "./Tagline";
import Cards from "./Cards";
import Footer from "./Footer";
import Reviews from "./Reviews";
import Oppenheimer from "./Oppenheimer.jsx"; // Importa los componentes de las películas
import Barbie from "./Barbie";
import PoorThings from './PoorThings.jsx'
import GoodFellas from "./GoodFellas";
import Venom from './Venon.jsx'
import Substance from './Substance.jsx'
import Terrifier from "./Terrifier.jsx";
import WildRobot from "./WildRobot.jsx";
import Suscription from "./Suscription.jsx";

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <Nav /> 
      <Routes>
        {/* Ruta Principal */}
        <Route 
          path="/" 
          element={
            <>
              <Header />
              <Tagline />
              <Cards />
              <Footer />
            </>
          } 
        />

        {/* Ruta para el listado de reviews */}
        <Route path="/reviews" element={<Reviews />} />

        {/* Rutas específicas para cada película */}
        <Route path="/reviews/oppenheimer" element={<Oppenheimer />} />
        <Route path="/reviews/barbie" element={<Barbie />} />
        <Route path="/reviews/poor-things" element={<PoorThings />} />
        <Route path="/reviews/goodfellas" element={<GoodFellas />} />
        <Route path="/reviews/venom-the-last-dance" element={<Venom />} />
        <Route path="/reviews/the-substance" element={<Substance />} />
        <Route path="/reviews/terrifier-3" element={<Terrifier />} />
        <Route path="/reviews/the-wild-robot" element={<WildRobot />} />
        {/* Ruta de contacto */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/suscription" element={<Suscription />} />
      </Routes>
    </Router>
  );
};

export default App;
