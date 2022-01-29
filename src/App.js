import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Header from './components/Header';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      desc: '',
      attr1: '',
      attr2: '',
      attr3: '',
      image: '',
      rare: '',
      trunfo: false,
      saveButton: true,
    };

    this.isSaveButtonDisabled = this.isSaveButtonDisabled.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange({ target: { name, type, checked, value } }) {
    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    });

    this.setState((state) => {
      // desestruturação das chaves necessárias do estado;
      const { name: nameState, desc, image, rare } = state;
      const { attr1, attr2, attr3 } = state;

      // criação de arrays para utilização de hofs;
      const arrString = [nameState, desc, image, rare];
      const arrNumber = [Number(attr1), Number(attr2), Number(attr3)];

      // verifica se todos os campos string foram preenchidos através do tamanho de cada elemento;
      const everyString = arrString
        .every((element) => element.length > 0);

      // verifica se todos os atributos possuem valor maior que 90 ou menor que 0;
      const number1 = 90;
      const everyNumber = arrNumber
        .every((number) => number <= number1 && number >= 0);

      // verificar se a soma de todos os elementos do array de numero é menor que 210;
      const number2 = 210;
      const sumNumbers = arrNumber.reduce((acc, sum) => acc + sum, 0);

      // condição que informa se o botão salvar será habilitado ou não;
      if (everyString && everyNumber && sumNumbers <= number2) {
        return { saveButton: false };
      }
      return { saveButton: true };
    });
  }

  onSaveButtonClick() {
    // this.state({
    //   saveButton: false,
    // });
  }

  isSaveButtonDisabled() {
    // console.log('Olá');
    this.setState({
      saveButton: false,
    });
  }

  render() {
    const {
      name,
      desc,
      attr1,
      attr2,
      attr3,
      image,
      rare,
      trunfo,
      saveButton,
    } = this.state;
    const { onInputChange, onSaveButtonClick } = this;

    return (
      <section id="container">

        <section id="container-form">
          <Form
            cardName={ name }
            cardDescription={ desc }
            cardAttr1={ attr1 }
            cardAttr2={ attr2 }
            cardAttr3={ attr3 }
            cardImage={ image }
            cardRare={ rare }
            cardTrunfo={ trunfo }
            onInputChange={ onInputChange }
            isSaveButtonDisabled={ saveButton }
            onSaveButtonClick={ onSaveButtonClick }
          />
        </section>

        <section id="container-card">
          <Header title="Pré-visualização" />
          <Card
            cardName={ name }
            cardDescription={ desc }
            cardAttr1={ attr1 }
            cardAttr2={ attr2 }
            cardAttr3={ attr3 }
            cardImage={ image }
            cardRare={ rare }
            cardTrunfo={ trunfo }
          />
        </section>
      </section>
    );
  }
}

export default App;
// apenas para commit
