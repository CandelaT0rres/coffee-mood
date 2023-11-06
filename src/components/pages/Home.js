import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

//import { Table } from 'react-bootstrap';


export const Home = () => {
  return (
    <div>

   
    <div className='home grid-container'>
         <div className='component frase'>
            <h1 className=''>COFFEE MOOD</h1> 
            <p className=''>El barista, maestro de los granos y el vapor, convierte cada taza de café en una obra de arte, esculpiendo sonrisas en cada sorbo</p>        
        </div>

         <div className='component '>
            <img  className='imagen-home'src="./img/coffe-sf.png"/>
            <img  className='imagen-hojas'src="./img/hojas-sf.png"/>
         </div>
        
         
    </div>
     <p   className='oferta'>NUESTRA INTERESANTE OFERTA DE CURSOS ONLINE</p>


     <div  id='services-section' className='tarjetas'>

     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./img/curso-principiante-uno.jpg" className='curso' />
      <Card.Body>
        <Card.Title>Barista Principiante</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <a href='https://go.hotmart.com/G87437475P?ap=7f1b'>
        <Button className='button' variant="outline-dark">Comprar</Button>
        </a>
        <Button className='button'variant="outline-dark">Más Info</Button>

      </Card.Body>
    </Card>
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./img/curso-avanzado-uno.jpg" className='curso' />
      <Card.Body>
        <Card.Title>Barista Avanzado</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <a href='https://go.hotmart.com/Y87443611U?ap=d27a'>
        <Button className='button' variant="outline-dark">Comprar</Button>
        </a>
        <Button className='button'variant="outline-dark">Más Info</Button>
      </Card.Body>
    </Card>
       
    </div> 

    </div>
     

     
  )
};