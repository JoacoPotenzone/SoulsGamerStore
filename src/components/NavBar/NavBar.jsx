import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link} from 'react-router-dom'


const NavBar = () => {
    return(
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <Link className='Brand' to='/'>SoulsGamerStore</Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to={`#Store`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Store</NavLink>
            <NavLink to={`/AboutUs`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>About Us</NavLink>
            <NavLink to={`/Contact`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Contact</NavLink>
            <NavLink to={`/Profile`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Profile</NavLink>
          </Nav>
          <CartWidget></CartWidget>
        </Container>
      </Navbar>
    );
}
export default NavBar