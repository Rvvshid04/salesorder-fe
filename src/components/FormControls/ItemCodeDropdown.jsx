import React from 'react';

// Dummy item codes (replace with API call to backend later)
const itemCodes = [
  { code: 'A001', description: 'Widget A' },
  { code: 'B002', description: 'Widget B' },
  { code: 'C003', description: 'Widget C' },
];

export default function ItemCodeDropdown({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="border px-2 py-1 rounded w-full"
    >
      <option value="">Select Item Code</option>
      {itemCodes.map((item) => (
        <option key={item.code} value={item.code}>
          {item.code} - {item.description}
        </option>
      ))}
    </select>
  );
}
