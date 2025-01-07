import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import PharmacyCreate from './pages/PharmacyCreate';
import PharmacyList from './pages/PharmacyList';
import BookingList from './pages/BookingList';
import BookingListUser from './pages/BookingListUser';
import BookingCreate from './pages/BookingCreate';
import LoginPage from './pages/LoginPage';

const App = () => {
    const { user } = useSelector((state) => state.auth);

    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                {user && (
                    <Route
                        path="/*"
                        element={
                            <MainLayout>
                                <Routes>
                                    <Route path="/dashboard" element={<Dashboard />} />
                                    {user.role === 'admin' && (
                                        <>
                                            <Route path="/admin/pharmacies/create" element={<PharmacyCreate />} />
                                            <Route path="/admin/pharmacies" element={<PharmacyList />} />
                                            <Route path="/admin/bookings" element={<BookingList />} />
                                        </>
                                    )}
                                    {user.role === 'user' && (
                                        <>
                                            <Route path="/user/bookings" element={<BookingListUser />} />
                                            <Route path="/user/bookings/create" element={<BookingCreate />} />
                                        </>
                                    )}
                                </Routes>
                            </MainLayout>
                        }
                    />
                )}
                <Route path="*" element={<Navigate to={user ? '/dashboard' : '/login'} />} />
            </Routes>
        </Router>
    );
};

export default App;