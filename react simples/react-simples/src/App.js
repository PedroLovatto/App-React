import React, { Component } from 'react';
import './App.css';
import HelloWorld from './componentes/HelloWorld'


class App extends Component{
  render () {
   return <div>

      <HelloWorld nome="Teste React"/>
      <HelloWorld nome="Segundo Teste React"/>
      <HelloWorld nome="Terceiro Teste React"/>
    
   </div>
  }
}

export default App;
