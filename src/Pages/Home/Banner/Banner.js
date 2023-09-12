import React from 'react';
import slide1 from '../../../assets/img/carousel-1.jpg';
import slide2 from '../../../assets/img/carousel-2.jpg';
import './Banner.css'

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <div className='slide1-img'> 
                <img src={slide1} alt='' className="w-full bg-blend-darken backdrop-blur-sm" />
                </div>
                <div className='hidden lg:block absolute  flex-col transform -translate-y-1/2  lg:left-1/3  top-1/2 text-white'>
                    <h4 className='text-center font-bold text-2xl'>LUXURY LIVING</h4>
                    <h1 className='lg:text-6xl font-bold text-amber-400'>Discover A Brand <br /> <span className='lg:ml-5 text-white'>Luxurious Hotel</span></h1>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className='slide2-img'>
                    <img src={slide2} alt='' className="w-full" />
                </div>
                <div className='hidden lg:block absolute  flex-col transform -translate-y-1/2  lg:left-1/3  top-1/2 text-white'>
                    <h4 className='text-center font-bold mb-5'>LUXURY LIVING</h4>
                    <h1 className='lg:text-6xl font-bold text-amber-400'>Discover A Brand <br /> <span className='lg:ml-5 text-white'>Luxurious Hotel</span></h1>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;