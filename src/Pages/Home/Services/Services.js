import React, { useEffect, useState } from 'react';
// import { Button } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div className="my-md-5 my-3 container" id="services">
             <h4 className="text-center font-google" style={{ color: 'orange' }}>Chose Your Next Destination</h4>
            <h1 className="text-center" style={{ color: '#350A4E', fontFamily: 'Tourney, cursive' }}>Smooth travel in one place</h1>
           
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
