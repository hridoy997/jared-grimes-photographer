import React from 'react';
import Service from '../Service/Service';
import './Services.css';
import image1 from '../../../Images/services/1.jpg';
import image2 from '../../../Images/services/2.jpg';
import image3 from '../../../Images/services/3.jpg';
import image4 from '../../../Images/services/4.jpg';

const Services = () => {

    const services = [
        {id:1, name:'Landscape', price:100,img:image1, description:'Landscape photography shows the spaces within the world, sometimes vast and unending, but other times microscopic. Landscape photographs typically capture the presence of nature but can also focus on human-made features or disturbances of landscapes. Landscape photography is done for a variety of reasons.'},
        {id:2,name:'Wedding', price:100,img:image2, description:"Wedding photography is a specialty in photography that is primarily focused on the photography of events and activities relating to weddings. It may include other types of portrait photography of the couple before the official wedding day, such as a pre-wedding engagement session, in which the photographs are later used for the couple's wedding invitations. On the wedding day, the photographer(s) will provide portrait photography as well as documentary photography to document the different wedding events and rituals throughout the day(s)."},
        {id:3,name:'Commercial', price:100,img:image3, description:'Commercial photography is probably best defined as any photography for which the photographer is paid for images rather than works of art. In this light, money could be paid for the subject of the photograph or the photograph itself.'},
        {id:4,name:'Portrait', price:100,img:image4, description:'Natural light portraiture Portrait photography, or portraiture, is a type of photography aimed toward capturing the personality of a person or group of people by using effective lighting, backdrops, and poses. A portrait photograph may be artistic or clinical.'},
    ];
    
    return (
        <div className='services bg-secondary mb-0'>
            <h2 className='p-5'>SERVICES</h2>
            <div className="servise">
                {
                    services.map(service => <Service
                        key={service.id}
                        service = {service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;