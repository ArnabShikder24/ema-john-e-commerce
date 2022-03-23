import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = ({product, addToCart}) => {
    const {img, name, price, seller, ratings} = product;
    return (
        <div className='product'>
            <div className='product-img'>
                <img src={img} alt="product" />
            </div>
            <div className='product-info'>
                <h4>{name}</h4>
                <p className='info-price'>Price: ${price}</p>
                <p><small>Manufacturer: {seller}</small></p>
                <p><small>Rating: {ratings}</small></p>
            </div>
            <button onClick={() => addToCart(product)}>
                Add to Cart
                <FontAwesomeIcon style={{paddingLeft: '5px'}} icon={faCartPlus}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;