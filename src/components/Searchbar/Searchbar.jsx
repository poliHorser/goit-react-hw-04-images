
import './Searchbar.css'
import React, { Component } from 'react';

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={(e) => this.setState({ query: e.target.value })}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
