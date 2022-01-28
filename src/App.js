import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

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

    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange({ target: { type, name, value, checked } }) {
    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    });
  }

  onSaveButtonClick() {
    this.state({
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
          <Card />
        </section>

      </section>
    );
  }
}

export default App;
