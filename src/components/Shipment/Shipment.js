import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [name, setName] = useState('');
    const [address, setaddress] = useState('');
    const [number, setNumber] = useState('');
    const [user] = useAuthState(auth);

    const nameBlur = e => setName(e.target.value);
    const addressBlur = e => setaddress(e.target.value);
    const numberBlur = e => setNumber(e.target.value);

    const handleShipping = e => {
        e.preventDefault();
        const shipping = {name, address, number};
        console.log(shipping);
    }
    return (
        <div className='marginTop main-flex-container'>
            <div className='form-container'>
                <h2 className='form-title'>Shipping Information</h2>
                <form onSubmit={handleShipping}>
                <div className="input-group">
                        <label htmlFor="name">Name</label>
                        <input onBlur={nameBlur} type="text" name='name' required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input readOnly value={user?.email} type="email" name='email' required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Address</label>
                        <input onBlur={addressBlur} type="text" name='address' required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="number">Phone</label>
                        <input onBlur={numberBlur} type="text" name='confirm-pass' required/>
                    </div>
                    <div className="input-group">
                        <input type="submit" value="Add Shipping" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Shipment;