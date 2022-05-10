import React from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from '../../../image/index-banner.jpg';
import banner2 from '../../../image/banner6.jpg';
import banner3 from '../../../image/banner9.jpg';
import './Main.css';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Banner = () => {
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || './home';

    const handleViewAllServices = () => {
       history.push('/details');
    }
    return (
        <div id='main'>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="4500">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner ">
                    <div className="carousel-item active">
                        <img src={banner1} className="d-block hero-img" alt="..." />
                        <div className="carousel-caption">
                            <div className="row d-flex justify-content-center align-items-center">
                                <div className="col-md-8 col-12">
                                    <h1 className="hero-heading">Thinking Of <br /> Taking  A Break From <br /> Everyday's Busy Life ??</h1>
                                </div>
                                <div className="col-md-4 col-12">
                                    <button onClick={handleViewAllServices} class="carousel-btn">Find out More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={banner2} className="d-block hero-img" alt="..." />
                        <div className="carousel-caption">
                            <div className="row d-flex justify-content-center align-items-center">
                                <div className="col-md-8 col-12">
                                    <h1 className="hero-heading">Planning To Go Out <br /> To Have Some Quality Time <br /> In A Cost Effective Way!</h1>
                                </div>
                                <div className="col-md-4 col-12">
                                    <button class="carousel-btn ">Find out More</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="carousel-item">
                        <img src={banner3} className="d-block hero-img" alt="..." />
                        <div className="carousel-caption">
                            <div className="row d-flex justify-content-center align-items-center">
                                <div className="col-md-8 col-12">
                                    <h1 className="hero-heading">Let Us Help You Plan <br />  Your Tour With  Cl<span className='hero-span'>i</span>ck Tr<span className='hero-span'>a</span>vel!! </h1>
                                </div>
                                <div className="col-md-4 col-12">
                                    <button class="carousel-btn">Find out More</button>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Banner;


