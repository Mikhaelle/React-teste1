import React from 'react';
import './Dialog.css'

export class Dialog extends React.Component{
    constructor(props){
        super();
        this.state = {
            b1 : false,
        }
    }

    b1IsClick(){
        this.setState({
            b1: true,
        });
    }


    render(){

        let dialog = (
            <div className="parent_space_dialog">
                <div className = "space_dialog">
                    <div className = "header_space_dialog">
                        <div>
                            <p className="split-para">Setença <span>#00001</span></p>
                        </div>
                    </div>
                        <div className= "h1Div">
                           <h2> Tem dispositivo a ser inserido?</h2> 
                        </div>
                        <div className= "buttonDialog">
                            <button onClick = {this.b1IsClick.bind(this)} className = "btn btn-primary"  style ={{background:'gray'}}>Sim</button>
                            <button onClick = {this.props.onClose} className = "btn btn-primary"  style ={{background:'gray'}}>Não</button>     
                    
                        </div>
                    
                </div>
            </div>
        )

        if (!this.props.value){
            dialog=null;
        }
        return  ( 
            <div >
                {dialog}
            </div>
        
        );
    }
}

export default Dialog;