import React, { useEffect } from 'react';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './MyOrder.css'

const MyOrder = () => {
    const { user } = useAuth();
    const [services, setServices] = useState([]);
    // console.log("orders service", services);

    useEffect(() => {
        const key = { email: user.email };
        fetch('http://localhost:5000/logInService', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(key)
        })
            .then(res => res.json())
            .then(data => {
                setServices(data);
            }).catch((err) => {
                console.log(err);
            })
    }, [user.email])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure,you want to delete?')
        if (proceed) {
            fetch(`http://localhost:5000/logInService/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingUsers = services.filter(user => user._id !== id);
                        setServices(remainingUsers);
                    }
                })
        }
    }

    return (
        <div  className='container border' id="myOrders">
            <h2 className="text-center py-3">Placed Order :  {services.length}</h2>
            <div className="row row-cols-1 row-cols-md-2">
                {services.length ?
                    services.map(service =>
                        <cart key={service._id}>
                            <div className="col">
                                <div style={{ width: '520px' }} className="card card-design border-0 my-md-2 px-md-3 rounded-3">
                                    <div className="row g-0">
                                        <div className="col-md-6 overflow-hidden my-4">
                                            <img style={{ height: '190px' }} src={service?.order?.img} className="img-fluid rounded-end" alt="..." />
                                        </div>
                                        <div className="col-md-6">
                                            <div className="card-body">
                                                <h5 className="card-title mt-3">{service?.name}</h5>
                                                <p className="card-text google-font my-0">{service?.email}</p>
                                                <p className="card-text text-info my-0"><span className="text-dark"></span>{service?.order?.name}</p>
                                                <p className="card-text text-info my-0"><span className="text-dark">Location </span>{service?.order?.location}</p>
                                                <p className="card-text text-info my-0"><span className="text-dark">Need To Pay: </span>{service?.order?.price}</p>
                                                <button onClick={() => handleDelete(service?._id)} className="btn btn-danger mt-md-2">Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </cart>
                    )
                    :
                    <Card style={{ width: '500px' }} className='border-0 text-center mx-auto my-md-5 w-50 py-md-4'>
                        <h1>Ooops 😥!!</h1>
                        <h3>You didn't books any package yet!!</h3>
                        <h5 className="google-font my-1">please see our lattest offer package 🙂!</h5>
                    </Card>
                }
            </div>

            <div className='text-center py-md-4'>
                <Link className='text-decoration-none' to="/home/services#services"><button className="btn btn-primary px-5 py-2 ">Back Home</button></Link>
            </div>
        </div>
    );
};

export default MyOrder;