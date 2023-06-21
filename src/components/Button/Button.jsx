import { Component } from 'react';
import css from './Button.module.css';
import PropTypes from 'prop-types';

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

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
