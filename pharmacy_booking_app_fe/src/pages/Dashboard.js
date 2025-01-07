import React from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {
    const { user } = useSelector((state) => state.auth);

    return (
        <div>
            <h1>Selamat Datang {user.name}</h1>
            <p>Anda telah masuk ke dashboard sebagai {user.role === 'admin' ? ' Admin' : 'Tamu'}.</p>
        </div>
    );
};

export default Dashboard;
