import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();

    const location = useLocation();
    // const { name, img, price, description } = location.state;
    const { name, img, price, description } = location.state || {};
    
    return (
        
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-6">
                    <img src={img} alt={name} className="img-fluid rounded" />
                </div>
                <div className="col-md-6">
                    <h1>{name}</h1>
                    <h5 className="price">Price: ${price}</h5>
                    <p>{description}</p>
                    {/* <button className="btn btn-primary">Add to Cart</button> */}
                    <Link to="/checkout">
                        <button className='btn btn-primary'>Proceed Checkout</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;