import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header  id='header' className='bg-dark py-4'>
            <div className='container d-flex justify-content-between align-items-center'>
                <div className="logo-container">
                    <Link to='/'><h3 className='text-white'>DAVIS PHOTOGRAPHY</h3></Link>
                </div>
                <div className="navbar-container">
                    <Link className='me-5' to='/home'>Home</Link>
                    <Link className='me-5' to='/about'>About Me</Link>
                    <Link className='me-5' to='/blogs'>Blogs</Link>
                    <Link className='me-5' to='/checkout'>Checkout</Link>
                    <Link to='/login'><button className='border-0 rounded-pill btn-login text-white'>Login</button></Link>
                </div>
            </div>
        </header>
    );
};

export default Header;