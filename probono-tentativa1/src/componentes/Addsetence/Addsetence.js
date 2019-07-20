import React from 'react';
import './Addsetence.css';



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
            <button onClick = {()=>this.changeValue()} style ={{background:'purple'}}> Informar </button>
    
        )
      }
}
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
            <ul className="add_padding">
                    <p class="split-para2">Nome: {this.state.nome} <span >CPF: {this.state.CPF}</span></p>
                    <p class="split-para2">Nº do processo: {this.state.N_processo} <span>Ex Adverso: {this.state.ex_adverso}</span></p>
            </ul>
        )
    }
}

const addsetence = props =>(
    <div className = "space_setence">
        <div className = "header_space_setence">
            <p class="split-para">Setença <span>#00001</span></p>
        </div>
        <div ><List/></div>
        <div className = "buttonDiv2"><Button/></div>
    </div>


);

export default addsetence;