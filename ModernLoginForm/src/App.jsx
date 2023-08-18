import React from 'react';
import './App.css'
import { Route, Switch } from 'react-router-dom';

import SignUp from './components/SignUp';
import Login from './components/Login';

const App = () => {
  return (
    <div>
      {/* <SignUp /> */}
      <Login />
    </div>
  );
};

export default App;