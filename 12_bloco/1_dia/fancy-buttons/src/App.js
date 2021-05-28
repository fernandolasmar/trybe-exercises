import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    /* Para definir um estado inicial ao componente, a ser definido
    no momento em que o componente for colocado na tela, faça uma atribuição
    de um objeto à chave `state` do `this`, ou seja, ao `this.state`*/
    this.btn1 = this.btn1.bind(this);  // para fazer a conexao com o this dentro do render, senão ele não enxerga o this
    this.btn2 = this.btn2.bind(this);
    this.btn3 = this.btn3.bind(this);

    this.state = {
      clickBtn1: 0,
      clickBtn2: 0,
      clickBtn3: 0,
    };
    // console.log('Constructor teste')
  }

  btn1() {
     /* Você **NUNCA** deve fazer atribuições diretamente a `this.state`. Deve,
    ao invés disso, SEMPRE utilizar a função `this.setState(novoEstado)` do
    React*/
    this.setState((estadoAnterior, _props) => ({
      clickBtn1: estadoAnterior.clickBtn1 + 1,
    }));
    // console.log('Clicou no botão 1');
  }

  btn2() {
    this.setState((estadoAnterior, _props) => ({
      clickBtn2: estadoAnterior.clickBtn2 + 1,
    }));
  }

  btn3() {
    this.setState((estadoAnterior, _props) => ({
      clickBtn3: estadoAnterior.clickBtn3 + 1,
    }));
  }
  

  render() {
    // console.log(this);
    return (
    <div>
      <button onClick={this.btn1}>{this.state.clickBtn1}</button>
      <button onClick={this.btn2}>Teste = {this.state.clickBtn2}</button>
      <button onClick={this.btn3}>Botão 3 quantidade de clicks = {this.state.clickBtn3}</button>
    </div>
    )
  }    
}

export default App;


/*
  Para criar so os botoes, sem contagem
    import React from 'react';

    class App extends React.Component {
      constructor() {
        super();

        this.handleButtonOne = this.handleButtonOne.bind(this);
        this.handleButtonTwo = this.handleButtonTwo.bind(this);
        this.handleButtonThree = this.handleButtonThree.bind(this);

        this.state = {
          clicksBtnOne: 0,
          clicksBtnTwo: 0,
          clicksBtnThree: 0,
        };
      }

      handleButtonOne() {
        this.setState(() => ({
          clicksBtnOne: 1,
        }));
      }
      
      handleButtonTwo() {
        this.setState(() => ({
          clicksBtnTwo: 1,
        }));
      }
      
      handleButtonThree() {
        this.setState(() => ({
          clicksBtnThree: 1,
        }));
      }
     
       render() {
        return (
          <div>
            <button onClick={ this.handleButtonOne }>Botão 1</button>
            <button onClick={ this.handleButtonTwo }>Botão 2</button>
            <button onClick={ this.handleButtonThree }>Botão 3</button>
          </div>
        );
      }
    }

    export default App;
    */