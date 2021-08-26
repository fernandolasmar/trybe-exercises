import React, { Component } from 'react';

class FormBtn extends Component {
  render() {
    return (
      <div className="form-btn">
        <button type="submit">Enviar</button>
        <button type="reset">Limpar</button>        
      </div>
    )
  }
}

export default FormBtn;