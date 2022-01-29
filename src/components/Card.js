import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

class Card extends Component {
  // referência: ajuda do colega Paolo Enrico;
  // função para trazer o texto super trunfo apenas se o check for true;
  handleTrunfo(cardTrunfo) {
    if (cardTrunfo) {
      return (
        <p data-testid="trunfo-card">Super Trunfo</p>
      );
    }
  }

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
    } = this.props;

    return (
      <section id="container-card">

        <Header title="Pré-visualização" />

        <section id="card">

          <h3 data-testid="name-card">{ cardName }</h3>
          <img data-testid="image-card" src={ cardImage } alt={ cardName } />
          <p data-testid="description-card">{ cardDescription }</p>
          <p data-testid="attr1-card">{`Attr01................... ${cardAttr1}`}</p>
          <p data-testid="attr2-card">{`Attr02................... ${cardAttr2}`}</p>
          <p data-testid="attr3-card">{`Attr03................... ${cardAttr3}`}</p>
          <p data-testid="rare-card">{ cardRare }</p>
          {/* invocando a função para trazer apenas se o estado for true; Referência: ajuda do colega Paolo Enrico; */}
          { this.handleTrunfo(cardTrunfo) }

        </section>
      </section>
    );
  }
}

const { string, bool } = PropTypes;
Card.propTypes = {
  cardName: string.isRequired,
  cardDescription: string.isRequired,
  cardAttr1: string.isRequired,
  cardAttr2: string.isRequired,
  cardAttr3: string.isRequired,
  cardImage: string.isRequired,
  cardRare: string.isRequired,
  cardTrunfo: bool.isRequired,
};

export default Card;
