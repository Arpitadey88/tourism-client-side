import React from 'react';
import img1 from '../../../image/baggage-sign.png';
import img2 from '../../../image/car.webp';
import img3 from '../../../image/plane.webp';
import img4 from '../../../image/trips.webp';
import img5 from '../../../image/ships.webp';
import img6 from '../../../image/activities.webp';
import './Banner.css';

const Main = () => {
    return (
        <div className="div">
            <div class="container p-0 communication-section">
                <div class="row communication-area mx-auto my-0">
                    <div class="col-md-2 col-6 transports  d-flex align-items-center justify-content-center">
                        <img class="baggage" src={img1} alt="" />
                        <span class="ps-1 fs-6">HOTEL</span>
                    </div>
                    <div class="col-md-2 col-6 transports">
                        <img src={img2} alt="" />
                        <span class="fs-6">CAR RENTALS</span>
                    </div>
                    <div class="col-md-2 col-6 transports">
                        <img src={img3} alt="" />
                        <span class="fs-6">FLIGHTS</span>
                    </div>
                    <div class="col-md-2 col-6 transports">
                        <img src={img4} alt="" />
                        <span class="fs-6">TRIPS</span>
                    </div>
                    <div class="col-md-2 col-6 transports">
                        <img src={img5} alt="" />
                        <span class="fs-6">CRUISES</span>
                    </div>
                    <div class="col-md-2 col-6 transports">
                        <img src={img6} alt="" />
                        <span class="fs-6">ACTIVITIES</span>
                    </div>
                </div>
            </div>
            <div className='m-md-5 m-3 p-3 p-md-5 bg-white ' id="about">
                <div className="row bg d-flex mx-auto">
                    <div className="col-md-6 col-12 d-flex align-items-center ps-md-5">
                        <div>
                            <h1 style={{ color: 'orange', fontFamily: 'Tourney, cursive' }} className="my-1 pb-md-4">Click Travels !!</h1>
                            <h3 style={{ color: 'white', fontFamily: 'Tourney, cursive' }} className="">
                                BEST Travel Management Company
                                <br />
                                BEST Self-Booking Tool
                                <br />
                                Business Travel Awards 2020
                            </h3>
                        </div>
                    </div>

                    <div className=" col-md-6 col-12 text-bg d-flex align-items-center">
                        <div className='px-md-3 mx-md-3 travel-details'>
                            <h2 className="fw-bold text-center mb-md-2" style={{ color: '#fff', fontFamily: 'Tourney, cursive' }}>Travel Smooth!!</h2>
                            <h5 className='text mt-md-2 mx-2 mt-1' style={{ color: '#fff' }}>With our all in one platform for booking and managing trains, flights, hotels and car hire with 24/7 customer support. We provide international travel products and services including Flights, Accommodation, Land transport, Tours, Holiday packages, Visa processing among many other services. With a team of experienced travel professionals we deliver exactly what we promise.</h5>
                        </div>

                    </div>

                </div>

            </div >
        </div>
    );
};

export default Main;