import { useEffect, useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
// import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import './Details.css'
// import data from './services.json';

const Details = () => {
    const { user } = useAuth();
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    // const { register} = useForm();

    const nameRef = useRef();
    const emailRef = useRef();
    const numberRef = useRef();
    const destinationRef = useRef();
    const priceRef = useRef();
    const imgRef = useRef();

    const handleAddBooking = e => {
        const userName = nameRef.current.value;
        const userEmail = emailRef.current.value;
        const userNumber = numberRef.current.value;
        const userDestination = destinationRef.current.value;
        const tourPrice = priceRef.current.value;
        const tourImg = imgRef.current.value;

        const newBooking = { userName, userEmail, userNumber, userDestination, tourPrice, tourImg };
        fetch('https://ghastly-beast-92427.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBooking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Booking Confirmed Successfully')
                    e.target.reset();
                }
            })

        e.preventDefault();
    }

    useEffect(() => {
        fetch(`https://ghastly-beast-92427.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));

    }, [])


    return (
        <div id="details" className="bg-white">
            <div className="card border-0 container ">
                <div className="row g-0">
                    <div className="col-md-6 py-3">
                        <div className="m-3">
                            <img style={{ height: '270px' }} src={service.img} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="card-body">
                            <h2 style={{ color: 'orange' }} className="card-title">{service.name}</h2>
                            <h5><small className="text-muted">{service.location}</small></h5>
                            <h5><small className="text-muted">{service.duration}</small></h5>
                            <h5><small className="text-muted">{service.price}</small></h5>
                            <h5><small className="text-muted">{service.included}</small></h5>
                            <h6><small className="text-muted">{service.detail}</small></h6>
                        </div>
                    </div>
                    <div className="col-md-6 submit-order pt-4">
                        <h2 className="text-center pb-3 font-google" style={{ color: 'orange' }}>Book Package Now</h2>
                        <form className="mx-3" onSubmit={handleAddBooking}>
                            <input type="text" ref={destinationRef} defaultValue={service.name} />
                            <br />
                            <input type="text" ref={imgRef} defaultValue={service.img} />
                            <br />
                            <input type="text" ref={priceRef} defaultValue={service.price} />
                            <br />
                            <input type="text" ref={nameRef} placeholder="Enter Name" defaultValue={user.displayName} />
                            <br />
                            <input type="email" ref={emailRef} name="" id="" placeholder="Enter Your Email" defaultValue={user.email} />
                            <br />
                            <input type="number" ref={numberRef} placeholder="Enter Phone Number" />
                            <br />
                            {/* <input type="text" {...register("product_id", { required: true })} value={serviceId} /> */}
                            <input type="submit" value="Submit" />
                        </form>

                        <div className="text-center">
                            <Link className="text-decoration-none" to="/manageOrders#manageOrders"><Button className="mx-5 px-5 py-2 mt-5">See Order</Button></Link>
                        </div>
                    </div>
                    <div className='text-center'>
                        <h6>
                            <Link className="text-decoration-none" to="/home/services#services"> Back To Home Page</Link>
                        </h6>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Details;