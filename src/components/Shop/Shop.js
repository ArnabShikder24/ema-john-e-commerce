import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart, deleteShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart)
    }, [products]);

    const addToCart = (clickedProduct) => {
        let newCart = [];
        const exists = cart.find(product => product.id === clickedProduct.id);
        if(!exists) {
            clickedProduct.quantity = 1;
            newCart = [...cart, clickedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== clickedProduct.id);
            exists.quantity += 1
            newCart = [...rest, exists]
        }
        setCart(newCart)
        addToDb(clickedProduct.id)
    }

    const clearCart = () => {
        setCart([])
        deleteShoppingCart()
    }

    return (
        <div className='shop-container'>
            <div className="product-flex">
                <div className='products-container'>
                    {
                        products.map(product => <Product
                            product={product}
                            key={product.id}
                            addToCart={addToCart}
                            ></Product>
                        )
                    }
                </div>      
            </div>
            <div className="cart-container">          
                <Cart clearCart={clearCart} cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;