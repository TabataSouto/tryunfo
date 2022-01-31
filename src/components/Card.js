import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  // referência: ajuda do colega Paolo Enrico;
  // função para trazer o texto super trunfo apenas se o check for true;
  handleTrunfo(cardTrunfo) {
    if (cardTrunfo) {
      return (
        <p data-testid="trunfo-card" className="super-trunfo">Super Trunfo</p>
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
      <section className="card">
        <div className="card-border">
          <div className="last-border">
            <h2 data-testid="name-card">{ cardName }</h2>
            <img data-testid="image-card" src={ cardImage } alt={ cardName } />
            <p data-testid="description-card" className="desc">{ cardDescription }</p>
            <div className="attr">
              <p data-testid="attr1-card">
                {`Attr01................................ ${cardAttr1}`}
              </p>
              <p data-testid="attr2-card">
                {`Attr02................................ ${cardAttr2}`}
              </p>
              <p data-testid="attr3-card">
                {`Attr03................................ ${cardAttr3}`}
              </p>
            </div>
            <p data-testid="rare-card" className="rare">{ cardRare }</p>
            {/* invocando a função para trazer apenas se o estado for true; Referência: ajuda do colega Paolo Enrico; */}
            { this.handleTrunfo(cardTrunfo) }
          </div>
        </div>
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
