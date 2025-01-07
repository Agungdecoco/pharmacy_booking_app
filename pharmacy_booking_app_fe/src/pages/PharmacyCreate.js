import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPharmacy } from '../store/slices/pharmacySlice';

const PharmacyCreate = () => {
    const dispatch = useDispatch();
    const [form, setForm] = useState({ nama: '', alamat: '', latitude: '', longitude: '', file_image: null });

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('nama', form.nama);
        formData.append('alamat', form.alamat);
        formData.append('latitude', form.latitude);
        formData.append('longitude', form.longitude);
        if (form.file_image) {
            formData.append('file_image', form.file_image);
        }
        dispatch(createPharmacy(formData));
        setForm({ nama: '', alamat: '', latitude: '', longitude: '', file_image: null });
    };

    return (
        <div>
            <h1>Create Pharmacy</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={form.nama}
                        onChange={(e) => setForm({ ...form, nama: e.target.value })}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label>Address</label>
                    <input
                        type="text"
                        className="form-control"
                        value={form.alamat}
                        onChange={(e) => setForm({ ...form, alamat: e.target.value })}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label>Latitude</label>
                    <input
                        type="text"
                        className="form-control"
                        value={form.latitude}
                        onChange={(e) => setForm({ ...form, latitude: e.target.value })}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label>Longitude</label>
                    <input
                        type="text"
                        className="form-control"
                        value={form.longitude}
                        onChange={(e) => setForm({ ...form, longitude: e.target.value })}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label>Image</label>
                    <input
                        type="file"
                        className="form-control"
                        onChange={(e) => setForm({ ...form, file_image: e.target.files[0] })}
                        accept="image/*"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add Pharmacy</button>
            </form>
        </div>
    );
};

export default PharmacyCreate;
