import React from 'react';
import './Gallery.css';
import banner from '../../../Images/Gallery.png';
import { Link, Routes } from 'react-router-dom';
import Gallerys from '../Gallerys';
import AllPictures from '../AllPictures/AllPictures';

const Gallery = () => {

    const handelAllPicture = () => {
        console.log('clicked');
    }


    return (
        <div className="bg-secondary mt-0">
            <div className="row w-100 m-0">
                <div className="col-md-12 p-0">
                    <div className="banner ">
                        <div className="banner-content">
                            <h1>Welcome to Our Gallery</h1>
                            <p>Explore our collection of amazing photos.</p>
                        </div>
                        <img src={banner} alt="Banner" className="img-fluid mb-5 p-2" />
                    </div>
                </div>
            </div>
            
            {/* <div className="">
                <div className='d-flex justify-content-around w-100 '>
                    <Link to="gallery/all">All</Link>
                    <Link to="gallery/landscape">Landscape</Link>
                    <Link to="gallery/wedding">Wedding</Link>
                    <Link to="gallery/commercial">Commercial</Link>
                    <Link to="gallery/portrait">Portrait</Link>
                </div>
            </div>

            <div className='Gallery'>
                
            </div> */}
            
        </div>
    );
};

export default Gallery;
