import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


function Header(){
return(
       <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Resume</Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#resume">Resume</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#faq">FAQ</Nav.Link>
            <Nav.Link href="#client">Client</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
        </Container>
      </Navbar>
 
)

}

export default Header