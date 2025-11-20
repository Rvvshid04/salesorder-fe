import React from 'react';

// replace with API call to backend later
const items = [
  { code: 'A001', description: 'Widget A' },
  { code: 'B002', description: 'Widget B' },
  { code: 'C003', description: 'Widget C' },
];

export default function DescriptionDropdown({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="border px-2 py-1 rounded w-full"
    >
      <option value="">Select Description</option>
      {items.map((item) => (
        <option key={item.code} value={item.description}>
          {item.description} ({item.code})
        </option>
      ))}
    </select>
  );
}
