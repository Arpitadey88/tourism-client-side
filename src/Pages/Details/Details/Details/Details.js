import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import './Details.css'
// import data from './services.json';

const Details = () => {
    const { user } = useAuth();
    const { serviceId } = useParams();
    const [orders, setOrders] = useState([])
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setOrders(data));

    }, [serviceId]);

    const onSubmit = data => {
        const orderService = orders
        data.order = orderService;
        fetch('http://localhost:5000/orders', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Order processed successfully.")
                    reset();
                }
            })

    };
    return (
        <div id="details" className="bg-white">
            <div className="card border-0 container ">
                <div className="row g-0">
                    <div className="col-md-6 py-3">
                        <div className="m-3">
                            <img style={{ height: '270px' }} src={orders.img} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="card-body">
                            <h2 style={{ color: 'orange' }} className="card-title">{orders.name}</h2>
                            <h5><small className="text-muted">{orders.location}</small></h5>
                            <h5><small className="text-muted">{orders.duration}</small></h5>
                            <h5><small className="text-muted">{orders.price}</small></h5>
                            <h5><small className="text-muted">{orders.included}</small></h5>
                            <h6><small className="text-muted">{orders.detail}</small></h6>
                        </div>
                    </div>

                    <div className="col-md-6 submit-order pt-4">
                        <h2 className="text-center pb-3 font-google" style={{ color: 'orange' }}>Book Package Now</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input defaultValue={user.displayName} {...register("name")} />
                            <input placeholder="Enter your email" defaultValue={user.email} {...register("email", { required: true })} />
                            <input placeholder="city"  {...register("city")} />
                            <input placeholder="address" {...register("address")} />
                            <input placeholder="enter your number" type="number"{...register("phone")} />
                            {errors.exampleRequired && <span className="text-danger">This field is required</span>}

                            <input type="submit" />
                        </form>
                        <div className="text-center">
                            <Link className="text-decoration-none" to="/myOrder#myOrders"><Button className="mx-5 px-5 py-2 mt-5">See Order</Button></Link>
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