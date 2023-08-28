import React from 'react';
import { FaFacebook, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import { BiPhoneCall, BiMessageDots } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="footer p-20 bg-black text-white">
      <div className='lg:w-80 bg-amber-500 p-8'>
        <h1 className='text-4xl font-bold'>HOTELIER</h1>
        <p>Download Hotelier – Premium Version, build a professional website for your hotel business and grab the attention of new visitors upon your site’s launch.</p>
      </div>
      <div>
        <span className="footer-title text-amber-400 text-xl">Contact</span>
        <a href='anik' className="link link-hover flex items-center gap-3"><FaLocationDot /> 123 Street, New York, USA</a>
        <a href='anik' className="link link-hover flex items-center gap-3"><BiPhoneCall /> +012 345 67890</a>
        <a href='anik' className="link link-hover flex items-center gap-3"><BiMessageDots /> info@example.com</a>
        <div className='flex gap-4 text-3xl'>
          <FaFacebook className='border-2 rounded-full p-1' />
          <FaYoutube className='border-2 rounded-full p-1' />
          <FaLinkedin className='border-2 rounded-full p-1' />
          <FaTwitter className='border-2 rounded-full p-1' />
        </div>
      </div>
      <div>
        <span className="footer-title text-amber-400 text-xl">Services</span>
        <a href='anik' className="link link-hover">Branding</a>
        <a href='anik' className="link link-hover">Design</a>
        <a href='anik' className="link link-hover">Marketing</a>
        <a href='anik' className="link link-hover">Advertisement</a>
      </div>
      <div>
        <span className="footer-title text-amber-400 text-xl">Company</span>
        <a href='anik' className="link link-hover">About us</a>
        <a href='anik' className="link link-hover">Contact</a>
        <a href='anik' className="link link-hover">Jobs</a>
        <a href='anik' className="link link-hover">Press kit</a>
      </div>
    </footer>
  );
};

export default Footer;