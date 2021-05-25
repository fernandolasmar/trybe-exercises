import React from 'react';
import './App.css';
import CardList from './Card-list';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const tarefas = ['Acordar', 'Tomar café', 'Escovar os dentes'];

class App extends React.Component {
  render() {
    return (
      <div>
        <ul>{ tarefas.map(tarefa => Task(tarefa)) }</ul>  
        <CardList />           
      </div>      
    );
  }  
}

export default App;
