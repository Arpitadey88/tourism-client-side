import React from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from '../../../image/banner1.jpg';
import banner2 from '../../../image/banner2.jpg';
import banner3 from '../../../image/banner3.jpg';

const Banner = () => {
    return (
        <div>

            <div id="banner" className="card my-3 rounded-2">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100" style={{ height: '400px' }}
                            src={banner1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h2 className="fw-bold" style={{ color: 'crimson' }}>Thinking Of Taking A Break From Everyday's Busy Life ??</h2>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100" style={{ height: '400px' }}
                            src={banner2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h2 className="fw-bold" style={{ color: 'crimson' }}>Planning To Go Out To Have some Fun And Quality Time n A Cost Effective Way!</h2>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100" style={{ height: '400px' }}
                            src={banner3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h2 className="fw-bold" style={{ color: 'crimson' }}>Let Us Help You Plan Your Tour!!</h2>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default Banner;


