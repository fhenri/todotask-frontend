// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import User from './components/User'; // Import User component
import Home from './components/Home'; // Import Home component

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/user" element={<User/>} /> {/* Add route for User component */}
        <Route path="/" element={<Home/>} /> {/* Use Home component as default route */}
      </Routes>
    </Router>
  );
};

export default App;