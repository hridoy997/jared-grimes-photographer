import React from 'react';
import banner from '../../Images/Gallery.png';

const Gallery = () => {
    return (
        <div className="bg-secondary mt-0">
            <div className="row w-100 m-0">
                <div className="col-md-12 p-0">
                    <div className="banner ">
                        <div className="banner-content">
                            <h1>Welcome to Our Gallery</h1>
                            <p>Explore our collection of amazing photos.</p>
                        </div>
                        <img src={banner} alt="Banner" className="img-fluid" />
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Gallery;
