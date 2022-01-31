import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Header from './components/Header';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      form: {
        name: '',
        desc: '',
        attr1: '0',
        attr2: '0',
        attr3: '0',
        image: '',
        rare: 'normal',
        trunfo: false,
      },
      saveButton: true,
      saveInfosState: [],
    };

    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  // handleToUpdateState() {
  //   this.setState({
  //     form: {
  //       name: '',
  //       desc: '',
  //       attr1: '0',
  //       attr2: '0',
  //       attr3: '0',
  //       image: '',
  //       rare: 'normal',
  //       trunfo: false,
  //     },
  //     saveButton: true,
  //   });
  // }

  onInputChange({ target: { name, type, checked, value } }) {
    this.setState((prevState) => ({
      //
      form: { ...prevState.form, [name]: type === 'checkbox' ? checked : value },
    }));

    this.setState((state) => {
      // desestruturação das chaves necessárias do estado;
      const { name: nameState, desc, image, rare } = state.form;
      const { attr1, attr2, attr3 } = state.form;

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
    const {
      form:
      {
        name,
        desc,
        attr1,
        attr2,
        attr3,
        image,
        rare,
        trunfo,
      },
    } = this.state;

    const objectPrevState = {
      name,
      desc,
      attr1,
      attr2,
      attr3,
      image,
      rare,
      trunfo,
    };

    // pegamos o estado anterior (prevState) e armazenamos dentro do nosso arrei declarado no estado mais as informações que são salvas no objeto;
    this.setState((prevState) => ({
      saveInfosState: [...prevState.saveInfosState, objectPrevState],
    }), () => {
      // redefinimos todos os campos para o estado inicial após clicar no botão de salvar, e isso deve ser feito depois de salvar as informações dentro do array, do contrário nosso array será salvo com o valor das chaves igual ao estado inicial;
      this.setState({
        form: {
          name: '',
          desc: '',
          attr1: '0',
          attr2: '0',
          attr3: '0',
          image: '',
          rare: 'normal',
          trunfo: false,
        },
        saveButton: true,
      });
    });
  }

  render() {
    const {
      form: {
        name,
        desc,
        attr1,
        attr2,
        attr3,
        image,
        rare,
        trunfo,
      },
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
