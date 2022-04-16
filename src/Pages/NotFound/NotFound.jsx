import React from 'react';
import './NotFound.css';
import notFound from '../../images/404/404.png';

const NotFound = () => {
    return (
        <div className='not-found text-center'>
            <img width={1518} src={notFound} alt="" />
        </div>
    );
};

export default NotFound;