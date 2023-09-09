import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TeamCard = ({ team }) => {
    const { img, name, profession } = team;
    AOS.init();
    return (
        <div
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className='shadow-xl text-center'>
            <div className='overflow-hidden'>
                <img src={img} alt="" className='hover:scale-125 transition duration-500 cursor-pointer' />
            </div>
            <div className='flex items-center justify-center gap-3 text-3xl text-amber-500'>
                <FaFacebook />
                <FaTwitter />
                <FaLinkedin />
            </div>
            <div className='pt-6 pb-5'>
                <p className='text-xl font-bold'>{name}</p>
                <p>{profession}</p>
            </div>
        </div>
    );
};

export default TeamCard;