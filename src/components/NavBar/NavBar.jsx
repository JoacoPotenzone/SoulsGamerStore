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
          <Navbar.Brand href="">
            <Link className='Brand' to='/'>SoulsGamerStore</Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to={`/category/videogame`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Videogames</NavLink>
            <NavLink to={`/category/console`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Console</NavLink>
            <NavLink to={`/category/accesories`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Accesories</NavLink>
          </Nav>
          <CartWidget></CartWidget>
        </Container>
      </Navbar>
    );
}
export default NavBar