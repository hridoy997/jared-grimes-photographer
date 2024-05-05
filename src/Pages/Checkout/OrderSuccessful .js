import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderSuccessful  = () => {

    const navigate = useNavigate();

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 offset-md-2 text-center">
                    <h2>Your Order Was Successful!</h2>
                    <p>Thank you for your purchase.</p>
                    <p>You will receive a confirmation email shortly.</p>
                    <p>Your order details:...</p>
                    {/* Display order details here */}
                    <button onClick={()=>navigate('/')} className="btn btn-primary mt-3">Continue Shopping</button>
                </div>
            </div>
        </div>
    );
};

export default OrderSuccessful ;