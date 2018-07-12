import React, { Component } from 'react';
import './css/Content.css';

class Content extends Component {
  
  constructor(){
  	//Para usar this:
  	super ();
  	// El State es un objeto/nodos y cambiará el render
  	this.state = {
  		count:0,
  		number1:0,
  		number2:0,
  		result:0
  	};

  	//Pasar contexto
  	this.handleCountClick = this.handleCountClick.bind(this);
  	this.handleResultClick = this.handleResultClick.bind(this);
  	this.handleInputValueChanged = this.handleInputValueChanged.bind(this);
  }
  /* Usando props
  constructor(props){
  	//Para usar this:
  	super (props);
	console.log(this.props);
  }
  */

  //Flujo de vida de un componente:
  // ¿El componente ya cargó?
  componentDidMount(){
  	this.setState({count:1});
  }

  handleCountClick(e){
	//console.log(e)
  	if(e.target.id==='add'){
  		this.setState({
  			count: this.state.count+1
  		});
  	}else if(e.target.id==='substract'&& this.state.count > 0){
  		this.setState({
  			count: this.state.count-1
  		});
  	}else{
  		this.setState({
  			count: 0
  		});
  	}
  	
  }

  //Resultado de la operación
  handleResultClick(e){
  	this.setState({
  		result: this.state.number1 + this.state.number2
  	});
  }

  //Verifica cambios en los valores
  handleInputValueChanged(e){
  	if(e.target.id==='number1'){
  		this.setState({
  			number1: Number(e.target.value) //Valor del input html
  		});
  	}else{
  		this.setState({
  			number2: Number(e.target.value) //Valor del input html
  		});
  	}
  }

  render() {
  	//Saldrá este mensaje dos veces:
  	console.log('Se ejecutó el render')
    return (
      <div className="Content">
          <h4>Counter: {this.state.count}</h4>
          <p>
	          <button id="add" onClick={this.handleCountClick}>add</button>
	          <button id="substract" onClick={this.handleCountClick}>substract</button>
	          <button id="reset" onClick={this.handleCountClick}>reset</button>

          </p>

          <h2>Calculator</h2>

          <p>
          	<input id="number1" type="number" value={this.state.number1} onChange={this.handleInputValueChanged}/>
          	+
          	<input id="number2" type="number" value={this.state.number2} onChange={this.handleInputValueChanged}/>

          	<button id="result" onClick={this.handleResultClick}>=</button>

          	{this.state.result}
          </p>
      </div>
    );
  }
}

export default Content;
