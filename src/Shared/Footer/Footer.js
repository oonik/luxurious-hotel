import React from 'react';
import { FaFacebook, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import { BiPhoneCall, BiMessageDots } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer p-20 bg-black text-white">
      <div className='lg:w-80 bg-amber-500 p-8'>
        <h1 className='text-4xl font-bold'>HOTELIER</h1>
        <p>Download Hotelier – Premium Version, build a professional website for your hotel business and grab the attention of new visitors upon your site’s launch.</p>
      </div>
      <div>
        <span className="footer-title text-amber-400 text-xl">Contact</span>
        <Link 
        to='https://www.google.com/maps/place/%E0%A6%B6%E0%A6%BE%E0%A6%B2%E0%A7%8D%E0%A6%B2%E0%A6%BE+%E0%A6%B8%E0%A6%B0%E0%A6%95%E0%A6%BE%E0%A6%B0%E0%A6%BF+%E0%A6%A1%E0%A6%BF%E0%A6%97%E0%A7%8D%E0%A6%B0%E0%A6%BF+%E0%A6%95%E0%A6%B2%E0%A7%87%E0%A6%9C/@24.6852011,91.2698519,14z/data=!4m6!3m5!1s0x37513238140b91d1:0x16b3f7800e27841f!8m2!3d24.6748798!4d91.2707552!16s%2Fg%2F11cn94pmdx?entry=ttu'
        className="link link-hover flex items-center gap-3"><FaLocationDot /> 123 Street, New York, USA</Link>
        <Link to='number' className="link link-hover flex items-center gap-3"><BiPhoneCall /> +012 345 67890</Link>
        <Link to='https://mail.google.com/mail/u/0/?ogbl#inbox' className="link link-hover flex items-center gap-3"><BiMessageDots /> aniksarkar0177@gmail.com</Link>
        <div className='flex gap-4 text-3xl'>
          <Link to='https://www.facebook.com/profile.php?id=100006941267027'><FaFacebook className='border-2 rounded-full p-1' /></Link>
          <Link to='https://www.youtube.com/results?search_query=hotel'><FaYoutube className='border-2 rounded-full p-1' /></Link>
          <Link to='https://www.linkedin.com/in/anik-sarkar-21457b244/details/projects/'><FaLinkedin className='border-2 rounded-full p-1' /></Link>
          <Link><FaTwitter className='border-2 rounded-full p-1' /></Link>
        </div>
      </div>
      <div>
        <span className="footer-title text-amber-400 text-xl">Services</span>
        <Link to='/services' className="link link-hover">Rooms & Apartment</Link>
        <Link to='/services' className="link link-hover">Food & Restaurant</Link>
        <Link to='/services' className="link link-hover">Spa & Fitness</Link>
        <Link to='/services' className="link link-hover">Sports & Gaming</Link>
      </div>
      <div>
        <span className="footer-title text-amber-400 text-xl">Company</span>
        <Link to='/about' className="link link-hover">About us</Link>
        <Link to='/contactUs' className="link link-hover">Contact</Link>
        <Link to='/ourRoom' className="link link-hover">Room</Link>
      </div>
    </footer>
  );
};

export default Footer;