import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { title, name, testId, type } = this.props;

    return (
      <label htmlFor={ name }>
        <p>{ title }</p>
        <input
          name={ name }
          data-testid={ testId }
          type={ type }
        />
      </label>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  type: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Input;
