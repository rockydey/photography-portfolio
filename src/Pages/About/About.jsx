import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className='about container d-flex flex-column align-items-center'>
            <h1 className='fs-2'>Hi, this is <span className='fw-bold'>Rocky Dey</span>.</h1>
            <p>Studying in Electrical and Electronics Engineering (EEE) at Bangabandhu Sheikh Mujibur Rahman Science and Technology University, Gopalganj</p>
            <p className='mb-3'><span className='fw-bold me-2'>My Goal: </span><small> Life is too short to enjoy well. And everyone needs to have a goal to enjoy this short life. I have many goals to enjoy life well. My main goal is to become a professional web developer. My interest in web since HSC. Even though there was no knowledge about the web then, curiosity arose to know about it. Before enrolling in this course, I knew some basics from YouTube and Google, but I learned a lot about the core of this course. Now my main goal is to know more deeply about this course.</small></p>
            <p className=''><span className='fw-bold me-2'>My RoadMap: </span><small>To achieve my goal i'm trying to follow 8 rules.
                <li className='ms-3'>Break big goals into small tasks.</li>
                <li className='ms-3'>Surround yourself with motivated people.</li>
                <li className='ms-3'>Reward yourself.</li>
                <li className='ms-3'>Give yourself breaks.</li>
                <li className='ms-3'>Remember your “why.”</li>
                <li className='ms-3'>Stay focused.</li>
                <li className='ms-3'>Take care of yourself physically.</li>
                <li className='ms-3'>Start your day with the most important task.</li>
                I'm trying to follow the rules so that i can reach my destination. And i will stay focus till full fill my goal.
            </small></p>
        </div>
    );
};

export default About;