import React, { Component } from 'react';
import DadosPessoaisForm from './DadosPessoais';
import DadosProfissional from './DadosProfissional';
import FormBtn from './FormBtn';
import './App.css';


class App extends Component {
  render() {
    return (
      <main className="main-app">
        <DadosPessoaisForm />
        <DadosProfissional />
        <FormBtn />
      </main>
    )
      
  }
}

export default App;
