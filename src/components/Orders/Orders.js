import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'

const Orders = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);

    const clearCart = () => {
        setCart([])
        deleteShoppingCart()
    }

    const removeProduct = product => {
        const restProducts = cart.filter(item => item.id !== product.id);
        setCart(restProducts);
        removeFromDb(product.id)
    }

    return (
        <div className='shop-container'>
             <div className="product-flex">
                <div>
                    {
                        cart.map(product => <ReviewItem
                            key={product.id}
                            product={product}
                            removeProduct={removeProduct}
                        ></ReviewItem>)
                    }
                </div>
            </div>
            <div className="cart-container">
                <Cart clearCart={clearCart} cart={cart}>
                    <button style={{background: '#FF9900'}}>
                        Proceed Checkout
                        <FontAwesomeIcon style={{paddingLeft: '5px'}} icon={faCreditCard}></FontAwesomeIcon>
                    </button>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;