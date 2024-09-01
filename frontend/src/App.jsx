import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Checkout from './Checkout';

function Success() {
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-2xl font-bold text-green-500">Payment Successful!</h1>
    </div>
  );
}

function Failure() {
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-2xl font-bold text-red-500">Payment Failed!</h1>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Checkout />} />
        <Route path="/payment-success" element={<Success />} />
        <Route path="/payment-failure" element={<Failure />} />
      </Routes>
    </Router>
  );
}

export default App;
