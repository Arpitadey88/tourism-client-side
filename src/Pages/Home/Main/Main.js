import React from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from '../../../image/banner1.jpg';
import banner2 from '../../../image/banner2.jpg';
import banner3 from '../../../image/banner3.jpg';

const Banner = () => {
    return (
        <div>
            <div id="banner" style={{
                height: '590px'
            }} className="card mb-3 rounded-2">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100" style={{ height: '600px' }}
                            src={banner1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h1 className="fw-bold" style={{ color: 'white', fontFamily: 'Tourney, cursive' }}>Thinking Of Taking A Break From Everyday's Busy Life ??</h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100" style={{ height: '600px' }}
                            src={banner2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h1 className="fw-bold" style={{ color: 'blue', fontFamily: 'Tourney, cursive' }}>Planning To Go Out To Have some Fun And Quality Time n A Cost Effective Way!</h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100" style={{ height: '600px' }}
                            src={banner3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h1 className="fs-1 fw-bold" style={{ color: 'white', fontFamily: 'Tourney, cursive' }}>Let Us Help You Plan Your Tour!!</h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default Banner;


