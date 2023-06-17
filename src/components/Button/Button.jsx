import { Component } from 'react';

export class Button extends Component {
  handleClick = e => this.props.onClick(e);

  render() {
    return (
      <button type="button" onClick={this.handleClick} className="Button">
        Load more
      </button>
    );
  }
}
