import React, { Component } from 'react';
import './css/Content.css';


class Content extends Component {

  constructor(){

    super();

    this.state = {

      count:0,
      number1: 0,
      number2: 0,
      result:0
      
    }

    this.handleCountClick=this.handleCountClick.bind(this);
    this.handleResultClick=this.handleResultClick.bind(this);
    this.handleInputChange=this.handleInputChange.bind(this);
  }

  componentDidMount(){
    this.setState({
      count:0
    });
  }

  handleCountClick(e){
    if(e.target.id === 'add' ){
      this.setState({
        count: this.state.count + 1
      });   
    }
    else  if(e.target.id === 'substraer' && this.state.count>0){
      this.setState({
        count: this.state.count - 1
      });  
    }
    else{
      this.setState({
        count: 0
      });  
    }
  }

  handleResultClick(e){
    if(e.target.id==='Suma'){
      this.setState({
        result:this.state.number1+this.state.number2
      });
    }
    else if(e.target.id==='Resta'){
      this.setState({
        result:this.state.number1-this.state.number2
      });
    }
    else if(e.target.id==='Multiplicar'){
      this.setState({
        result:this.state.number1*this.state.number2
      });
    }
    else if(e.target.id==='Dividir'){
      this.setState({
        result:this.state.number1/this.state.number2
      });
    }
     
  }
  handleInputChange(e){
    if(e.target.id==='number1'){
      this.setState({
        number1:Number(e.target.value)
      });
    }
    else{
      this.setState({
        number2:Number(e.target.value)
      });
    }
  }
    render() {
    //console.log('Hola Mundo');
    return (
      <div className="Content">
        <h2>Counter: {this.state.count} </h2> 
        <p>
          <button id="add" onClick={this.handleCountClick.bind(this)}>+</button>
          <button id="substraer" onClick={this.handleCountClick.bind(this)}>-</button>
          <button id="resetear" onClick={this.handleCountClick.bind(this)}>Resetear</button>
        </p>

        <h2>Calculadora</h2> 
        <p>
          <input id="number1" type="number" value={this.state.number1} onChange={this.handleInputChange} />
           
          <input id="number2" type="number" value={this.state.number2} onChange={this.handleInputChange}/>
          <br></br>
          <button id="Suma" onClick={this.handleResultClick.bind(this)}>+</button>
          <button id="Resta" onClick={this.handleResultClick.bind(this)}>-</button>
          <button id="Multiplicar" onClick={this.handleResultClick.bind(this)}>x</button>
          <button id="Dividir" onClick={this.handleResultClick.bind(this)}>%</button>
          <h4>{this.state.result}</h4>
        </p>
      </div>
    );
  }
}


export default Content;
