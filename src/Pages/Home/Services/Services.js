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
        <div id="services">
            <h1 style={{ color: 'crimson' }}>OUR DESTINATIONS</h1>
            <h4 className="text-center" style={{ color: 'grey' }}>CHOOSE YOUR NEXT DESTINATION</h4>
            <div className="row row-cols-1 row-cols-md-3">
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
