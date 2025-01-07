import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookingsUser } from '../store/slices/bookingSlice';
import { baseURL } from '../constant/api';

const BookingListUser = () => {
    const dispatch = useDispatch();
    const { bookings } = useSelector((state) => state.booking);

    useEffect(() => {
        dispatch(fetchBookingsUser());
    }, [dispatch]);

    return (
        <div>
            <h1>My Bookings</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Foto Lokasi</th>
                        <th>Pharmacy</th>
                        <th>Note</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((booking) => (
                        <tr key={booking.id}>
                            <td><img src={`${baseURL}/${booking.pharmacy?.file_image}`} alt={booking.pharmacy?.nama} style={{ width: '50px' }}/></td>
                            <td>{booking.pharmacy?.nama}</td>
                            <td>{booking.note}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BookingListUser;
