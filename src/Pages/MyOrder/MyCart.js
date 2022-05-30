import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
// import MyCart from './MyCart';

const MyOrder = () => {
    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([])
    const [countDelete, setCountDelete] = useState(0);

    useEffect(() => {
        fetch(`http://localhost:5000/myOrders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data));
    }, [countDelete]);

    const handleRemove = id => {
        const url = ``
        const proceed = window.confirm('Are you sure to cancelling this bookings');

        if (proceed) {
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        alert('Cancelled booking successfully');
                        setCountDelete(countDelete + 1);
                    }
                });
        }

    }
   
    return (
        <div className="py-5 text-center container">
            <h2> Orders : {myOrders.length}</h2>
            <h4 className="mt-5 google-font text-warning">yeea my bookings</h4>
            <div className="row g-4 g-md-5">

                {
                    myOrders.map((row) => (
                        <div
                            key={row._id}
                        >
                            {/* <h5>{row.userName}</h5> */}
                            <h5>{row.userDestination}</h5>
                            <h5>{row.tourPrice}</h5>
                            <h6>{row.userEmail}</h6>
                            <h6>{row.userNumber}</h6>
                        </div>    
                    ))
                    
                }
            </div>
            <div>
                <Link className='text-decoration-none' to="/home/services#services"><button className="btn btn-primary px-5 py-2 ">Back Home</button></Link>
            </div>
        </div>
    );
};

export default MyOrder;