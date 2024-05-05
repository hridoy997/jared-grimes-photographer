import React from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {

    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        navigate('/orderSuccessful');
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <h2 className="mb-4">Proceed to Checkout</h2>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Order Summary</h5>
                            {/* Add order summary or details here */}
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group mt-4">
                            <label htmlFor="fullName">Full Name</label>
                            <input type="text" className="form-control" id="fullName" placeholder="Enter your full name" required/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <input type="tel" className="form-control" id="phoneNumber" placeholder="Enter your phone number" required/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter your email address" required/>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <textarea className="form-control" id="address" rows="3" placeholder="Enter your address" required></textarea>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="paymentMethod">Payment Method</label>
                            <div className="input-group">
                                <select className="form-control" id="paymentMethod">
                                    <option>PayPal</option>
                                    <option>Credit Card</option>
                                    {/* Add more payment options if needed */}
                                </select>
                                
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary mt-3">Proceed to Payment</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
