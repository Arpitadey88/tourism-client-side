import React from 'react';
import { Card, Button } from 'react-bootstrap';
import image from '../../../image/banner6.jpg';

const Main = () => {
    return (
        <div id="home">
            <div className="row g-0">
                <div className="col-md-6">
                    <Card className="container-fluid rounded-2">
                        <Card.Img className="banner-img" src={image} alt="Card image" />
                        <Card.ImgOverlay>
                            <div className="container-fluid mb-5">
                                <h2 className="text-white mt-5 mb-3">Travel Smooth</h2>

                                <p className="text-white mb-3"> <b>With our all in one platform for booking and managing trains, flights, hotels and car hire with 24/7 customer support, business travel has never been smoother.</b>
                                </p>
                                <h6 className="text-white py-3">
                                    BEST Travel Management Company
                                    <br />
                                    BEST Self-Booking Tool
                                    <br />
                                    Business Travel Awards 2020
                                </h6>
                            </div>

                            <div>
                                <Button className="py-2 rounded-pill border border-warning"><h6>Book A Demo</h6></Button>
                                <Button className="ms-4 py-2 rounded-pill border border-warning"><h6 >Enquire now</h6></Button>
                            </div>
                        </Card.ImgOverlay>
                    </Card>
                </div>
                <div className="col-md-6" style={{ backgroundColor: 'azure' }}>
                    <div className="text-center mx-5 mt-5">
                        <h2 className="card-title fw-bold" style={{ color: 'crimson' }}>About Us</h2>
                        <h5 className="card-text pt-2" style={{ color: 'midnightBlue' }}> We provide international travel products and services including Flights, Accommodation, Land transport, Tours, Holiday packages, Visa processing among many other services. We cater to a wide range of needs including Leisure and Business travel. Having a wide network around the world we provide holiday packages to 100+ destinations. From budget travelers to ultra luxury 7 star tourists we cater to every need. Delivering value for your money is our prime goal. With a team of experienced travel professionals we deliver exactly what we promise. We do what we say and say what we do. </h5>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;