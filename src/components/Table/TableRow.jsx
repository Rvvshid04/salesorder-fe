import React from 'react';

export default function TableRow({ item }) {
  return (
    <tr>
      <td className="border px-2 py-1">{item.itemCode}</td>
      <td className="border px-2 py-1">{item.description}</td>
      <td className="border px-2 py-1">{item.note}</td>
      <td className="border px-2 py-1">{item.quantity}</td>
      <td className="border px-2 py-1">${item.price}</td>
      <td className="border px-2 py-1">{item.tax}%</td>
      <td className="border px-2 py-1">${item.exclAmount}</td>
      <td className="border px-2 py-1">${item.taxAmount}</td>
      <td className="border px-2 py-1">${item.inclAmount}</td>
    </tr>
  );
}
