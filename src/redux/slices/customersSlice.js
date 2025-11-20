import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  clients: [
    { id: 1, name: 'Alice Corp', address1:'123 Main St', address2:'', address3:'', suburb:'Downtown', state:'NY', postcode:'10001' },
    { id: 2, name: 'Bob Inc', address1:'456 Elm St', address2:'', address3:'', suburb:'Uptown', state:'CA', postcode:'90001' },
  ],
};

const customersSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {},
});

export default customersSlice.reducer;
