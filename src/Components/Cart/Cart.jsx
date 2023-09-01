import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {

    return (
        <div>
            <h2>Order summary</h2>
            <p>Selected Items: {cart.length}</p>
            <p>Total Product Price : { }</p>
            <p>Shipping Cost : { }</p>
            <p>Tax Applied: { }</p>
            <p>Grand Total: { }</p>

        </div>
    );
};

export default Cart;