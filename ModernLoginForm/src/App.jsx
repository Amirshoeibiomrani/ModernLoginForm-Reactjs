import React from 'react';
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom';

import SignUp from './components/SignUp';
import Login from './components/Login';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/' element={<Navigate to="/signup" />} />
      </Routes>
    </div>
  );
};

export default App;