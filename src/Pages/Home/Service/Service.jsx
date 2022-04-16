import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { name, price, picture, description } = service
    return (
        <div className='service rounded-3'>
            <img width={400} src={picture} className="rounded-3" alt="" />
            <div className='mt-4 service-info'>
                <h3 className='px-3'>{name}</h3>
                <p className='px-3 price'>Price: ${price}</p>
                <p className='px-3 description'><small>{description}</small></p>
                <Link to='/checkout' className='px-3'><button className='rounded-pill border-0 text-white'>Proceed Checkout</button></Link>
            </div>
        </div>
    );
};

export default Service;