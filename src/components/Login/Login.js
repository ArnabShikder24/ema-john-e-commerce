import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='marginTop main-flex-container'>
            <div className='form-container'>
                <h2 className='form-title'>Login</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email'/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password'/>
                    </div>
                    <div className="input-group">
                        <input type="submit" value="Login" />
                    </div>
                </form>
                <p className='if-new'>
                    New to Ema-John? <Link to='/signup'>Create New Account</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;