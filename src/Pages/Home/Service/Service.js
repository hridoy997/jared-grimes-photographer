import React from 'react';

const Service = ({service}) => {
    const {name,img, price, description} = service;
    return (
        <div className='w-100 mb-5'>
            <img width={300} src={img} alt="" srcSet="" />
            <h1>{name}</h1>
            <h4>$ {price}</h4>
            <p className='p-1'>{description.slice(0, 100)}</p>
            <button className='btn btn-secondary border'>{name} Service Purchase</button>
        </div>
    );
};

export default Service;