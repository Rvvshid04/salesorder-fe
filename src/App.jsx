import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import SalesOrder from './pages/SalesOrders.jsx';
import Home from './pages/Home.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <nav className="mb-6">
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/orders">Sales Orders</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<SalesOrder/>} />
      </Routes>
    </div>
  );
}
