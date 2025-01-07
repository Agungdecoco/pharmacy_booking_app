import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookings } from '../store/slices/bookingSlice';

const BookingList = () => {
    const dispatch = useDispatch();
    const { bookings } = useSelector((state) => state.booking);

    useEffect(() => {
        dispatch(fetchBookings());
    }, [dispatch]);

    return (
        <div>
            <h1>All Bookings</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Pharmacy</th>
                        <th>Note</th>
                        <th>User</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((booking) => (
                        <tr key={booking.id}>
                            <td>{booking.pharmacy?.nama}</td>
                            <td>{booking.note}</td>
                            <td>{booking.user?.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BookingList;
