import React from 'react'
import { NavLink } from 'react-router-dom';
import  { Container }  from 'react-bootstrap';
import  { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Link as ScrollLink, Element, scroller } from 'react-scroll';
import { Link } from 'react-router-dom';




export const NavBar = () => {
  const scrollToServices = () => {
    scroller.scrollTo('services-section', {
      duration: 100, // Duración del desplazamiento en milisegundos
      smooth: 'easeInOutQuart', // Tipo de desplazamiento
    });
  };

  return (
    <div className='navBar'>
      <Navbar sticky='top'>
        <Container>
          <Nav className="me-auto">
            <Link to='/home' className='ms-4 boton nav-link fs-6 boton-nv'>
              INICIO
            </Link>
            <ScrollLink
              to='services-section'
              spy={true}
              smooth={true}
              offset={-90} // Ajusta esto según la altura de tu barra de navegación
              duration={100}
              className='ms-4 boton nav-link fs-6 boton-nv'
              onClick={scrollToServices}
            >
              SERVICIOS
            </ScrollLink>
            <Link to='/contact' className='ms-4 boton nav-link fs-6 boton-nv'>
              CONTACTO
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
