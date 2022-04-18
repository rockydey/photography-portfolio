import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import google from '../../images/social/google.png';
import { useSignInWithGoogle, useSignInWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/home";

    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, user1, error,] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    const handleEmail = event => {
        setEmail(event.target.value);
    };
    const handlePassword = event => {
        setPassword(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    };

    const resetPassword = async () => {
        await sendPasswordResetEmail(email);
        toast("Reset Password Email Sent!");
    };

    if (user || user1) {
        navigate(from, { replace: true });
    }

    return (
        <div className='container mx-auto login-form p-4 my-5 rounded-3'>
            <h3>To continue, log in to Davis Photography.</h3>
            <div className='google-login'>
                <button onClick={() => signInWithGoogle()} className='w-100 rounded-pill text-uppercase mt-3 mb-4 d-flex align-items-center justify-content-center'><img width={18} className='me-2' src={google} alt="" /> <span>Continue With Google</span></button>
                <div className='d-flex align-items-center mx-1 mb-3'>
                    <div style={{ height: "1px" }} className='bg-secondary opacity-25 w-50'></div>
                    <p className='mb-1 px-2'>Or</p>
                    <div style={{ height: "1px" }} className='bg-secondary opacity-25 w-50'></div>
                </div>
            </div>

            <form onSubmit={handleSubmit}>
                <label className='mb-2' htmlFor="email">Email Address</label>
                <input onBlur={handleEmail} className='mb-3 rounded-3' type="email" name="email" id="email" placeholder='Enter Your Email' />
                <label className='mb-2' htmlFor="password">Password</label>
                <input onBlur={handlePassword} className='mb-3 rounded-3' type="password" name="password" id="password" placeholder='Enter Your Password' />
                <p className='text-danger'>
                    {error?.message}
                </p>
                <div className='d-flex justify-content-between align-items-center'>
                    <p onClick={resetPassword} className='mb-0'>Forget Your Password?</p>
                    <input className='submit-btn text-white rounded-pill ms-auto' type="submit" value="Login" />
                </div>
            </form>

            <div className='have-account text-center'>
                <div className='line my-4 mx-1'></div>
                <p className='fw-bold'>Don't have an account?</p>
                <Link to='/signup'><button className='w-100 rounded-pill text-uppercase'>Create New Account</button></Link>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;