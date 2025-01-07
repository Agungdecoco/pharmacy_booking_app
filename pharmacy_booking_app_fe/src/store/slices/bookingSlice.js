import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../constant/api';

export const fetchBookings = createAsyncThunk('booking/fetch', async (_, thunkAPI) => {
    try {
        const response = await API.get('http://127.0.0.1:8000/api/bookings-lists');
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const fetchBookingsUser = createAsyncThunk('booking/fetch', async (_, thunkAPI) => {
    try {
        const response = await API.get('http://127.0.0.1:8000/api/bookings');
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const createBooking = createAsyncThunk('booking/create', async (data, thunkAPI) => {
    try {
        const response = await API.post('http://127.0.0.1:8000/api/bookings', data);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

const bookingSlice = createSlice({
    name: 'booking',
    initialState: {
        bookings: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBookings.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchBookings.fulfilled, (state, action) => {
                state.bookings = action.payload;
                state.loading = false;
            })
            .addCase(fetchBookings.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(createBooking.fulfilled, (state, action) => {
                state.bookings.push(action.payload);
            });
    },
});

export default bookingSlice.reducer;
