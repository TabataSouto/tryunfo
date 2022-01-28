import React, { Component } from 'react';
import Input from './Input';

class Form extends Component {
  render() {
    return (
      <form>

        <Input
          name=""
          title="Nome"
          testId="name-input"
          type="text"
        />

        <label htmlFor="description-input">
          <p> Descrição </p>
          <textarea
            name=""
            data-testid="description-input"
          />
        </label>

        <div className="text-side">
          <Input
            name=""
            title="Attr01"
            testId="attr1-input"
            type="number"
          />
          <Input
            name=""
            title="Attr02"
            testId="attr2-input"
            type="number"
          />
          <Input
            name=""
            title="Attr03"
            testId="attr3-input"
            type="number"
          />
        </div>

        <div className="text-side">
          <Input
            name=""
            title="Imagem"
            testId="image-input"
            type="text"
          />
        </div>

        <div className="text-side">
          <label htmlFor="raro">
            <p> Raridade </p>
            <select name="rarol" data-testid="rare-input">
              <option> normal </option>
              <option> raro </option>
              <option> muito raro </option>
            </select>
          </label>
        </div>

        <label htmlFor="check">
          <input
            data-testid="trunfo-input"
            name="check"
            type="checkbox"
          />
          Super Zelda Tryunfo
        </label>

        <button data-testid="save-button" type="button">
          Salvar
        </button>

      </form>
    );
  }
}

export default Form;
