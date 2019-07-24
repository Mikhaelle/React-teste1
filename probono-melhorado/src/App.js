import React from 'react';
import Toolbar from './componentes/Toolbar/Toolbar'
import './App.css';
import SetencaBox from './componentes/SetencaBox/SetencaBox';
import SetencaBox2 from './componentes/SetencaBox2/SetencaBox2';

class PageSelect extends React.Component{
  constructor(props){
    super();
    this.state = {
        setPage : true,
        backcolorb1: 'purple',
        backcolorb2: 'gray',
    }
  }

b1IsClick(){
    this.setState({setPage:true});
    this.setState({backcolorb1 : ' purple'});
    this.setState({backcolorb2 : 'gray'});
    
}

b2IsClick(){
    this.setState({setPage:false});
    this.setState({backcolorb1 : 'gray'});
    this.setState({backcolorb2 : 'purple'});
}

render(){
    let setence = (<SetencaBox/>)

    if(!this.state.setPage){
      setence = (<SetencaBox2/>)
    }

    return(
      <div>
         <button onClick = {this.b1IsClick.bind(this)} className = "btn btn-primary"  style ={{background:this.state.backcolorb1}}>novo</button>
         <button onClick = {this.b2IsClick.bind(this)} className = "btn btn-primary"  style ={{background:this.state.backcolorb2}}>histórico</button>
          <div className = "space_setence">
            {setence}
          </div>
          <div className = "space_setence">
          {setence}
          </div>
          <div className = "space_setence">
          {setence}
          </div>
      </div>
    )
  }
}

function App() {
  return (
     <div className="home">
      <header className="navbar_toolbar">
        <Toolbar /> 
      </header>
        <div className= "topbuttonDiv">
          <PageSelect/>
        </div>
    </div>
  );
}

export default App;