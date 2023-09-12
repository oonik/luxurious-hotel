import React from 'react';
import { FaHotel, FaSpa, FaDumbbell } from 'react-icons/fa';
import { BiRestaurant, BiSolidDrink } from "react-icons/bi";
import { MdSportsHandball } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';


const OurServices = () => {
    AOS.init();
    return (
        <section className='text-center mt-20'>
            <h3 className='text-xl lg:text-2xl font-bold text-amber-500'>OUR SERVICES</h3>
            <h1 className='text-3xl lg:text-5xl font-bold '>Explore Our <span className='text-amber-500'>SERVICES</span></h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 m-10'>

                <div
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="500"
                    className=' p-10 flex flex-col items-center shadow-lg text-amber-500 hover:bg-amber-500 hover:text-white'>
                    <div className='border p-2'>
                        <FaHotel className='text-5xl border p-2'></FaHotel>
                    </div>
                    <h3 className='text-xl font-bold mt-4 mb-4'>Rooms & Apartment</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit iusto iure soluta ex ab itaque laboriosam non accusamus error</p>
                </div>

                <div
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                    className=' p-10 flex flex-col items-center shadow-lg text-amber-500 hover:bg-amber-500 hover:text-white'>
                    <div className='border p-2'>
                        <BiRestaurant className='text-5xl border p-2'></BiRestaurant>
                    </div>
                    <h3 className='text-xl font-bold mt-4 mb-4'>Food & Restaurant</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit iusto iure soluta ex ab itaque laboriosam non accusamus error</p>
                </div>

                <div
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    className=' p-10 flex flex-col items-center shadow-lg text-amber-500 hover:bg-amber-500 hover:text-white'>
                    <div className='border p-2'>
                        <FaSpa className='text-5xl border p-2'></FaSpa>
                    </div>
                    <h3 className='text-xl font-bold mt-4 mb-4'>Spa & Fitness</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit iusto iure soluta ex ab itaque laboriosam non accusamus error</p>
                </div>

                <div
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="2000"
                    className=' p-10 flex flex-col items-center shadow-lg text-amber-500 hover:bg-amber-500 hover:text-white'>
                    <div className='border p-2'>
                        <MdSportsHandball className='text-5xl border p-2'></MdSportsHandball>
                    </div>
                    <h3 className='text-xl font-bold mt-4 mb-4'>Sports & Gaming</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit iusto iure soluta ex ab itaque laboriosam non accusamus error</p>
                </div>

                <div
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="2500"
                    className=' p-10 flex flex-col items-center shadow-lg text-amber-500 hover:bg-amber-500 hover:text-white'>
                    <div className='border p-2'>
                        <BiSolidDrink className='text-5xl border p-2'></BiSolidDrink>
                    </div>
                    <h3 className='text-xl font-bold mt-4 mb-4'>Event & Party</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit iusto iure soluta ex ab itaque laboriosam non accusamus error</p>
                </div>

                <div
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="3000"
                    className=' p-10 flex flex-col items-center shadow-lg text-amber-500 hover:bg-amber-500 hover:text-white'>
                    <div className='border p-2'>
                        <FaDumbbell className='text-5xl border p-2'></FaDumbbell>
                    </div>
                    <h3 className='text-xl font-bold mt-4 mb-4'>GYM & Yoga</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit iusto iure soluta ex ab itaque laboriosam non accusamus error</p>
                </div>
            </div>
        </section>
    );
};

export default OurServices;