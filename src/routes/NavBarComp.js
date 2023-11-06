import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { NavBar } from "../components/layout/NavBar";
import { Footer } from "../components/layout/Footer";
import { Home } from "../components/pages/Home";
import { About } from "../components/pages/About";
import { Services } from "../components/pages/Services";
import { Contact } from "../components/pages/Contact";


const NavbarComp = () => {
  return (
    <div className='layout'>

      <BrowserRouter>

        {/* Nav */}
          <NavBar />

        {/* Contenido */}
          <div className='contenido'>
            <Routes>
              <Route path="/home" element={<Home/>} />
              <Route path="/about" element={<About />}/>
              <Route path="/services" element={<Services />}/>
              <Route path="/contact" element={<Contact />}/>
            </Routes>
          </div>

        {/* Footer */}
          <Footer />
      </BrowserRouter>

    </div>
  )
};

export default NavbarComp;