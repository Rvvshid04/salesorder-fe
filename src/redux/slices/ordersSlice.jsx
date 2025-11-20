import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://localhost:7243/api'
});

// Async thunks
export const fetchOrders = createAsyncThunk('orders/fetchAll', async () => {
  const res = await API.get('/SalesOrders');
  return res.data;
});

export const createOrder = createAsyncThunk('orders/create', async (order) => {
  const res = await API.post('/SalesOrders', order);
  return res.data;
});

export const updateOrder = createAsyncThunk('orders/update', async ({ id, order }) => {
  await API.put(`/SalesOrders/${id}`, order);
  return { id, order };
});

export const deleteOrder = createAsyncThunk('orders/delete', async (id) => {
  await API.delete(`/SalesOrders/${id}`);
  return id;
});

const ordersSlice = createSlice({
  name: 'orders',
  initialState: { list: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.fulfilled, (state, action) => { state.list = action.payload; state.status = 'succeeded'; })
      .addCase(fetchOrders.pending, (state) => { state.status = 'loading'; })
      .addCase(fetchOrders.rejected, (state, action) => { state.status = 'failed'; state.error = action.error.message; })
      .addCase(createOrder.fulfilled, (state, action) => { state.list.push(action.payload); })
      .addCase(updateOrder.fulfilled, (state, action) => {
        const idx = state.list.findIndex(o => o.id === action.payload.id);
        if (idx !== -1) state.list[idx] = action.payload.order;
      })
      .addCase(deleteOrder.fulfilled, (state, action) => {
        state.list = state.list.filter(o => o.id !== action.payload);
      });
  }
});

export default ordersSlice.reducer;
