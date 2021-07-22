import React, { Component } from 'react'
import MyContext from './Mycontext'

export default class Daugther extends Component {
  render() {
    return (
      <div>
        <h4>Eu sou o FILHO</h4>
        <MyContext.Consumer>
          {
            value => (
              <div>
                <p>{`Eu tenho ${value.money} pra gastar`}</p>
                <button onClick={value.spendMoney}>IFOOD</button>
              </div>
            )
          }
        </MyContext.Consumer>
      </div>
    )
  }
}
