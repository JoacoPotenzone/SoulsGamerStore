import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget'


const NavBar = () => {
    return(
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">SoulsGamerStore</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#store">Store</Nav.Link>
            <Nav.Link href="#aboutus">About Us</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#profile">Profile</Nav.Link>
          </Nav>
          <CartWidget></CartWidget>
        </Container>

      </Navbar>
    );
}
export default NavBar