import React, {useEffect, useState} from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [conPassword, setConPassword] = useState('');
    const [error, setError] = useState('');
    const [succesful, setSuccesful] = useState('');
    
    const [createUserWithEmailAndPassword, user, loading,
        userError,] = useCreateUserWithEmailAndPassword(auth)

    const emailBlur = e => setEmail(e.target.value);
    const passwordBlur = e => setPassword(e.target.value);
    const conPasswordBlur = e => setConPassword(e.target.value);

    useEffect(() => {
        if(user) {
            setSuccesful('Sign Up Succesful')
        }
    }, [user])

    const handleCreateUser = e => {
        e.preventDefault();
        if(password !== conPassword) {
            setError('Password did not match!!!');
            return;
        }
        if(password.length < 6) {
            setError('Password must be at least 6 characters')
            return;
        }
        setError('');
        setSuccesful('')
        createUserWithEmailAndPassword(email, password);
    }


    return (
        <div className='marginTop main-flex-container'>
            <div className='form-container'>
                <h2 className='form-title'>Sign Up</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={emailBlur} type="email" name='email' required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={passwordBlur} type="password" name='password' required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-pass">Confirm Password</label>
                        <input onBlur={conPasswordBlur} type="password" name='confirm-pass' required/>
                    </div>
                    <p className='error'>{error}</p>
                    <p className='error'>{userError?.message}</p>
                    <p className='success'>{succesful}</p>
                    <p className='loading'>{loading && 'Loading...'}</p>
                    <div className="input-group">
                        <input type="submit" value="Sign Up" />
                    </div>
                </form>
                <p className='if-new'>
                Already have an account? <Link to='/login'>Login</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;