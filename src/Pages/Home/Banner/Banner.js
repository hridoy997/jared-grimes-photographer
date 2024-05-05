import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import banner1 from '../../../Images/banner/banner1.jpg'
import banner2 from '../../../Images/banner/banner2.jpg'
import banner3 from '../../../Images/banner/banner3.jpg'
import banner4 from '../../../Images/banner/banner4.jpg'

const Banner = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    }

    return (
        <Carousel className="bg-secondary p-lg-5" activeIndex={index} onSelect={handleSelect}>
        {/* <Carousel > */}

            <Carousel.Item>
                <img height={550}
                    className="d-block w-100 rounded"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Portrait</h3>
                    <p>Natural light portraiture Portrait photography, or portraiture, is a type of photography aimed toward capturing the personality of a person or group of people by using effective lighting, backdrops, and poses. A portrait photograph may be artistic or clinical.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img height={550}
                    className="d-block w-100 rounded"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Landscape</h3>
                    <p>Landscape photography shows the spaces within the world, sometimes vast and unending, but other times microscopic. Landscape photographs typically capture the presence of nature but can also focus on human-made features or disturbances of landscapes. Landscape photography is done for a variety of reasons.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img height={550}
                    className="d-block w-100 rounded"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Wedding</h3>
                    <p>Wedding photography is a specialty in photography that is primarily focused on the photography of events and activities relating to weddings. It may include other types of portrait photography of the couple before the official wedding day, such as a pre-wedding engagement session, in which the photographs are later used for the couple's wedding invitations. On the wedding day, the photographer(s) will provide portrait photography as well as documentary photography to document the different wedding events and rituals throughout the day(s).</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img height={550}
                    className="d-block w-100 rounded"
                    src={banner4}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Commercial</h3>
                    <p>Commercial photography is probably best defined as any photography for which the photographer is paid for images rather than works of art. In this light, money could be paid for the subject of the photograph or the photograph itself. </p>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
  );
};

export default Banner;
