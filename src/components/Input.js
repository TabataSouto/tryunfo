import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { value, onChange, title, name, testId, type } = this.props;

    return (
      <label htmlFor={ name }>
        <p>{ title }</p>
        <input
          name={ name }
          data-testid={ testId }
          type={ type }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  type: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number])
    .isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
