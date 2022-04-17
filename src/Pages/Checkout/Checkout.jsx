import { Alert } from 'bootstrap';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Checkout.css';

const Checkout = () => {

    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const [name, setName] = useState('');
    const [number, setNumber] = useState(0);
    const [address, setAddress] = useState('');

    const handleName = event => {
        setName(event.target.value);
    }
    const handleNumber = event => {
        setNumber(event.target.value);
    }
    const handleAddress = event => {
        setAddress(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        navigate('/');
    };

    return (
        <div className='w-50 container mx-auto my-5 p-4 checkout-form'>
            <h3 className='text-center fs-2 fw-bold'>Shipping Information</h3>
            <form onSubmit={handleSubmit} className='d-flex flex-column'>
                <label className='mb-2' htmlFor="name">Your Name</label>
                <input onBlur={handleName} className='mb-3' type="text" name="name" id="name" required />
                <label className='mb-2' htmlFor="email">Your Email</label>
                <input readOnly value={user?.email} className='mb-3' type="email" name="email" id="email" required />
                <label className='mb-2' htmlFor="phone">Your Number</label>
                <input onBlur={handleNumber} className='mb-3' type="number" name="number" id="number" required />
                <label className='mb-2' htmlFor="address">Address</label>
                <textarea onBlur={handleAddress} className='mb-3' name="address" id="address" cols="15" rows="5" required></textarea>
                <input className='rounded-3 submit-btn text-uppercase border-0' type="submit" value="Add Shipping" />
            </form>
        </div>
    );
};

export default Checkout;