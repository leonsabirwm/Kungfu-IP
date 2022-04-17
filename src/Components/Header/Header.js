import React from 'react';
import { Container, Nav,Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from "firebase/auth";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const handleSignOut = () =>{
    signOut(auth);
  }
    return (
        <div>
          
             <Navbar collapseOnSelect expand="lg" fixed='top' bg="danger" variant="dark">
    <Container>
    <Navbar.Brand  className='text-white' as={Link} to="/">Kung Fu - IP</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
    <Nav className="">
      <Nav.Link className='text-white' as={Link} to="/">Home</Nav.Link>
      <Nav.Link className='text-white' as={Link} to="/blogs">Blogs</Nav.Link>
      <Nav.Link className='text-white' as={Link} to="/about">About</Nav.Link>
     
     {user?<button className='bg-danger text-white border-0' onClick={handleSignOut}>Sign Out</button>:<Nav.Link className='text-white' as={Link} to="/login">Login</Nav.Link> }
    </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar> 
        </div>
    );
};

export default Header;