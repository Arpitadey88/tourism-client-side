import React, { useEffect, useState } from 'react';
// import { Button } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://ghastly-beast-92427.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div className="my-4" id="services">
            <h1 className="text-center" style={{ color: 'crimson', fontFamily: 'Tourney, cursive' }}>Smooth travel in one place</h1>
            <h4 className="text-center my-3" style={{ color: 'midnightBlue' }}>Chose Your Next Destination</h4>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 d-flex align-item-center 
            justify-content-center">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}>
                    </Service>)
                }
            </div>

        </div>
    );
};

export default Services;
