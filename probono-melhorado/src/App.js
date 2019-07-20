import React from 'react';
import Toolbar from './componentes/Toolbar/Toolbar'
import './App.css';
import Topbuttons from './componentes/Topbuttons/Topbuttons';

function App() {
  return (
    <div className="navbar">
    <header className="navbar_toolbar">
      <Toolbar />
    </header>
    <div className = "topbuttonDiv">
      <Topbuttons/>
    </div>
  </div>
  );
}

export default App;
