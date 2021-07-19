import React, { Component } from 'react';
import './App.css';
import HelloWorld from './componentes/HelloWorld'
import dados from './componentes/dados.json'


const Dados = dados.DadosUsers;

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      Nome: "",
      Idade: "25",
      Time: "Chelsea" 
    }
  };

  mudarInfo = () => {
    this.setState ({Idade: "28"});
  }

  EnviarNome = (event) => {
    this.setState ({Nome: event.target.value});
  }


  render () {
   return <div>

    <h2>EXEMPLO STATE</h2>

    <p>Teste State - Nome: {this.state.Nome}</p>
    <p>Teste State - Idade: {this.state.Idade}</p>
    <p>Teste State - Time: {this.state.Time}</p>

    <button onClick={this.mudarInfo}>Mudar idade</button>


    <h2>EXEMPLO COMPONENTES</h2>

      <HelloWorld nome="Teste React"/>
      <HelloWorld nome="Segundo Teste React"/>
      <HelloWorld nome="Terceiro Teste React"/>
      

    <h2>EXEMPLO FORM</h2>

      <form>

        <p>Digite um nome: </p>
        
        <input type="text" onChange={this.EnviarNome}/>

         {/* <input type="submit" />  */}

        <p>nome: {this.state.Nome}</p>

      </form>

      <ul>
        {Dados.map(s => (<li>{s}</li>))}
      </ul>

    
   </div>
  }
}

export default App;
