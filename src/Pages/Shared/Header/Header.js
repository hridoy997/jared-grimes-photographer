import React from 'react';
import './Header.css';
import logo from '../../../Images/logo.png'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';
import { signOut } from 'firebase/auth';

const Header = () => {

    const [user, loading, error] = useAuthState(auth);
    // const [signOut, loading1, error1] = useSignOut(auth);

    if(loading){
        <Loading/>
    }

    const handleSignOut = () =>{
        signOut(auth);
    }

    
    

    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="bg-secondary">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img src={logo} alt="" srcSet="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/services">Services</Nav.Link>
                        <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
                        <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        {
                            user ? 
                            <Nav.Link eventKey={2} as={Link} onClick={handleSignOut}>Sign in</Nav.Link>
                            :
                            <Nav.Link eventKey={2} as={Link} to="/login">Login</Nav.Link>
                        }
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;