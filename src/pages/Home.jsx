import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Orders() {
  // sample data for demonstration
  const [orders, setOrders] = useState([
    {
      id: 1,
      itemCode: 'A001',
      description: 'Widget A',
      note: 'Urgent',
      quantity: 10,
      price: 50,
      tax: 5,
      exclAmount: 500,
      taxAmount: 25,
      inclAmount: 525,
    },
    {
      id: 2,
      itemCode: 'B002',
      description: 'Widget B',
      note: '',
      quantity: 5,
      price: 30,
      tax: 3,
      exclAmount: 150,
      taxAmount: 15,
      inclAmount: 165,
    },
  ]);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Sales Orders</h1>
        <Link
          to="/orders"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Add New
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">Item Code</th>
              <th className="border px-4 py-2">Description</th>
              <th className="border px-4 py-2">Note</th>
              <th className="border px-4 py-2">Quantity</th>
              <th className="border px-4 py-2">Price</th>
              <th className="border px-4 py-2">Tax</th>
              <th className="border px-4 py-2">Excl Amount</th>
              <th className="border px-4 py-2">Tax Amount</th>
              <th className="border px-4 py-2">Incl Amount</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td className="border px-4 py-2">{order.itemCode}</td>
                <td className="border px-4 py-2">{order.description}</td>
                <td className="border px-4 py-2">{order.note}</td>
                <td className="border px-4 py-2">{order.quantity}</td>
                <td className="border px-4 py-2">${order.price}</td>
                <td className="border px-4 py-2">${order.tax}</td>
                <td className="border px-4 py-2">${order.exclAmount}</td>
                <td className="border px-4 py-2">${order.taxAmount}</td>
                <td className="border px-4 py-2">${order.inclAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
