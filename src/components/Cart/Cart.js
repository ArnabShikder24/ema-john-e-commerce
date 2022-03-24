import React from 'react';
import { faArrowRight, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Cart = ({cart, clearCart}) => {
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity += product.quantity;
        total += product.price * product.quantity;
        shipping += product.shipping;
    }
    const tax = parseFloat((total * 0.05).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
                    <h3>Order Summary</h3>
                    <div className='cart-info'>
                        <p>Selected Items: {quantity}</p>
                        <p>Total Price: ${total}</p>
                        <p>Total Shipping: ${shipping}</p>
                        <p>Tax: ${tax}</p>
                        <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
                    </div>
                    <button onClick={clearCart} style={{background: '#FF3030'}}>
                        Clear Cart
                        <FontAwesomeIcon style={{paddingLeft: '5px'}} icon={faTrashAlt}></FontAwesomeIcon>
                    </button><br />
                    <button style={{background: '#FF9900'}}>
                        Review Order
                        <FontAwesomeIcon style={{paddingLeft: '5px'}} icon={faArrowRight}></FontAwesomeIcon>
                    </button>
            </div>
    );
};

export default Cart;