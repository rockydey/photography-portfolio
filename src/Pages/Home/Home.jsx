import React from 'react';
import useServices from '../../hooks/useServices';
import './Home.css';
import Portfolio from './Portfolio/Portfolio';
import Service from './Service/Service';

const Home = () => {
    const [services] = useServices();
    return (
        <>
            <header className='home d-flex flex-column justify-content-center'>
                <div className='container'>
                    <div className="row">
                        <div className="col-lg-6"></div>
                        <div className="header-text col-lg-6 col-12">
                            <h4 className='text-uppercase mb-3'>I'm Bjarne Davis</h4>
                            <h1 className='text-white'><span>Photographer</span> <br /> & Retoucher</h1>
                            <p className='text-white mt-3'>Photography is a way of feeling, of touching, of loving. What you have caught on film is captured forever. It remembers little things, long after you have forgotten everything.</p>
                            <a href='#portfolio'><button className='header-btn rounded-pill text-uppercase'>View Portfolio</button></a>
                        </div>
                    </div>
                </div>
            </header>
            <section className='service-container container'>
                <h1 className='text-center my-5'>What Services I Provide</h1>
                <div className='services mx-auto my-5'>
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </section>
            <section id='portfolio' className='my-5 portfolio-container'>
                <h1 className='text-center my-5'>Portfolio</h1>
                <Portfolio></Portfolio>
            </section>
        </>
    );
};

export default Home;