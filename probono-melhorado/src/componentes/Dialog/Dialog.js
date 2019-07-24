import React from 'react';

export class Dialog extends React.Component{
    constructor(props){
        super();
        this.state = {
            b1 : false,
            b2 : false,
        }
    }

    b1IsClick(){
        this.setState({
            b1: true,
        });
    }


    render(){

        let dialog = (
                <div className = "space_dialog">
                    <div className = "header_space_dialog">
                        <p className="split-para">Setença <span>#00001</span></p>
                    </div>
                    <div>
                        Tem dispositivo a ser inserido?
                    </div>
                    <div className= "buttonDialog">
                        <button onClick = {this.b1IsClick.bind(this)} className = "btn btn-primary"  style ={{background:'gray'}}>Sim</button>
                        <button onClick = {this.props.onClose} className = "btn btn-primary"  style ={{background:'gray'}}>Não</button>     
                    </div>
                </div>
        )

        if (!this.props.value){
            dialog=null;
        }
        return  ( 
            <div>
                {dialog}
            </div>
        
        );
    }
}

export default Dialog;