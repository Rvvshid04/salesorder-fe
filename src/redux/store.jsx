import { configureStore } from '@reduxjs/toolkit';
import ordersReducer from './slices/ordersSlice';

export default configureStore({
  reducer: {
    orders: ordersReducer,
  }
});
