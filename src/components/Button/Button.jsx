import React from 'react';
import './Button.css'
import  { Component } from 'react';

class Button extends Component {
  render() {
    const { onClick, disabled } = this.props;

    return (
      <button className="Button" onClick={onClick} disabled={disabled}>
        Load more
      </button>
    );
  }
}

export default Button;

