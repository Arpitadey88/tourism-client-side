import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import './Details.css'
// import data from './services.json';

const Details = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
    };

    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));

    }, [])


    return (
        <div className="border">

            <h2>Details Information</h2>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-6 border">
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
                    <div className="col-md-6 submit-order">
                        <form onSubmit={handleSubmit(onSubmit)} >

                            <input {...register("name", { required: true })} placeholder="Enter Name" />

                            <input {...register("address")} placeholder="Your Address" />

                            <input {...register("email")} placeholder="Your Email" />

                            <input defaultValue={service.name} {...register("tickets")} placeholder=" Select your destination" />

                            <input type="number" {...register("price")} placeholder="Phone" />

                            <textarea {...register("description")} placeholder="Please type Your Message" />
                            <input type="submit" />
                        </form>
                    </div>
                </div>

                <div className="text-center my-3">
                    <Button className="py-2 rounded-3 border border-warning"><h6>Add Booking</h6></Button>
                </div>
            </div>
        </div>


    );
};

export default Details;