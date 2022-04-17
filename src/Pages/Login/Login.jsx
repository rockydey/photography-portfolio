import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import google from '../../images/social/google.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if (user) {
        navigate('/home');
    }
    return (
        <div className='w-25 container mx-auto login-form p-4 my-5 rounded-3'>
            <h3>To continue, log in to Davis Photography.</h3>
            <div className='google-login'>
                <button onClick={() => signInWithGoogle()} className='w-100 rounded-pill text-uppercase mt-3 mb-4 d-flex align-items-center justify-content-center'><img width={18} className='me-2' src={google} alt="" /> <span>Continue With Google</span></button>
                <div className='d-flex align-items-center mx-1 mb-3'>
                    <div style={{ height: "1px" }} className='bg-secondary opacity-25 w-50'></div>
                    <p className='mb-1 px-2'>Or</p>
                    <div style={{ height: "1px" }} className='bg-secondary opacity-25 w-50'></div>
                </div>
            </div>
            <form>
                <label className='mb-2' htmlFor="email">Email Address</label>
                <input className='mb-3 rounded-3' type="email" name="email" id="email" placeholder='Enter Your Email' />
                <label className='mb-2' htmlFor="password">Password</label>
                <input className='mb-3 rounded-3' type="password" name="password" id="password" placeholder='Enter Your Password' />
                <div className='d-flex justify-content-between align-items-center'>
                    <p className='mb-0'>Forget Your Password?</p>
                    <input className='submit-btn text-white rounded-pill ms-auto' type="submit" value="Login" />
                </div>
            </form>
            <div className='have-account text-center'>
                <div className='line my-4 mx-1'></div>
                <p className='fw-bold'>Don't have an account?</p>
                <Link to='/signup'><button className='w-100 rounded-pill text-uppercase'>Create New Account</button></Link>
            </div>
        </div>
    );
};

export default Login;