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
        hasTrunfo: false,
      },
      saveButton: true,
      saveInfosState: [],
    };

    this.onDeleteCard = this.onDeleteCard.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  // função que muda o estado de acordo com as condições;
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

  // Função para deletar o card;
  onDeleteCard({ target: { name } }) {
    // const card = target.name;
    const { saveInfosState } = this.state;

    const findCard = saveInfosState
      .filter((card) => name !== card.name);

    this.setState({
      saveInfosState: findCard,
    });
  }

  // função que salva as informações do estado em um novo objeto ao clicar em salvar, e redefine os valores do estado para o inicial;
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
        hasTrunfo,
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
      hasTrunfo,
    };

    // pegamos o estado anterior (prevState) e armazenamos dentro do nosso arrei declarado no estado mais as informações que são salvas no objeto;
    this.setState((prevState) => ({
      saveInfosState: [...prevState.saveInfosState, objectPrevState],
    }), () => {
      // redefinimos todos os campos para o estado inicial após clicar no botão de salvar, e isso deve ser feito depois de salvar as informações dentro do array, do contrário nos so array será salvo com o valor das chaves igual ao estado inicial;
      const { form: { trunfo: trunfo1 } } = this.state;
      console.log(trunfo1);
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
          // o trunfo (aparentemente) pega o valor que está setado no no estado (linha 84) e não o novo valor que está sendo setado (linha 114);
          hasTrunfo: trunfo1,
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
        hasTrunfo,
      },
      saveInfosState,
      saveButton,
    } = this.state;

    const { onInputChange, onSaveButtonClick, onDeleteCard } = this;

    return (
      <section className="main">

        <section id="container">
          <section className="container-form">
            <Form
              cardName={ name }
              cardDescription={ desc }
              cardAttr1={ attr1 }
              cardAttr2={ attr2 }
              cardAttr3={ attr3 }
              cardImage={ image }
              cardRare={ rare }
              cardTrunfo={ trunfo }
              hasTrunfo={ hasTrunfo }
              onInputChange={ onInputChange }
              isSaveButtonDisabled={ saveButton }
              onSaveButtonClick={ onSaveButtonClick }
            />
          </section>

          <section className="container-card">
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

        <div className="separator" />

        <section className="card-list">
          <h2> Todas as Cartas </h2>
          { saveInfosState.map((element) => (
            <div key={ element.name }>
              <Card
                cardName={ element.name }
                cardDescription={ element.desc }
                cardAttr1={ element.attr1 }
                cardAttr2={ element.attr2 }
                cardAttr3={ element.attr3 }
                cardImage={ element.image }
                cardRare={ element.rare }
                cardTrunfo={ element.trunfo }
              />
              <button
                name={ element.name }
                type="button"
                data-testid="delete-button"
                onClick={ onDeleteCard }
              >
                Excluir
              </button>
            </div>
          ))}
        </section>
      </section>
    );
  }
}

export default App;
// apenas para commit
