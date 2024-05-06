import React from 'react';

const About = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-6">
                    <h2 className="mb-4">About Me</h2>
                    <p>My name is Arman Hossain. I am passionate about Frontend Developer. My goal is to work as a software engineer. I am committed to working hard and continuously improving myself to achieve my goals.</p>
                </div>
                <div className="col-md-6">
                    <img src="https://cdn.pixabay.com/photo/2023/01/18/13/09/camera-7726802_960_720.jpg" alt="Your Photo" className="img-fluid rounded" />
                </div>
            </div>
        </div>
    );
};

export default About;