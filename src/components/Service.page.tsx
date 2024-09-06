import serviceImage from '../assets/png/service-photo.png';
import React from 'react';
import '../css/service-page.css';

const Service: React.FC = () => {
    return (
        <div className='h-screen flex flex-col mr-10 mt-5 services-container'>
            <div className='flex justify-end'>
                <h1 className='font-clash-grotesk-bold text-8xl relative z-10 take-title'>TAKE YOUR </h1> 
                <h1 className='ml-40 -z-10 font-clash-grotesk-bold text-8xl vision-title'>VISION</h1>
            </div>
            <div className='flex flex-col mr-256 items-end second-line'>
                <h1 className='font-clash-grotesk-bold text-8xl second-line-title'>TO THE NEXT</h1>
                <p className='mr-7 font-urbanist your-vision'>your vision, your story</p>
            </div>
            <div className='flex items-end justify-end -mt-40 image-and-title'>
                <h1 className='font-urbanist italic font-extrabold text-8xl level-title'>LEVEL</h1>
                <div className='relative image-container'>
                    <img src={serviceImage} alt="an image with people in motion" />
                </div>
            </div>
            <div className='flex justify-center items-center mt-28 mr-40 description-services'>
                <p className='w-96 font-urbanist'>I bring your vision to life and together we can create a 
                    compelling story. I will thoughtfully consider the placement of elements,
                    colors, fonts and images to craft a cohesive design. All you need to do is share 
                    your story with me. I offer UX/UI design, wireframing and frontend development services.
                </p>
            </div>
        </div>
    );
};

export default Service;