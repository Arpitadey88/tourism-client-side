import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { _id, name, description, img, location, price } = service;
    return (
        <div className="col-md-4 cols-12">
            <div className="featured-place mx-lg-auto place-img px-3">
                <div className="item">
                    <img className="rounded-top places-img" src={img} alt="" />
                    <button  style={{ backgroundColor: 'orange' }} className="btn  rounded-pill fs-6 px-5 py-1"><span>{location}</span></button>
                    <h2 className='place-name'>{name}</h2>
                    <h6 className='place-price"'>{price}</h6>
                    <p >{description}</p>
                    <Link style={{ textDecoration: 'none' }} to={`/details/${_id}`}><button className="btn btn-gradient my-2 py-2 px-5"> Book Now</button></Link>
                </div>
            </div>
        </div>


    );
};

export default Service;