import React from 'react';
import './Product.css';

const Product = ({ product }) => {
    const { name, seller, price, ratings, img } = product;
    return (
        <div className="product">
            <img src={img} alt="" />
            <div className="product-info">
                <h6 className="product-name">{name}</h6>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p><small>Ratings:  {ratings}</small> </p>
            </div>

            <button className="btn-cart">Add to Cart</button>

        </div>
    );
};

export default Product;