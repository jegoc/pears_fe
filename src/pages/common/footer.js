import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

const Footer = () =>{
        return (
          <>
            <Navbar className="sm bg-light shadow-lg" sticky="bottom">
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Terms</Nav.Link>
                    <Nav.Link href="#link">&copy; 2022</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link><SocialIcon url="https://facebook.com/" style={{ height: 25, width: 25 }} /></Nav.Link>
                    <Nav.Link><SocialIcon url="https://youtube.com/" style={{ height: 25, width: 25 }} /></Nav.Link>
                    <Nav.Link><SocialIcon url="https://linkedin.com/" style={{ height: 25, width: 25 }} /></Nav.Link>
                    <Nav.Link><SocialIcon url="https://github.com/" style={{ height: 25, width: 25 }} /></Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
            </>
        );
    }
    
export default Footer;
