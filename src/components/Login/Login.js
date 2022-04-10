import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [succesful, setSuccesful] = useState('');
    const [signInWithEmailAndPassword, user, loading, userError,] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const emailBlur = e => setEmail(e.target.value);
    const passwordBlur = e => setPassword(e.target.value);

    useEffect(() => {
        if(user) {
            setSuccesful('Login Succesful');
        }
    }, [user])

    const handelLogin = e => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password)
        .then(() => {
            navigate(from, {replace: true})
        })
    }

    return (
        <div className='marginTop main-flex-container'>
            <div className='form-container'>
                <h2 className='form-title'>Login</h2>
                <form onSubmit={handelLogin}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={emailBlur} type="email" name='email' required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={passwordBlur} type="password" name='password' required/>
                    </div>
                    <p className='error'>{userError?.message}</p>
                    <p className='success'>{succesful}</p>
                    <p className='loading'>{loading && 'Loading...'}</p>
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