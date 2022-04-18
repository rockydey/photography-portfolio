import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
    return (
        <header id='header' className='bg-dark py-3'>
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Link to="/" className='logo-container'><h3 className='text-white'>DAVIS <span>PHOTOGRAPHY</span></h3></Link>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ms-auto navbar-container d-flex align-items-center">
                                <Link className='me-lg-5 mt-3 mt-lg-0' to="/home">Home</Link>
                                <Link className='me-lg-5 mt-3 mt-lg-0' to="/about">About Me</Link>
                                <Link className='me-lg-5 mt-3 mt-lg-0' to="/blogs">Blogs</Link>
                                <Link className='me-lg-5 mt-3 mt-lg-0' to="/checkout">Checkout</Link>
                                {
                                    user ? <button onClick={logout} className='border-0 rounded-pill btn-login text-white mt-3 mt-lg-0'>Log out</button> : <Link to="/login" className='mt-3 mt-lg-0'><button className='border-0 rounded-pill btn-login text-white'>Log in</button></Link>
                                }
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </header>
    );
};

export default Header;