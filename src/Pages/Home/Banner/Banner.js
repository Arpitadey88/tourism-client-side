import React from 'react';
import { Card, Button } from 'react-bootstrap';
import image from '../../../image/banner7.jpg';
import './Banner.css';

const Main = () => {
    return (
        <div className='mx-5 py-5' id="home">
            <div className="row row-cols-1 row-cols-lg-2 bg-light mx-5 px-5 py-5">
                <div className="col-md-6 text-center">
                    <Card className="rounded-2 border-0 ">
                        <img className="p-2 rounded-2 bg" src={image} alt="" />
                        <Card.ImgOverlay>
                            <div className="py-5 ps-3">
                                <h2 style={{ color: 'white', fontFamily: 'Tourney, cursive' }} className="">Click Travels !!</h2>
                                <h4 style={{ color: 'white', fontFamily: 'Tourney, cursive' }} className="mt-5 pt-3">
                                    BEST Travel Management Company
                                    <br />
                                    BEST Self-Booking Tool
                                    <br />
                                    Business Travel Awards 2020
                                </h4>
                            </div>
                            {/* <div className='ps-3 pt-3'>
                                <Button className="py-2 rounded-pill border border-warning"><h6>Book A Demo</h6></Button>
                                <Button className="ms-4 py-2 rounded-pill border border-warning"><h6 >Enquire now</h6></Button>
                            </div> */}
                        </Card.ImgOverlay>
                    </Card>
                </div>
                <div className="col-md-6">
                    <div className="mt-1 mx-5 py-2">
                        <h2 className=" text-center fw-bold" style={{ color: 'crimson', fontFamily: 'Tourney, cursive' }}>Travel Smooth!!</h2>
                        <h6 style={{ color: 'midnightBlue' }}>With our all in one platform for booking and managing trains, flights, hotels and car hire with 24/7 customer support. We provide international travel products and services including Flights, Accommodation, Land transport, Tours, Holiday packages, Visa processing among many other services. We cater to a wide range of needs including Leisure and Business travel. Having a wide network around the world we provide holiday packages to 100+ destinations. From budget travelers to ultra luxury 7 star tourists we cater to every need. Delivering value for your money is our prime goal. With a team of experienced travel professionals we deliver exactly what we promise. We do what we say and say what we do.</h6>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default Main;