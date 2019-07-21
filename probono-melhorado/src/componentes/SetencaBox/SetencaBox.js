import React from 'react';
import './SetencaBox.css';


class List extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            nome : 'Joao Paulo marcelo fulano ciclano', 
            CPF : '032.381.932-00', 
            N_processo: '97098.098760-0987', 
            ex_adverso: 'NET'
        };
      }
        
    render(){
        return(
            <div className="container body-container">
                <div className="row">
                    <div className="col-sm style-container">
                        <p> Nome: {this.state.nome} </p>
                    </div>
                    <div className="col-sm">
                        <p> CPF: {this.state.CPF} </p>
                    </div>
                    <div className="w-100"></div>
                    <div className="col-sm">
                        <p> Nº do processo: {this.state.N_processo}</p>
                    </div>
                    <div className="col-sm">
                       <p> Ex Adverso: {this.state.ex_adverso}</p>
                    </div>
                </div>
            </div>    
        )
    }
}

class Button extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          value: false,
        };
      }
      changeValue(){
        this.setState({
            value:true,
        });
      }
      render(){
        return(
            <button onClick = {()=>this.changeValue()} className = "btn btn-primary" style ={{background:'purple'}}> Informar </button>
        )
      }
}

const setencabox = props =>(
    <div className = "space_setence">
        <div className = "header_space_setence">
            <p className="split-para">Setença <span>#00001</span></p>
        </div>
        <div ><List/></div>
        <div className = "buttonDiv2"><Button/></div>
    </div>


);

export default setencabox;