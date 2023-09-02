import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {

    let totalPrice = 0;
    let totalShipping = 0;
    for (const product of cart) {
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping;
    }

    const tax = totalPrice * 7 / 100;

    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className="cart">
            <h2>Order summary</h2>
            <p>Selected Items: <span>{cart.length}</span></p>
            <p>Total Product Price : $<span>{totalPrice}</span></p>
            <p>Shipping Cost : $<span>{totalShipping}</span></p>
            <p>Tax Applied: $<span>{tax}</span></p>
            <h4>Grand Total: <span>{grandTotal}</span></h4>

        </div>
    );
};

export default Cart;