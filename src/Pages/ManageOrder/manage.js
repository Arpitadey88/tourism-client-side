import React, { useEffect, useState } from 'react';
import { Table } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './ManageOrder.css';

const ManageOrder = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://tourism-server-side.vercel.app/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);

    // DELETE AN ORDER
    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are you sure, you want to remove??');
        if (proceed) {
            const url = `https://tourism-server-side.vercel.app/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Successfully Deleted Order')
                        const remainingOrders = orders.filter(order => order._id !== id)
                        setOrders(remainingOrders);
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
                            orders.map(order => <tbody key={order._id}>
                                <tr>
                                    <td>{order.userName}</td>
                                    <td>{order.userEmail}</td>
                                    <td>{order.userNumber}</td>
                                    {/* <td><Link className='text-decoration-none' to={`/update/${order._id}`}><button className="btn btn-primary">Edit</button></Link></td> */}
                                    <td><Link className='text-decoration-none'><button className="btn btn-danger" onClick={() => handleDeleteOrder(order._id)}>Remove</button></Link></td>
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