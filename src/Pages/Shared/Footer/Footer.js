import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (

        <footer className="bg-dark text-light py-5 mt-5">
            <div className="container">
                <div className="row">
                <div className="col-md-6">
                    <h5>About Jared Grimes</h5>
                    <p>Insert a brief description or bio about Jared Grimes here.</p>
                </div>
                <div className="col-md-3">
                    <h5>Quick Links</h5>
                    <ul className="list-unstyled">
                    <li><Link className="text-light">Home</Link></li>
                    <li><Link className="text-light">Gallery</Link></li>
                    <li><Link className="text-light">About</Link></li>
                    <li><Link className="text-light">Contact</Link></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h5>Contact Info</h5>
                    <ul className="list-unstyled">
                    <li>Email: jared@example.com</li>
                    <li>Phone: +1234567890</li>
                    <li>Address: 123 Street, City, Country</li>
                    </ul>
                </div>
                </div>
                <hr className="my-4" />
                <p className="text-center">© {year} Jared Grimes Photographer. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;