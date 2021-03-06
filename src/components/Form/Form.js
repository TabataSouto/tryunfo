import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Input from '../Input';
import './Form.css';

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
      <section className="container-form-inputs">

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
          placeholder="Nome da carta"
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

        <div className="attributes">
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

        <div className="image-file">
          <Input
            name="image"
            id="card-img"
            title="Imagem"
            testId="image-input"
            type="text"
            value={ cardImage }
            onChange={ onInputChange }
            placeholder="imagem ilustrativa da carta"
          />
        </div>

        <div className="rarity">
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

        {
          hasTrunfo
            ? <p>Você já tem um Super Trunfo em seu baralho</p>
            : (
              <div className="super-trunfo">
                <label htmlFor="card-trunfo">
                  <input
                    data-testid="trunfo-input"
                    name="trunfo"
                    id="card-trunfo"
                    type="checkbox"
                    checked={ cardTrunfo }
                    onChange={ onInputChange }
                  />
                  Super Trunfo
                </label>
              </div>
            )
        }

        <button
          className="save-card"
          data-testid="save-button"
          type="button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>

      </section>
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
  hasTrunfo: bool.isRequired,
  isSaveButtonDisabled: bool.isRequired,
  onInputChange: func.isRequired,
  onSaveButtonClick: func.isRequired,
};

export default Form;
