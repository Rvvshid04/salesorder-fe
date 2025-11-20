import React from 'react';
import TableRow from './TableRow.jsx';

export default function SalesOrderTable({ orderItems }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-2 py-1">Item Code</th>
            <th className="border px-2 py-1">Description</th>
            <th className="border px-2 py-1">Note</th>
            <th className="border px-2 py-1">Quantity</th>
            <th className="border px-2 py-1">Price</th>
            <th className="border px-2 py-1">Tax</th>
            <th className="border px-2 py-1">Excl Amount</th>
            <th className="border px-2 py-1">Tax Amount</th>
            <th className="border px-2 py-1">Incl Amount</th>
          </tr>
        </thead>
        <tbody>
          {orderItems.map((item, index) => (
            <TableRow key={index} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
