import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const MainLayout = ({ children }) => {
    return (
        <div className="d-flex">
            <Sidebar />
            <div className="content w-100">
                <Navbar />
                <div className="container mt-4">{children}</div>
            </div>
        </div>
    );
};

export default MainLayout;