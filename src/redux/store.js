import { configureStore } from '@reduxjs/toolkit';
import ordersReducer from './slices/ordersSlice';
import customersReducer from './slices/customersSlice';

export const store = configureStore({
  reducer: {
    orders: ordersReducer,
    customers: customersReducer,
  },
});
