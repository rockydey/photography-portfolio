import React from 'react';
import './Blogs.css';
import { ChevronDoubleRightIcon } from '@heroicons/react/solid'

const Blogs = () => {
    return (
        <div className='container my-5'>
            <section className='mb-3'>
                <div className='d-flex align-items-center mb-4'>
                    <ChevronDoubleRightIcon className='icon'></ChevronDoubleRightIcon>
                    <h3 className='fs-3 mb-0'>Why are you using firebase? What other options do you have to implement authentication?</h3>
                </div>
                <div>
                    <p className='fs-5'><span className='fw-bold'>Answer :</span> Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more. Firebase Authentication makes it easier to get your users signed-in without having to understand the complexities behind implementing your own authentication system.</p>
                </div>
            </section>
            <section className='mb-3'>
                <div className='d-flex align-items-center mb-4'>
                    <ChevronDoubleRightIcon className='icon'></ChevronDoubleRightIcon>
                    <h3 className='fs-3 mb-0'>What other services does firebase provide other than authentication?</h3>
                </div>
                <div>
                    <p className='fs-5'><span className='fw-bold'>Answer :</span>
                        <span> There are many services which Firebase provides, Most useful of them are:</span>
                        <li className='ms-4'>Cloud Firestore,</li>
                        <li className='ms-4'>Cloud Functions,</li>
                        <li className='ms-4'>Hosting,</li>
                        <li className='ms-4'>Cloud Storage,</li>
                        <li className='ms-4'>Google Analytics,</li>
                        <li className='ms-4'>Predictions,</li>
                        <li className='ms-4'>Cloud Messaging,</li>
                        <li className='ms-4'>Cloud Firestore,</li>
                        <li className='ms-4'>Remote Config etc.</li>
                    </p>
                </div>
            </section>
            <section className='mb-3'>
                <div className='d-flex align-items-center mb-4'>
                    <ChevronDoubleRightIcon className='icon'></ChevronDoubleRightIcon>
                    <h3 className='fs-3 mb-0'>What is the difference between authorization and authentication?</h3>
                </div>
                <div>
                    <p className='fs-5'><span className='fw-bold'>Answer :</span>
                        <li className='ms-3'><span className='fw-bold'>Authorization:</span> Authorization is the process of verifying what specific applications, files, and data a user has access to. Authorization always takes place after authentication. While in authorization process, person’s or user’s authorities are checked for accessing the resources. Passwords may not be required. Works through a setting that is implemented by the organization.</li>
                        <li className='ms-3 my-3'><span className='fw-bold'>Authentication:</span>  Authentication is the process of verifying who someone is. Authentication is the first step of a good identity and access management process. In authentication process, the identity of users are checked for providing the access to the system. Entails use of Password, Biometrics, Voice recognition, or Fingerprint access.</li>
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Blogs;