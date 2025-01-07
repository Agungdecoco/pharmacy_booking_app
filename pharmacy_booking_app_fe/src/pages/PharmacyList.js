import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPharmacies, deletePharmacy } from '../store/slices/pharmacySlice';

const PharmacyList = () => {
    const dispatch = useDispatch();
    const { pharmacies } = useSelector((state) => state.pharmacy);

    useEffect(() => {
        dispatch(fetchPharmacies());
    }, [dispatch]);

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this pharmacy?')) {
            dispatch(deletePharmacy(id));
        }
    };

    return (
        <div>
            <h1>Pharmacy List</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {pharmacies.map((pharmacy) => (
                        <tr key={pharmacy.id}>
                            <td>{pharmacy.nama}</td>
                            <td>{pharmacy.alamat}</td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(pharmacy.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PharmacyList;
