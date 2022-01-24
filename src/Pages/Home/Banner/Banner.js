import React from 'react';
import { Card, Button } from 'react-bootstrap';
import image from '../../../image/banner8.jpg';
import './Banner.css';

const Main = () => {
    return (
        // <div className=" m-5 p-5 bg-white">
        //     <Card className="rounded-2 border-danger">
        //         <img className="rounded-2 bg" src={image} alt="" />
        //         <Card.ImgOverlay>
        //             <div className="row row-cols-md-2 row-cols-lg-2 row-cols-sm-1  rounded-2 border-primary " >
        //                 <div className="col-md-5">
        //                     <h2 style={{ color: 'red', fontFamily: 'Tourney, cursive' }} className="">Click Travels !!</h2>
        //                     <h4 style={{ color: 'red', fontFamily: 'Tourney, cursive' }} className=" pt-3">
        //                         BEST Travel Management Company
        //                         <br />
        //                         BEST Self-Booking Tool
        //                         <br />
        //                         Business Travel Awards 2020
        //                     </h4>
        //                 </div>

        //                 <div className="col-md-7">
        //                     <h2 className="fw-bold" style={{ color: 'crimson', fontFamily: 'Tourney, cursive' }}>Travel Smooth!!</h2>
        //                     <h6 className='text' style={{ color: 'midnightBlue' }}>With our all in one platform for booking and managing trains, flights, hotels and car hire with 24/7 customer support. We provide international travel products and services including Flights, Accommodation, Land transport, Tours, Holiday packages, Visa processing among many other services. With a team of experienced travel professionals we deliver exactly what we promise. We do what we say and say what we do.</h6>
        //                     {/* <h6> We cater to a wide range of needs including Leisure and Business travel. Having a wide network around the world we provide holiday packages to 100+ destinations. From budget travelers to ultra luxury 7 star tourists we cater to every need. Delivering value for your money is our prime goal.</h6> */}
        //                 </div>
        //             </div>

        //         </Card.ImgOverlay>
        //     </Card>
        // </div>

        <div className='m-5 p-5 bg-white ' id="home">
            <div className="row row-cols-md-2 row-cols-1 bg ms-1 ">
                <div className="col-md-6 d-flex align-items-center ps-5">
                    <div>
                        <h1 style={{ color: 'white', fontFamily: 'Tourney, cursive' }} className="py-3">Click Travels !!</h1>
                        <h3 style={{ color: 'white', fontFamily: 'Tourney, cursive' }} className="">
                            BEST Travel Management Company
                            <br />
                            BEST Self-Booking Tool
                            <br />
                            Business Travel Awards 2020
                        </h3>
                    </div>
                </div>

                <div className=" col-md-6 text-bg d-flex align-items-center justify-content-center">
                    <div className='px-3 mx-3'>
                        <h2 className="fw-bold text-center" style={{ color: 'crimson', fontFamily: 'Tourney, cursive' }}>Travel Smooth!!</h2>
                        <h5 className='text mt-2 mx-2' style={{ color: 'midnightBlue' }}>With our all in one platform for booking and managing trains, flights, hotels and car hire with 24/7 customer support. We provide international travel products and services including Flights, Accommodation, Land transport, Tours, Holiday packages, Visa processing among many other services. With a team of experienced travel professionals we deliver exactly what we promise. We do what we say and say what we do.</h5>
                    </div>

                </div>

            </div>

        </div >
    );
};

export default Main;