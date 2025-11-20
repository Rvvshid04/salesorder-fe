import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders, createOrder, deleteOrder } from '../redux/slices/ordersSlice';

export default function SalesOrdersPage() {
  const dispatch = useDispatch();
  const { list, status } = useSelector(state => state.orders);
  const [customerName, setCustomerName] = useState('');

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  const handleCreate = async (e) => {
    e.preventDefault();
    const newOrder = {
      customerName,
      orderDate: new Date().toISOString(),
      items: [{ productName: 'Sample Product', quantity: 1, unitPrice: 10 }]
    };
    await dispatch(createOrder(newOrder)).unwrap?.();
    setCustomerName('');
  };

  const handleDelete = (id) => {
    if (confirm('Delete this order?')) dispatch(deleteOrder(id));
  };

  return (
    <div>
      <h1 className="text-2xl mb-4">Sales Orders</h1>

      <form onSubmit={handleCreate} className="mb-6">
        <input
          className="border p-2 mr-2"
          value={customerName}
          onChange={e => setCustomerName(e.target.value)}
          placeholder="Customer name" required
        />
        <button className="bg-blue-600 text-white px-3 py-2 rounded" type="submit">Create</button>
      </form>

      {status === 'loading' && <p>Loading...</p>}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Customer</th>
              <th className="px-4 py-2">Order Date</th>
              <th className="px-4 py-2">Total</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {list.map(order => (
              <tr key={order.id} className="border-t">
                <td className="px-4 py-2">{order.id}</td>
                <td className="px-4 py-2">{order.customerName}</td>
                <td className="px-4 py-2">{new Date(order.orderDate).toLocaleString()}</td>
                <td className="px-4 py-2">{order.total?.toFixed(2) ?? '0.00'}</td>
                <td className="px-4 py-2">
                  <button onClick={() => handleDelete(order.id)} className="text-red-600">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
