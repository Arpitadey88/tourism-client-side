import React, { useEffect } from 'react';
import { useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const MyOrder = () => {
    const { user } = useAuth();
    const [services, setServices] = useState([])
    console.log("orders service", services);

    useEffect(() => {
        const key = { email: user.email };
        fetch('https://blooming-fortress-72472.herokuapp.com/myOrder', {
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

    }, [])


    const handelDelete = id => {
        const proceed = window.confirm('Are you sure,you want to delete?')
        if (proceed) {
            fetch(`https://blooming-fortress-72472.herokuapp.com/myOrder/${id}`, {
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
        <div id="myOrders">
            <h3 className="text-center primary-color">Your Order list {services.length}</h3>
            <div className="container my-5">

                <Table striped bordered hover variant="light">
                    <thead>
                        <tr>

                            <th>User Name</th>
                            {/* <th>User Address</th> */}
                            <th>Service Name</th>
                            <th>Price</th>
                            <th>Service Image</th>
                            <th>Action</th>
                        </tr>
                    </thead>



                    {
                        services.map(service =>
                            <tbody key={service._id}>
                                <tr>
                                    <td>{service?.userName}</td>
                                    {/* <td>{service?.Address}</td> */}
                                    <td>{service?.userDestination}</td>
                                    <td>{service?.tourPrice}</td>
                                    <td className="w-25"><img src={service?.tourImg} className="w-25" alt="" /></td>
                                    <td><button onClick={() => handelDelete(service?._id)} className="btn btn-danger">Remove</button></td>
                                </tr>

                            </tbody>
                        )
                    }
                </Table>
                <div className='text-center'>
                    <Link className='text-decoration-none' to="/home/services#services"><button className="btn btn-primary px-5 py-2 ">Back Home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;