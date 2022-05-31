import React, { useEffect, useState } from 'react';
import { Table } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './ManageOrder.css';

const ManageOrder = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://blooming-fortress-72472.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure,you want to delete?')
        if (proceed) {
            fetch(`https://blooming-fortress-72472.herokuapp.com/logInService/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingUsers = orders.filter(user => user._id !== id);
                        setOrders(remainingUsers);
                    }
                })
        }

    }

    return (
        <div id="manageOrders">
            <div className="text-center">
                <h2 className="py-2">Total Users : {orders.length}</h2>

                <div className="m-2 px-3 py-2">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Service</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {
                            orders?.map(service => <tbody key={service._id}>
                                <tr>

                                    <td>{service?.name}</td>
                                    <td>{service?.email}</td>
                                    <td>{service?.phone}</td>
                                    <td>{service?.order?.location}</td>
                                    <td><button className="btn btn-danger" onClick={() => handleDelete(service._id)}>Remove</button></td>
                                </tr>
                            </tbody>)
                        }

                    </Table>
                </div>
            </div>
            <div>
                <div className="text-center py-2">
                    <Link className='text-decoration-none' to="/home/services#services"><button className="btn btn-primary px-5 py-2 ">Back Home</button></Link>
                    <Link className='text-decoration-none' to="/myOrder"><button className="btn btn-primary ms-5 px-5 py-2">My Order</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ManageOrder;