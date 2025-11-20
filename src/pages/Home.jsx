import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to Sales Order App</h1>
      <p className="mb-4">This is the Home page. Navigate to manage Sales Orders below:</p>
      <Link
        to="/orders"
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Go to Sales Orders
      </Link>
    </div>
  );
}
