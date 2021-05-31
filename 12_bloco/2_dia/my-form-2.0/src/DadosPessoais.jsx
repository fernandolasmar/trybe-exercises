import React, { Component } from 'react';

const cidades = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins' ];


class DadosPessoaisForm extends Component {
  render() {
    return (
      <div>
        <h1 className="h1-formulario">Formulário</h1>
        <fieldset>
          <legend>Dados Pessoais</legend>
          <div>
            <label>
              Nome:<br/> 
              <input type="name" name="name" maxLength="40" required/>
            </label>
          </div>
          <div>
            <label>
              Email:<br/>  
              <input type="name" name="email" maxLength="50" required />
            </label>
          </div>
          <div>
            <label>
              CPF:<br/>  
              <input type="name" name="cpf" maxLength="11" required />
            </label>
          </div>
          <div>
            <label>
              Endereço:<br/>  
              <input type="name" name="endereço" maxLength="200" required/>
            </label>
          </div>
          <div>
            <label>
              Cidade:<br/>  
              <input type="name" name="cidade" maxLength="28" required/>
            </label>
          </div>
          <div>
            Estado:<br/>  
            <select type="name" name="estado" required>
              <option>Selecione</option>
            </select>  
          </div>
          <div>
            <label>
              Casa: 
              <input type="radio" name="casa" required/>
            </label>
            <label>
              Apartamento: 
              <input type="radio" name="apartamento" required/>
            </label>
          </div>
        
        </fieldset>
      </div>
    
    )
  }
}

export default DadosPessoaisForm;