import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdateOrder = () => {
    const { id } = useParams();
    const [order, setOrder] = useState({});

    useEffect(() => {
        const url = `https://blooming-fortress-72472.herokuapp.com/orders/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrder(data));
    }, [id]);

    const handleNameChange = e => {
        const updatedName = e.target.value;
        const updatedOrder = { name: updatedName, email: order.email };
        setOrder(updatedOrder);
    }

    const handleEmailChange = e => {
        const updatedEmail = e.target.value;
        const updatedOrder = { name: order.name, email: updatedEmail };
        setOrder(updatedOrder);
    }

    const handleUpdateOrder = e => {
        const url = `https://blooming-fortress-72472.herokuapp.com/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Updated Successfully.')
                    setOrder({});
                }
            })
        e.preventdefault();
    }

    return (
        <div className="text-center py-3">
            <h1 className="text-cenetr" style={{ color: 'chocolate' }}>Update Order: {order.userEmail}</h1>
            <p>{id}</p>
            <form className="border mx-3 py-5" onSubmit={handleUpdateOrder}>
                <input className="px-3 py-2" type="text" onChange={handleNameChange} value={order.userName || ''} />
                <input className="px-3 py-2" type="email" onChange={handleEmailChange} value={order.userEmail || ''} />
                <input className="px-3 py-2" style={{ backgroundColor: 'crimson', color: 'white' }} type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateOrder;