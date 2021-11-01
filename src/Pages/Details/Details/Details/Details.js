import { useEffect, useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
// import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './Details.css'
// import data from './services.json';

const Details = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    const nameRef = useRef();
    const emailRef = useRef();
    const numberRef = useRef();

    const handleAddBooking = e => {
        const userName = nameRef.current.value;
        const userEmail = emailRef.current.value;
        const userNumber = numberRef.current.value;

        const newBooking = { userName, userEmail, userNumber };
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

    // const { register, handleSubmit } = useForm();
    // const onSubmit = data => {
    //     console.log(data)
    // };

    useEffect(() => {
        fetch(`https://ghastly-beast-92427.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));

    }, [])


    return (
        <div id="details" className="border px-3">

            <h2 className="text-center" style={{ color: 'crimson' }} >Details Information</h2>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-6 border px-4">
                        <div className="m-3">
                            <img src={service.img} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="card-body">
                            <h2 style={{ color: 'brown' }} className="card-title">{service.name}</h2>
                            <h5 style={{ color: 'brown' }} className="card-text"><small className="text-muted">{service.location}</small></h5>
                            <h5 style={{ color: 'brown' }} className="card-text"><small className="text-muted">{service.duration}</small></h5>
                            <h5 style={{ color: 'brown' }} className="card-text"><small className="text-muted">{service.price}</small></h5>
                            <h5 style={{ color: 'brown' }} className="card-text"><small className="text-muted">{service.included}</small></h5>
                            <h6 style={{ color: 'brown' }} className="card-text"><small className="text-muted">{service.detail}</small></h6>
                        </div>
                    </div>
                    <div className="col-md-6 submit-order border">
                        <h2 className="text-center" style={{ color: 'chocolate' }}>Confirm Your Booking</h2>
                        <form className="border mx-3 py-5" onSubmit={handleAddBooking}>
                            <input type="text" defaultValue={service.name} />
                            <br />
                            <input type="text" ref={nameRef} placeholder="Enter Name" />
                            <br />
                            <input type="email" ref={emailRef} name="" id="" placeholder="Enter Your Email" />
                            <br />
                            <input type="number" ref={numberRef} placeholder="Enter Phone Number" />
                            <br />
                            <input type="submit" value="Submit" />
                        </form>

                        <div className="text-center">
                            <Link to="/manageOrders#manageOrders"><Button className="mx-5 px-5 py-2 mt-5">See Order</Button></Link>
                        </div>


                    </div>
                </div>
            </div>
        </div>


    );
};

export default Details;