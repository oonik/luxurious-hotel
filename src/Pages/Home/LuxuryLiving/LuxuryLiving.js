import React from 'react';
import img from '../../../assets/img/video.jpg'

const LuxuryLiving = () => {
    return (
        <div className="hero gap-0 mt-20 bg-indigo-950">
            <div className="hero-content flex-col lg:flex-row-reverse overflow-hidden">
                <img src={img} alt='' className="rounded-lg lg:w-1/2 hover:scale-125 transition duration-500 cursor-pointer" />
                <div className='w-1/2 lg:ml-2'>
                    <h3 className='text-xl lg:text-2xl font-bold text-amber-500 mb-2'>LUXURY LIVING</h3>
                    <h1 className="text-3xl lg:text-5xl font-bold text-white">Discover A Brand Luxurious Hotel</h1>
                    <p className="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <div className='flex justify-center items-center lg:justify-start'>
                        <button className="btn bg-black text-white btn-md rounded-none px-6">OUR ROOMS</button>
                        <button className="btn btn-warning btn-md rounded-none ml-4">BOOK A ROOM</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LuxuryLiving;