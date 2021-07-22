import React from 'react';
import Grandmother from './Grandmother';
import MyContext from './Mycontext';

class GreatGranmother extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      money: 1000000
    }
    this.handleSpendMoney = this.handleSpendMoney.bind(this);
  }

  handleSpendMoney() {
    this.setState((prevState) => ({ money: prevState.money - 100 }))
  }

  render() {
    const contextValue = {
      money: this.state.money,
      spendMoney: this.handleSpendMoney
    }
    return (
      <MyContext.Provider value={contextValue}>
        <div>
          <h1>Eu sou o BISAVÔ</h1>
          <Grandmother />
        </div>
      </MyContext.Provider>
    )
  }
}

export default GreatGranmother;