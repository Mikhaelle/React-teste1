import React from 'react';
import Toolbar from './componentes/Toolbar/Toolbar'
import Button from './componentes/Button/Button'
import Addsetence from './componentes/Addsetence/Addsetence'
import './App.css'


function App() {
  return (
    <div className="App">
    <Toolbar />
      <div style={{marginTop: '64px'}}>
        <Button />
      </div>
    </div>
  );
}

export default App;
