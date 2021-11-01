import React, { useEffect } from 'react';

const MyOrder = () => {
    // My Order
    const email = "deyarpitabanik@gmail.com";
    useEffect(() => {
        fetch(`https://ghastly-beast-92427.herokuapp.com/orders/${email}`)
            .then(res => res.json())
            .then(data =>
                console.log(data));
    }, []);

    return (
        <div id="myOrder">
            <h1>this is my order</h1>
        </div>
    );
};

export default MyOrder;