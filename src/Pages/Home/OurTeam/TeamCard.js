import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const TeamCard = ({ team }) => {
    const { img, name, profession } = team;
    return (
        <div className='shadow-xl text-center'>
            <img src={img} alt="" />
            <div className='flex items-center justify-center gap-3 text-3xl text-amber-500'>
                <FaFacebook/>
                <FaTwitter/>
                <FaLinkedin/>
            </div>
            <div className='pt-6 pb-5'>
                <p className='text-xl font-bold'>{name}</p>
                <p>{profession}</p>
            </div>
        </div>
    );
};

export default TeamCard;