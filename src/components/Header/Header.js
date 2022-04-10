import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <nav className='header'>
            <div className="container">
                <img src={logo} alt="logo" />
                <div>
                    <NavLink className={({ isActive }) => isActive ? 'active' : 'a'} to="/shop">Shop</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'active' : 'a'} to="/orders">Orders</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'active' : 'a'} to="/inventory">Inventory</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'active' : 'a'} to="/about">About</NavLink>
                    {
                        user ?
                        <button onClick={() => signOut(auth)} className='logOut'>Logout</button>
                        :
                        <NavLink className={({ isActive }) => isActive ? 'active' : 'a'} to="/login">Login</NavLink>
                    }
                </div>
            </div>
        </nav>
    );
};


export default Header;