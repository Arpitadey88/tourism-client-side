import React, { useEffect, useState } from 'react';
import { Table } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './ManageOrder.css';

const ManageOrder = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://ghastly-beast-92427.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure,you want to delete?')
        if (proceed) {
            fetch(`http://localhost:5000/myOrder/${id}`, {
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
                <h2 style={{ color: 'crimson' }}>Manage All Data Here : {orders.length}</h2>

                <div className="border m-3 px-3 py-4">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {
                            orders?.map(order => <tbody key={order._id}>
                                <tr>

                                    <td>{order.userName}</td>
                                    <td>{order.userEmail}</td>
                                    <td>{order.userNumber}</td>
                                    <td><button className="btn btn-danger" onClick={() => handleDelete(order._id)}>Remove</button></td>
                                </tr>
                            </tbody>)
                        }

                    </Table>
                </div>
            </div>
            <div>
                <div className="text-center my-2">
                    <Link className='text-decoration-none' to="/home/services#services"><button className="btn btn-primary px-5 py-2 ">Back Home</button></Link>
                    <Link className='text-decoration-none' to="/myOrder"><button className="btn btn-primary ms-5 px-5 py-2">My Order</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ManageOrder;