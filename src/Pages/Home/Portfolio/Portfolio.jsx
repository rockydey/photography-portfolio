import React from 'react';
import './Portfolio.css';
import portfolio1 from '../../../images/portfolio/portfolio-1.jpg'
import portfolio2 from '../../../images/portfolio/portfolio-2.jpg'
import portfolio3 from '../../../images/portfolio/portfolio-3.jpg'
import portfolio4 from '../../../images/portfolio/portfolio-4.jpg'
import portfolio5 from '../../../images/portfolio/portfolio-5.jpg'
import portfolio6 from '../../../images/portfolio/portfolio-6.jpg'
import portfolio7 from '../../../images/portfolio/portfolio-7.jpg'
import portfolio8 from '../../../images/portfolio/portfolio-8.jpg'
import portfolio9 from '../../../images/portfolio/portfolio-9.jpg'


const Portfolio = () => {
    return (
            <div className='container portfolio'>
                <img width={418} className='rounded-3' src={portfolio1} alt="" />
                <img width={418} className='rounded-3' src={portfolio2} alt="" />
                <img width={418} className='rounded-3' src={portfolio3} alt="" />
                <img width={418} className='rounded-3' src={portfolio4} alt="" />
                <img width={418} className='rounded-3' src={portfolio5} alt="" />
                <img width={418} className='rounded-3' src={portfolio6} alt="" />
                <img width={418} className='rounded-3' src={portfolio7} alt="" />
                <img width={418} className='rounded-3' src={portfolio8} alt="" />
                <img width={418} className='rounded-3' src={portfolio9} alt="" />
            </div>
    );
};

export default Portfolio; <h1>This is Portfolio</h1>