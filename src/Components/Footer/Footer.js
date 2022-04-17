import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import "./Footer.css"

const Footer = () => {
    return (
        <div className='mt-5 pb-4'>
           <div>
                 <SocialIcon className='mx-2' network="twitter" bgColor="#DC3545"></SocialIcon>
                 <SocialIcon className='mx-2' network="instagram" bgColor="#DC3545"></SocialIcon>
                 <SocialIcon className='mx-2' network="facebook" bgColor="#DC3545"></SocialIcon>
                 <SocialIcon className='mx-2' network="linkedin" bgColor="#DC3545"></SocialIcon>
           </div>
           <div className='d-flex justify-content-center'>
           <Nav.Link className='text-danger fs-5' as={Link} to="/">Home</Nav.Link>
      <Nav.Link className='text-danger fs-5' as={Link} to="/blogs">Blogs</Nav.Link>
      <Nav.Link className='text-danger fs-5' as={Link} to="/about">About</Nav.Link>
           </div>
           <h6><small className='text-danger'>Kung Fu IP copyright © 2022</small></h6>
        </div>
    );
};

export default Footer;