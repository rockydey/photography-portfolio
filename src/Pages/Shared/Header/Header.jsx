import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header id='header' className='bg-dark py-3'>
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/" className='logo-container'><h3 className='text-white'>DAVIS PHOTOGRAPHY</h3></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ms-auto navbar-container d-flex align-items-center">
                                <Link className='me-lg-5 mt-3 mt-lg-0' to="/home">Home</Link>
                                <Link className='me-lg-5 mt-3 mt-lg-0' to="/about">About Me</Link>
                                <Link className='me-lg-5 mt-3 mt-lg-0' to="/blogs">Blogs</Link>
                                <Link className='me-lg-5 mt-3 mt-lg-0' to="/checkout">Checkout</Link>
                                <Link to="/login" className='mt-3 mt-lg-0'><button className='border-0 rounded-pill btn-login text-white'>Login</button></Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </header>
    );
};

export default Header;