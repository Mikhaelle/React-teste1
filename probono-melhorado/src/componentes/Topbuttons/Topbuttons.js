import React from 'react';
import "./Topbuttons.css";

export class topbuttons extends React.Component{
    constructor(props){
        super();
        this.state = {
            b1 : true,
            b2 : false,
            backcolorb1: 'purple',
            backcolorb2: 'gray',
        }
    }

    b1IsClick(){
        if(!this.state.b1){
            this.state.b1 = true;
            this.state.b2 = false;
            this.state.backcolorb1 = 'purple';
            this.state.backcolorb2 = 'gray';
        }
        this.setState({
            b1: this.state.b1,
            b2: this.state.b2,
            backcolorb1: this.state.backcolorb1,
            backcolorb2: this.state.backcolorb2,
        });
    }

    b2IsClick(){
        if(!this.state.b2){
            this.state.b1 = false;
            this.state.b2 = true;
            this.state.backcolorb1 = 'gray';
            this.state.backcolorb2 = 'purple';
        }

        this.setState({
            b1: this.state.b1,
            b2: this.state.b2,
            backcolorb1: this.state.backcolorb1,
            backcolorb2: this.state.backcolorb2,
        });
    }

    render(){
        return(
            <div>
                <button onClick = {this.b1IsClick.bind(this)} className = "btn btn-primary"  style ={{background:this.state.backcolorb1}}>novo</button>
                <button onClick = {this.b2IsClick.bind(this)} className = "btn btn-primary"  style ={{background:this.state.backcolorb2}}>histórico</button>
            </div>
        )
    }

}

export default topbuttons;