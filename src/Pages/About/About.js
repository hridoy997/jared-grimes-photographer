import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-5">
            <div className="container">
                <div className="row">
                <div className="col-md-6">
                    <h2 className="mb-4">About Jared Grimes</h2>
                    <p>Jared Grimes is a passionate photographer with over 10 years of experience capturing memorable moments. Specializing in landscape and portrait photography, Jared has a keen eye for detail and a talent for bringing out the best in his subjects.</p>
                    <p>With a background in fine arts and a love for the outdoors, Jared's photography reflects his appreciation for nature and the beauty of the world around us. Whether it's a stunning landscape or a candid portrait, Jared strives to capture the essence of each moment.</p>
                    <p>When he's not behind the lens, Jared enjoys hiking, traveling, and spending time with his family. He believes that life is an adventure waiting to be explored, and his photography is a way to share those adventures with others.</p>
                </div>
                <div className="col-md-6">
                    <img src="https://cdn.pixabay.com/photo/2023/01/18/13/09/camera-7726802_960_720.jpg" alt="Jared Grimes" className="img-fluid rounded" />
                </div>
                </div>
            </div>
        </section>
    );
};

export default About;