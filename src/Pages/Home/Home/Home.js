import React from 'react';
import './Home.css';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Gallery from '../../Gallery/Gallery';

const Home = () => {
    return (
        // <div className='bg-secondary w-100'>
        <div className='home'>
            <Banner/>
            <Services/>
            <Gallery/>
        </div>
    );
};

export default Home;