import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='marginTop main-flex-container'>
            <div className='form-container'>
                <h2 className='form-title'>Sign Up</h2>
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
                        <label htmlFor="confirm-pass">Confirm Password</label>
                        <input type="password" name='confirm-pass'/>
                    </div>
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