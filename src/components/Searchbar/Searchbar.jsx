import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    name: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name } = this.state;

    this.props.onSubmit(name);

    this.setState({ name: '' });
  };

  handleChange = e => {
    const { value } = e.currentTarget;
    this.setState({ name: value });
  };

  render() {
    const { name } = this.state;

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
            onChange={this.handleChange}
            value={name}
          />
        </form>
      </header>
    );
  }
}
