import React from 'react';
import about1 from '../../../assets/img/about-1.jpg';
import about2 from '../../../assets/img/about-2.jpg';
import about3 from '../../../assets/img/about-3.jpg';
import about4 from '../../../assets/img/about-4.jpg';
import { FaHotel } from 'react-icons/fa';
import { FaUsers, FaUsersGear } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
    AOS.init();
    return (
        <section>
            <div className="hero mt-10">
                <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        <figure
                            data-aos="flip-left"
                            data-aos-duration="3000"
                            className='overflow-hidden'>
                            <img src={about1} alt="" className='border-2 border-amber-400 lg:w-44 hover:scale-125 transition duration-500 cursor-pointer' />
                        </figure>
                        <figure
                            data-aos="flip-left"
                            data-aos-duration="3000"
                            className='overflow-hidden'>
                            <img src={about2} alt="" className='border-2 border-amber-400 lg:w-44 hover:scale-125 transition duration-500 cursor-pointer' />
                        </figure>
                        <figure
                            data-aos="flip-left"
                            data-aos-duration="3000"
                            className='overflow-hidden'>
                            <img src={about3} alt="" className='border-2 border-amber-400 lg:w-44 hover:scale-125 transition duration-500 cursor-pointer' />
                        </figure>
                        <figure
                            data-aos="flip-left"
                            data-aos-duration="3000"
                            className='overflow-hidden'>
                            <img src={about4} alt="" className='border-2 border-amber-400 lg:w-44 hover:scale-125 transition duration-500 cursor-pointer' />
                        </figure>
                    </div>
                    <div className='lg:w-1/2'>
                        <h3 className='text-xl lg:text-2xl mb-5 font-bold text-amber-500'>ABOUT US</h3>
                        <h1 className="text-3xl lg:text-5xl font-bold">Welcome to <span className='text-amber-500'>HOTELIER</span></h1>
                        <p className="py-6">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        <div>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

                                <div className="border-2 flex flex-col justify-center items-center p-10">
                                    <p><FaHotel className='w-64 text-4xl text-amber-500'></FaHotel></p>
                                    <div className="stat-value">1000</div>
                                    <p className='text-slate-600'>Rooms</p>
                                </div>

                                <div className="border-2 flex flex-col justify-center items-center p-10">
                                    <p><FaUsersGear className='w-64 text-4xl text-amber-500'></FaUsersGear></p>
                                    <div className="stat-value">1,200</div>
                                    <p className='text-slate-600'>Staffs</p>
                                </div>

                                <div className="border-2 flex flex-col justify-center items-center p-10">
                                    <p><FaUsers className='w-64 text-4xl text-amber-500'></FaUsers></p>
                                    <div className="stat-value">1,200</div>
                                    <p className='text-slate-600'>Clients</p>
                                </div>

                            </div>
                        </div>
                        <button className="btn btn-warning text-white mt-5">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;