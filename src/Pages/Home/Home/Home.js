import React from 'react';
import './Home.css';
import Services from '../Services/Services';
import Banner from '../Banner/Banner';
import Gallery from '../../Gallerys/Gallery/Gallery';

const Home = () => {
    return (
        <div className='home'>
            <Banner/>
            <Services/>
            <Gallery/>
        </div>
    );
};

export default Home;