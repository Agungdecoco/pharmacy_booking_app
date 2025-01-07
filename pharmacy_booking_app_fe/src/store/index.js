import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import pharmacyReducer from './slices/pharmacySlice';
import bookingReducer from './slices/bookingSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        pharmacy: pharmacyReducer,
        booking: bookingReducer,
    },
});