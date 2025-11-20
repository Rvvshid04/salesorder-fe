import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orderItems: [],
  totals: { excl: 0, tax: 0, incl: 0 },
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addOrderItem: (state, action) => {
      state.orderItems.push(action.payload);

      const totals = state.orderItems.reduce(
        (acc, item) => {
          acc.excl += item.exclAmount;
          acc.tax += item.taxAmount;
          acc.incl += item.inclAmount;
          return acc;
        },
        { excl: 0, tax: 0, incl: 0 }
      );

      state.totals = totals;
    },
    resetOrder: (state) => {
      state.orderItems = [];
      state.totals = { excl: 0, tax: 0, incl: 0 };
    },
  },
});

export const { addOrderItem, resetOrder } = ordersSlice.actions;

export default ordersSlice.reducer;
