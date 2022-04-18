import React, { useState } from 'react';
import './SignUp.css';
import google from '../../images/social/google.png';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {

    const [agree, setAgree] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [signInWithGoogle, user1, error1] = useSignInWithGoogle(auth);

    const handleEmail = event => {
        setEmail(event.target.value);
    };
    const handlePassword = event => {
        setPassword(event.target.value);
    };
    const handleConfirmPassword = event => {
        setConfirmPassword(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        createUserWithEmailAndPassword(email, password);
        toast("Verification Email Sent!!");
    };

    if (user || user1) {
        navigate('/home');
    }

    return (
        <div className='container mx-auto login-form p-4 my-5 rounded-3'>
            <h3>To continue, log in to Davis Photography.</h3>
            <div className='google-login'>
                <button onClick={() => signInWithGoogle()} className='w-100 rounded-pill text-uppercase mt-3 mb-4 d-flex align-items-center justify-content-center'><img width={18} className='me-2' src={google} alt="" /> <span>Sign up with Google</span></button>
                <div className='d-flex align-items-center mx-1 mb-3'>
                    <div style={{ height: "1px" }} className='bg-secondary opacity-25 w-50'></div>
                    <p className='mb-1 px-2'>Or</p>
                    <div style={{ height: "1px" }} className='bg-secondary opacity-25 w-50'></div>
                </div>
            </div>

            <form onSubmit={handleSubmit}>
                <label className='mb-2' htmlFor="email">Email Address</label>
                <input onBlur={handleEmail} className='mb-3 rounded-3' type="email" name="email" id="email" placeholder='Enter Your Email' required />
                <label className='mb-2' htmlFor="password">Password</label>
                <input onBlur={handlePassword} className='mb-3 rounded-3' type="password" name="password" id="password" placeholder='Enter Your Password' required />
                <label className='mb-2' htmlFor="confirm-password">Confirm Password</label>
                <input onBlur={handleConfirmPassword} className='mb-3 rounded-3' type="password" name="password" id="confirm-password" placeholder='Enter Your Password Again' required />
                <div className='mb-3'>
                    <input onClick={() => setAgree(!agree)} className='me-2' type="checkbox" name="checkbox" id="checkbox" />
                    <label htmlFor='checkbox' className={agree ? "text-success" : "text-danger"}>I accept all terms and conditions.</label>
                </div>
                <input disabled={!agree} className='submit-btn text-white rounded-pill' type="submit" value="Sign Up" />
            </form>

            <div className='have-account text-center'>
                <div className='line my-4 mx-1'></div>
                <p className='fw-bold'>Already have an account?</p>
                <Link to='/login'><button className='w-100 rounded-pill text-uppercase'>Log In Now</button></Link>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SignUp;