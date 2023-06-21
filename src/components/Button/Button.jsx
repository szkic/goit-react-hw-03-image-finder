import { Component } from 'react';
import css from './Button.module.css';
export class Button extends Component {
  handleClick = e => this.props.onClick(e);

  render() {
    return (
      <button type="button" onClick={this.handleClick} className={css.Button}>
        Load more
      </button>
    );
  }
}
