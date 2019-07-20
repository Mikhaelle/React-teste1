import React from 'react';
import './Button.css';

class button extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      backcolor: 'white',
      colorIsNext: true,
    };
  }
  changeColor(){
    const color = this.state.colorIsNext? 'white': 'red';
    this.setState({
      backcolor: color,
      colorIsNext : !this.state.colorIsNext,
    });
  }
  render(){
    return(
      <div className="buttonDiv">
        <button onClick = {this.changeColor.bind(this)} style ={{background:this.state.backcolor}}> novo </button>
      </div>
    )
  }
}

export default button;