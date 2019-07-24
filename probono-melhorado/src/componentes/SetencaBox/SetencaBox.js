import React from 'react';
import './SetencaBox.css';
import Dialog from '../Dialog/Dialog';



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
                    <div className="col-sm">
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
          isOpen: false,
        };
      }
      render(){
        return(
            <div className = "buttonDiv2">
                <button onClick = {(e)=>this.setState( {isOpen:true})} className = "btn btn-primary" style ={{background:'purple'}}> Informar </button>
                <Dialog value = {this.state.isOpen} onClose={(e)=>this.setState({isOpen:false})}></Dialog>
            </div>
            
        )
      }
}

const setencabox = props =>(
    <div>
        <div className = "header_space_setence">
            <p className="split-para">Setença <span>#00001</span></p>
        </div>
        <div ><List/></div>
        <Button/>
    </div>


);

export default setencabox;