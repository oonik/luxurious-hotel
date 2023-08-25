import React from 'react';
import { Link } from 'react-router-dom';
import navIcon from '../../assets/nav-icom/hoteler-removebg-preview.png'

const Navbar = () => {
    const menuItems = <>
      <li className='text-white hover:text-amber-500 text-xl'><Link to='/'>Home</Link></li>
      <li className='text-white hover:text-amber-500 text-xl'><Link to='/ourRoom'>Room</Link></li>
      <li className='text-white hover:text-amber-500 text-xl'><Link to='/about'>About</Link></li>
    </>
    return (
        <div className="navbar bg-slate-900 lg:p-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost text-white lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-amber-500 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl lg:text-3xl font-bold text-amber-500" to='/'><span><img src={navIcon} alt="" className='w-8 lg:w-12' /></span>HOTELIER</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu-horizontal px-1 gap-3">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                
            </div>
        </div>
    );
};

export default Navbar;