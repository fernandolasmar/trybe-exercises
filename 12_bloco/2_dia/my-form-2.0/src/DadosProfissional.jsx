import React, { Component } from 'react';

class DadosProfissional extends Component {
  render() {
    return (
      <fieldset>
        <legend>Dados profissionais:</legend>
        <div>Resumo do currículo <br/>
          <textarea name="resumo" maxLength="1000" required />
        </div>
        <div>Cargo<br/>
          <textarea name="cargo" maxLength="40" required />
        </div>
        <div>Descrição do cargo<br/>
          <textarea name="descrição-cargo" maxLength="500" required />
        </div>
      </fieldset>
    )
  }
}

export default DadosProfissional;