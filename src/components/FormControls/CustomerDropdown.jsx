import React from 'react';
import { useSelector } from 'react-redux';

export default function CustomerDropdown({ value, onChange }) {
  const clients = useSelector((state) => state.customers.clients);

  return (
    <select
      value={value}
      onChange={onChange}
      customers={customers}
      className="border px-2 py-1 rounded w-full"
    >
      <option value="">Select Customer</option>
      {customers.map((c) => (
        <option key={c.id} value={c.id}>{c.name}</option>
      ))}
    </select>
  );
}
