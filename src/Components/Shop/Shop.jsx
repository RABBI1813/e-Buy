import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart)
    }


    return (
        <div className='shop-container'>
            <div className="product-container">

                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                        handleAddToCart={handleAddToCart}
                    />)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                />
            </div>

        </div>
    );
};

export default Shop;