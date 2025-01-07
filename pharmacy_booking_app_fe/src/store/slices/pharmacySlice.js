import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../constant/api';

export const fetchPharmacies = createAsyncThunk('pharmacy/fetch', async (_, thunkAPI) => {
    try {
        const response = await API.get('http://127.0.0.1:8000/api/pharmacies');
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const createPharmacy = createAsyncThunk('pharmacy/create', async (data, thunkAPI) => {
    try {
        const response = await API.post('http://127.0.0.1:8000/api/pharmacies', data);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const deletePharmacy = createAsyncThunk('pharmacy/delete', async (id, thunkAPI) => {
    try {
        await API.delete(`http://127.0.0.1:8000/api/pharmacies/${id}`);
        return id;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

const pharmacySlice = createSlice({
    name: 'pharmacy',
    initialState: {
        pharmacies: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPharmacies.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchPharmacies.fulfilled, (state, action) => {
                state.pharmacies = action.payload;
                state.loading = false;
            })
            .addCase(fetchPharmacies.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(createPharmacy.fulfilled, (state, action) => {
                state.pharmacies.push(action.payload);
            })
            .addCase(deletePharmacy.fulfilled, (state, action) => {
                state.pharmacies = state.pharmacies.filter((p) => p.id !== action.payload);
            });
    },
});

export default pharmacySlice.reducer;
