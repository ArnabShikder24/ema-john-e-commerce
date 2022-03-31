import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({product, removeProduct}) => {
    const {img, name, price, quantity, shipping} = product;
    return (
        <div className='review-container'>
            <div className='review-content'>
                <div className="review-img">
                    <img src={img} alt={name} />
                </div>
                <div className="review-info">
                    <h3>{name}</h3>
                    <p>Price: <span className='gold'>${price}</span></p>
                    <p>Quantity: <span className='gold'>{quantity}</span></p>
                    <p>Shipping Charge: <span className='gold'>${shipping}</span></p>
                </div>
            </div>
            <div onClick={() => removeProduct(product)} className='review-delete'>
                <FontAwesomeIcon className='review-delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
            </div>
        </div>
    );
};

export default ReviewItem;