import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <div className="container">
                <img src={logo} alt="logo" />
                <div>
                    <Link className='a' to="/shop">Shop</Link>
                    <Link className='a' to="/orders">Orders</Link>
                    <Link className='a' to="/inventory">Inventory</Link>
                    <Link className='a' to="/about">About</Link>
                </div>
            </div>
        </nav>
    );
};

export default Header;