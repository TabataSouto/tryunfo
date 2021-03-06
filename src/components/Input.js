import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { value, name, onChange, title, id, testId, type, placeholder } = this.props;

    return (
      <label htmlFor={ id }>
        <p>{ title }</p>
        <input
          name={ name }
          data-testid={ testId }
          type={ type }
          value={ value }
          onChange={ onChange }
          placeholder={ placeholder }
        />
      </label>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  type: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number])
    .isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  // eslint-disable-next-line react/require-default-props
  placeholder: PropTypes.string,
};

export default Input;
