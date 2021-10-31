import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, name, description, img, location, price } = service;
    return (
        <div style={{ height: '400px' }} className="col px-2">
            <Card className="p-2" style={{ backgroundColor: 'azure' }}>
                <Card.Img className="border border-2" style={{ height: '170px' }} variant="top" src={img} />
                <Card.Body>
                    <h4 style={{ color: 'chocolate' }}>{name}</h4>
                    <h6 style={{ color: 'slategrey' }}>{location}</h6>
                    <h6 style={{ color: 'chocolate' }}>{price}</h6>
                    <p style={{ color: 'slategrey' }}>{description}</p>
                    <Link to={`/details/${_id}`}><button className="btn btn-primary"> Book Now </button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;