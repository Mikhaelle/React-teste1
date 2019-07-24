import React from 'react';
import Toolbar from './componentes/Toolbar/Toolbar'
import './App.css';
import Topbuttons from './componentes/Topbuttons/Topbuttons';
import SetencaBox from './componentes/SetencaBox/SetencaBox';

function App() {
  return (
     <div className="home">
      <header className="navbar_toolbar">
        <Toolbar /> 
      </header>
        <div className= "topbuttonDiv">
          <Topbuttons/>
        </div>
        <div className = "space_setence">
          <SetencaBox/>
        </div>
        <div className = "space_setence">
          <SetencaBox/>
        </div>
        <div className = "space_setence">
          <SetencaBox/>
        </div>
    </div>
  );
}

export default App;
