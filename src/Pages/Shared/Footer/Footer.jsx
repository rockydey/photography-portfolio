import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    const year = new Date();
    return (
        <footer>
            <div className='footer d-flex flex-column justify-content-center'>
                <div className='container d-flex justify-content-between'>
                    <div className='about'>
                        <h1 className='text-white'>About Me</h1>
                        <p className='text-muted'>My name is Bjarne Davis and I’m professional photographer and retoucher. I’m offering my services to individual and corporate clients throughout the world. Make your favorite life moment or event last and remain in your memory!</p>
                    </div>
                    <div className='newsletter'>
                        <h1 className='text-white'>Newsletter</h1>
                        <p className='text-muted'>Sign up to our newsletter and be the first to know about latest news, special offers, events, and discounts.</p>
                        <input type="email" placeholder='Your Email' className='border-0 rounded-pill' />
                        <input type="submit" value="Submit" className='submit-btn rounded-pill border-0 text-white' />
                    </div>
                </div>
            </div>
            <div className='copyrights'>
                <p className='text-muted text-center'>Copyrights © {year.getFullYear()} <Link to='/'>DAVIS PHOTOGRAPHY</Link> All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;