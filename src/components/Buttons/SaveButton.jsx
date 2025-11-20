import React from 'react';

export default function SaveButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-navy-700 text-white px-4 py-2 rounded hover:bg-navy-900 transition"
    >
      Save Order
    </button>
  );
}
