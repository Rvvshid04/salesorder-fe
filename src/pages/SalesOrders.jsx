import React, { useState, useEffect } from 'react';
import SalesOrderTable from '../components/Table/SalesOrderTable.jsx';
import CustomerDropdown from '../components/FormControls/CustomerDropdown.jsx';
import AddressFields from '../components/FormControls/AddressFields.jsx';
import SaveButton from '../components/Buttons/SaveButton.jsx';
import { calculateExcl, calculateTaxAmount, calculateIncl } from '../utils/calculations';

export default function SalesOrder() {
  // fake customers
  const customers = [
    { id: 1, name: 'Alice Corp', address1:'123 Main St', address2:'', address3:'', suburb:'Downtown', state:'NY', postcode:'10001' },
    { id: 2, name: 'Bob Inc', address1:'456 Elm St', address2:'', address3:'', suburb:'Uptown', state:'CA', postcode:'90001' },
  ];

  const [customerId, setCustomerId] = useState('');
  const [addresses, setAddresses] = useState({
    address1:'', address2:'', address3:'', suburb:'', state:'', postcode:''
  });

  // Dummy order items
  const [orderItems, setOrderItems] = useState([
    { itemCode:'A001', description:'Widget A', note:'Urgent', quantity:10, price:50, tax:5, exclAmount:500, taxAmount:25, inclAmount:525 },
    { itemCode:'B002', description:'Widget B', note:'', quantity:5, price:30, tax:3, exclAmount:150, taxAmount:4.5, inclAmount:154.5 },
  ]);

  const [itemForm, setItemForm] = useState({ itemCode:'', description:'', note:'', quantity:0, price:0, tax:0 });

  // Auto-fill addresses when customer changes
  useEffect(() => {
    const customer = customers.find(c => c.id === parseInt(customerId));
    if (customer) setAddresses(customer);
    else setAddresses({ address1:'', address2:'', address3:'', suburb:'', state:'', postcode:'' });
  }, [customerId]);

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddresses(prev => ({ ...prev, [name]: value }));
  };

  const handleItemChange = (e) => {
    const { name, value } = e.target;
    setItemForm(prev => ({ ...prev, [name]: value }));
  };

  const addItem = () => {
    const exclAmount = calculateExcl(itemForm.quantity, itemForm.price);
    const taxAmount = calculateTaxAmount(exclAmount, itemForm.tax);
    const inclAmount = calculateIncl(exclAmount, taxAmount);
    setOrderItems(prev => [...prev, { ...itemForm, exclAmount, taxAmount, inclAmount }]);
    setItemForm({ itemCode:'', description:'', note:'', quantity:0, price:0, tax:0 });
  };

  const saveOrder = () => {
    console.log('Order saved (mock):', orderItems);
    alert('Order saved (mock)');
  };

  // Calculate totals
  const totals = orderItems.reduce((acc, item) => {
    acc.excl += item.exclAmount;
    acc.tax += item.taxAmount;
    acc.incl += item.inclAmount;
    return acc;
  }, { excl:0, tax:0, incl:0 });

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-navy-900">Sales Order</h1>
        <SaveButton onClick={saveOrder} />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block mb-1">Customer</label>
          <CustomerDropdown 
            value={customerId} 
            onChange={(e)=>setCustomerId(e.target.value)} 
            customers={customers}
          />
        </div>
      </div>

      <AddressFields addresses={addresses} onChange={handleAddressChange} />

      <div className="mt-4 grid grid-cols-3 gap-2 mb-4">
        <div>
          <label htmlFor="itemCode" className="block mb-1 font-semibold">Item Code</label>
          <input
            type="text"
            id="itemCode"
            name="itemCode"
            value={itemForm.itemCode}
            onChange={handleItemChange}
            placeholder="Item Code"
            className="border px-2 py-1 rounded w-full"
          />
        </div>

        <div>
          <label htmlFor="description" className="block mb-1 font-semibold">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            value={itemForm.description}
            onChange={handleItemChange}
            placeholder="Description"
            className="border px-2 py-1 rounded w-full"
          />
        </div>

        <div>
          <label htmlFor="note" className="block mb-1 font-semibold">Note</label>
          <input
            type="text"
            id="note"
            name="note"
            value={itemForm.note}
            onChange={handleItemChange}
            placeholder="Note"
            className="border px-2 py-1 rounded w-full"
          />
        </div>

        <div>
          <label htmlFor="quantity" className="block mb-1 font-semibold">Quantity</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={itemForm.quantity}
            onChange={handleItemChange}
            placeholder="Quantity"
            min="0"
            className="border px-2 py-1 rounded w-full"
          />
        </div>

        <div>
          <label htmlFor="price" className="block mb-1 font-semibold">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={itemForm.price}
            onChange={handleItemChange}
            placeholder="Price"
            min="0"
            step="0.01"
            className="border px-2 py-1 rounded w-full"
          />
        </div>

        <div>
          <label htmlFor="tax" className="block mb-1 font-semibold">Tax %</label>
          <input
            type="number"
            id="tax"
            name="tax"
            value={itemForm.tax}
            onChange={handleItemChange}
            placeholder="Tax %"
            min="0"
            step="0.01"
            className="border px-2 py-1 rounded w-full"
          />
        </div>

      </div>
      
      <button onClick={addItem} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition mb-4">Add Item</button>

      <SalesOrderTable orderItems={orderItems} />

      <div className="mt-4 flex justify-end gap-4">
        <div>Total Excl: ${totals.excl}</div>
        <div>Total Tax: ${totals.tax}</div>
        <div>Total Incl: ${totals.incl}</div>
      </div>
    </div>
  );
}
