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

// https://i.ibb.co/92C2sWh/1.png
// https://i.ibb.co/NTG20z4/2.jpg
// https://i.ibb.co/7G9BYz5/3.jpg
// https://i.ibb.co/WP812qY/4.png
// https://i.ibb.co/hVR7tTw/5.jpg
// https://i.ibb.co/b7RPBMQ/6.jpg
// https://i.ibb.co/1Jkv2P3/7.jpg
// https://i.ibb.co/YpvhtyR/8.jpg
// https://i.ibb.co/X8fGb7d/9.png