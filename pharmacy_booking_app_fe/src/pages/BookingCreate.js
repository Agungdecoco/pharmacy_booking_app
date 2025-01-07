import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPharmacies } from '../store/slices/pharmacySlice';
import { createBooking } from '../store/slices/bookingSlice';

const BookingCreate = () => {
    const dispatch = useDispatch();
    const { pharmacies } = useSelector((state) => state.pharmacy);
    const [form, setForm] = useState({ pharmacy_id: '', note: '' });

    useEffect(() => {
        dispatch(fetchPharmacies());
    }, [dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createBooking(form));
        setForm({ pharmacy_id: '', note: '' });
    };

    return (
        <div>
            <h1>Create Booking</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Pharmacy</label>
                    <select
                        className="form-control"
                        value={form.pharmacy_id}
                        onChange={(e) => setForm({ ...form, pharmacy_id: e.target.value })}
                        required
                    >
                        <option value="">Select Pharmacy</option>
                        {pharmacies.map((pharmacy) => (
                            <option key={pharmacy.id} value={pharmacy.id}>
                                {pharmacy.nama}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label>Note</label>
                    <input
                        type="text"
                        className="form-control"
                        value={form.note}
                        onChange={(e) => setForm({ ...form, note: e.target.value })}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Create Booking</button>
            </form>
        </div>
    );
};

export default BookingCreate;
