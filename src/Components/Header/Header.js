import React from 'react';
import { Container, Nav,Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
             <Navbar collapseOnSelect expand="lg" sticky='top' bg="danger" variant="dark">
    <Container>
    <Navbar.Brand  className='text-white' as={Link} to="/">Shifu-IP</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
    <Nav className="">
      <Nav.Link className='text-white' as={Link} to="/">Home</Nav.Link>
      <Nav.Link className='text-white' as={Link} to="/blogs">Blogs</Nav.Link>
      <Nav.Link className='text-white' as={Link} to="/about">About</Nav.Link>
    </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar> 
        </div>
    );
};

export default Header;