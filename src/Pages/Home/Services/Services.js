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
        <div className="my-md-5 my-3 container" id="services">
            <h1 className="text-center" style={{ color: '#350A4E', fontFamily: 'Tourney, cursive' }}>Smooth travel in one place</h1>
            <h4 className="text-center" style={{ color: 'orange' }}>Chose Your Next Destination</h4>
            <div className="row g-4">
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
