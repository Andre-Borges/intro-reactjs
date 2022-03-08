import React, { Component } from 'react';

import TechItem from './TechItem';

import './styles.css';

class TechList extends Component {
  // class quando for usar state
  state = {
    newTech: '',
    techs: [],
  };

  // Executado assim que o componente aparece em tela
  componentDidMount() {
    const techs = localStorage.getItem('techs');

    if (techs) {
      this.setState({ techs: JSON.parse(techs) });
    }
  }

  // Executado sempre que houver alterações nas props ou estado
  componentDidUpdate(_, prevState) {
    // prevProps, prevState // this.props, this.state
    if (prevState.techs !== this.state.techs) {
      localStorage.setItem('techs', JSON.stringify(this.state.techs));
    }
  }

  // Executado quando o componente deixa de existir
  componentWillUnmount() {}

  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    // ... this.state.techs -> pega tudo dentro do array,
    // é necessário atribuir novamente o conteudo do array para se alterar o estado.
    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: '',
    });
  };

  handleDelete = tech => {
    // Arrow function no button pra executar apenas quando clicar
    this.setState({ techs: this.state.techs.filter(t => t !== tech) });
  };

  render() {
    console.log(this.state);
    const techs = this.state.techs;
    return (
      <form id="tech_form" onSubmit={this.handleSubmit}>
        {/* <h1>{this.state.newTech}</h1> */}
        <ul>
          {techs.map(tech => (
            <TechItem
              key={tech}
              tech={tech}
              onDelete={() => this.handleDelete(tech)}
            />
          ))}
        </ul>
        <div class="actions">
          <input
            type="text"
            onChange={this.handleInputChange}
            value={this.state.newTech}
          />
          <button type="submit">Enviar</button>
        </div>
      </form>
    );
  }
}

export default TechList;
