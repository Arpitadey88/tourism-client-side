import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageOrder = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://ghastly-beast-92427.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);

    // DELETE AN ORDER
    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are you sure, you want to remove??');
        if (proceed) {
            const url = `https://ghastly-beast-92427.herokuapp.com/orders/${id}`;
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
                <h2 style={{ color: 'crimson' }}>Order to Place: {orders.length}</h2>

                <div className="border m-3 px-3 py-4">

                    {
                        orders.map(order => <ul key={order._id}>

                            <table class="table border ps-3">
                                <tbody>
                                    <td>{order.userEmail}</td>
                                    <td>{order.userName}</td>
                                    <td>{order.userNumber}</td>
                                    <td><Link to={`/update/${order._id}`}><button className="btn btn-primary">Update</button></Link></td>
                                    <td><Link><button className="btn btn-danger" onClick={() => handleDeleteOrder(order._id)}>Remove</button></Link></td>
                                </tbody>
                            </table>

                            {/* {order.userEmail} :: {order.userName}
                            <Link to={`/update/${order._id}`}><button className="btn btn-primary ms-3">Update</button></Link>
                            <button className="btn btn-primary ms-3" onClick={() => handleDeleteOrder(order._id)}>Remove</button> */}
                        </ul>)
                    }

                </div>
            </div>
            <div>
                <div className="text-center my-2">
                    <Link to="/home/services#services"><button className="btn btn-primary px-5 py-2 ">Back Home</button></Link>
                    <Link to="/myOrder"><button className="btn btn-primary ms-5 px-5 py-2">My Order</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ManageOrder;