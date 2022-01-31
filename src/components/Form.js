import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Input from './Input';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>

        <Header
          title="Adicionar nova carta"
        />

        <Input
          name="name"
          id="card-name"
          title="Nome"
          testId="name-input"
          type="text"
          value={ cardName }
          onChange={ onInputChange }
        />

        <label htmlFor="desc">
          <p> Descrição </p>
          <textarea
            name="desc"
            id="card-desc"
            rows="3"
            maxLength="265"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <div className="text-side">
          <Input
            name="attr1"
            id="arrr-1"
            title="Attr01"
            testId="attr1-input"
            type="number"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
          <Input
            name="attr2"
            id="arrr-2"
            title="Attr02"
            testId="attr2-input"
            type="number"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
          <Input
            name="attr3"
            id="arrr-3"
            title="Attr03"
            testId="attr3-input"
            type="number"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </div>

        <div className="text-side">
          <Input
            name="image"
            id="card-img"
            title="Imagem"
            testId="image-input"
            type="text"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </div>

        <div className="text-side">
          <label htmlFor="card-rare">
            <p> Raridade </p>
            <select
              name="rare"
              id="card-rare"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal"> normal </option>
              <option value="raro"> raro </option>
              <option value="muito raro"> muito raro </option>
            </select>
          </label>
        </div>

        <label htmlFor="card-trunfo">
          <input
            data-testid="trunfo-input"
            name="trunfo"
            id="card-trunfo"
            type="checkbox"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
          Super Tryunfo
        </label>

        <button
          data-testid="save-button"
          type="button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>

      </form>
    );
  }
}

const { string, bool, func } = PropTypes;
Form.propTypes = {
  cardName: string.isRequired,
  cardDescription: string.isRequired,
  cardAttr1: string.isRequired,
  cardAttr2: string.isRequired,
  cardAttr3: string.isRequired,
  cardImage: string.isRequired,
  cardRare: string.isRequired,
  cardTrunfo: bool.isRequired,
  // hasTrunfo: bool.isRequired,
  isSaveButtonDisabled: bool.isRequired,
  onInputChange: func.isRequired,
  onSaveButtonClick: func.isRequired,
};

export default Form;
