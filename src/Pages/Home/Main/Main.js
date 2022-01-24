import React from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from '../../../image/banner6.jpg';
import banner2 from '../../../image/banner2.jpg';
import banner3 from '../../../image/banner1.jpg';
import './Main.css';

const Banner = () => {
    return (
        <div>
            <div id="banner" style={{
                height: '570px'
            }} className="card mb-3 rounded-2 border">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100" style={{
                                height: '570px'
                            }}
                            src={banner1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h1 className="fw-bold" style={{
                                color: 'white'
                            }}>Thinking Of Taking A Break From Everyday's Busy Life ??</h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100" style={{ height: '570px' }}
                            src={banner2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h1 className="fw-bold" style={{ color: 'white' }}>Planning To Go Out To Have some Fun And Quality Time n A Cost Effective Way!</h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100" style={{ height: '570px' }}
                            src={banner3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h1 className="fs-1 fw-bold" style={{ color: 'white' }}>Let Us Help You Plan Your Tour!!</h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div >
    );
};

export default Banner;


