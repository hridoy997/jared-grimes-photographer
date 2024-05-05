import React from 'react';
import { useNavigate } from 'react-router-dom';
import ServiceDetail from '../../ServiceDetail/ServiceDetail';

const Service = ({service}) => {
    const navigate = useNavigate();
    const {id, name,img, price, description} = service;

    // const navigateToServiceDetail = id => {
    //     // console.log('Clicked');
    //     navigate(`/service/${id}`);
    // }

    // const navigateToServiceDetail = id => {
    //     navigate(`/service/${id}?name=${encodeURIComponent(name)}&img=${encodeURIComponent(img)}&price=${encodeURIComponent(price)}&description=${encodeURIComponent(description)}`);
    // }

    const navigateToServiceDetail = () => {
        navigate(`/service/${id}`, { state: { name, img, price, description } });
    }
    

    return (
        <div className='w-100 mb-5'>
            <img width={300} src={img} alt="" srcSet="" />
            <h1>{name}</h1>
            <h4>$ {price}</h4>
            <p className='p-1'>{description.slice(0, 100)}</p>
            <button onClick={() => navigateToServiceDetail(id)} className='btn btn-secondary border'>{name} Service Purchase</button>
        </div>
    );
};

export default Service;