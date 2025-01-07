import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaUser, FaClipboardList, FaPlusSquare, FaHome } from 'react-icons/fa';

const Sidebar = () => {
    const { user } = useSelector((state) => state.auth);

    const adminLinks = [
        { path: '/dashboard', label: 'Dashboard', icon: <FaHome /> },
        { path: '/admin/pharmacies', label: 'Manage Pharmacies', icon: <FaClipboardList /> },
        { path: '/admin/pharmacies/create', label: 'Add Pharmacy', icon: <FaPlusSquare /> },
        { path: '/admin/bookings', label: 'View All Bookings', icon: <FaClipboardList /> },
    ];

    const userLinks = [
        { path: '/dashboard', label: 'Dashboard', icon: <FaHome /> },
        { path: '/user/bookings', label: 'My Bookings', icon: <FaClipboardList /> },
        { path: '/user/bookings/create', label: 'Create Booking', icon: <FaPlusSquare /> },
    ];

    const links = user?.role === 'admin' ? adminLinks : userLinks;

    return (
        <div className="sidebar bg-light vh-100 p-3">
            <h4 className="text-primary mb-4">Menu</h4>
            <ul className="nav flex-column">
                {links.map((link) => (
                    <li className="nav-item mb-2" key={link.path}>
                        <NavLink to={link.path} className="nav-link d-flex align-items-center" activeClassName="active">
                            {link.icon} <span className="ms-2">{link.label}</span>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;