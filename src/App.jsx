import React from 'react';
import Nav from './components/Nav/Nav';
import Dashboard from './components/Dashboard/Dashboard';
import Plans from './components/Plans/Plans';

const App = () => {
  return (
    <div>
      <Nav></Nav>
      <Plans></Plans>
      <Dashboard/>
    </div>
  );
};

export default App;