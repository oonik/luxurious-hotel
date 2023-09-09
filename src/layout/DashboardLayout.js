import React, { useContext } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import useAdmin from '../hook/useAdmin';

const DashboardLayout = () => {
    const {user} = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    return (
        <section>
            <Navbar></Navbar>
            <div className="drawer lg:drawer-open">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    
                    {
                      user?.email && <li><Link to='/dashboard/myBookings'>My Booking</Link></li>
                    }
                    {
                     isAdmin && <li><Link to='/dashboard/allUser'>All User</Link></li> 
                    }
                </ul>
            </div>
        </div>
        </section>
    );
};

export default DashboardLayout;