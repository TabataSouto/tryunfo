import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>

        <Input
          name="cardName"
          title="Nome"
          testId="name-input"
          type="text"
          value={ cardName }
          onChange={ onInputChange }
        />

        <label htmlFor="desc">
          <p> Descrição </p>
          <textarea
            name="cardDescription"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <div className="text-side">
          <Input
            name="cardAttr1"
            title="Attr01"
            testId="attr1-input"
            type="number"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
          <Input
            name="cardAttr2"
            title="Attr02"
            testId="attr2-input"
            type="number"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
          <Input
            name="cardAttr3"
            title="Attr03"
            testId="attr3-input"
            type="number"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </div>

        <div className="text-side">
          <Input
            name="cardImage"
            title="Imagem"
            testId="image-input"
            type="text"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </div>

        <div className="text-side">
          <label htmlFor="cardRare">
            <p> Raridade </p>
            <select
              name="cardRare"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option> normal </option>
              <option> raro </option>
              <option> muito raro </option>
            </select>
          </label>
        </div>

        <label htmlFor="cardTrunfo">
          <input
            data-testid="trunfo-input"
            name="cardTrunfo"
            type="checkbox"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
          Super Zelda Tryunfo
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

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
