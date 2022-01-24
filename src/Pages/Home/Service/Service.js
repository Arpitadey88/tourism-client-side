import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { _id, name, description, img, location, price } = service;
    return (
        <Card style={{ width: '355px', height: '440px' }} className="cart mx-5 my-4 p-0 rounded-3 place-img">
            <div className=""><img className="rounded-top" style={{
                height: '230px', width: '354px'
            }} src={img} alt="" />
            </div>
            <Card.Body className="px-2">
                <h4 style={{ color: 'chocolate' }}>{name}</h4>
                <h6 style={{ color: 'midnightBlue' }}>{location}</h6>
                <h6 style={{ color: 'chocolate' }}>{price}</h6>
                <p style={{ color: 'midnightBlue' }}>{description}</p>
                <Link to={`/details/${_id}`}><button className="btn btn-style my-2"> Book Now </button></Link>
            </Card.Body>
        </Card>


    );
};

export default Service;