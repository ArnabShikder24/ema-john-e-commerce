import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <div className="container">
                <img src={logo} alt="logo" />
                <div>
                    <NavLink className={({ isActive }) => isActive ? 'active' : 'a'} to="/shop">Shop</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'active' : 'a'} to="/orders">Orders</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'active' : 'a'} to="/inventory">Inventory</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'active' : 'a'} to="/about">About</NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Header;