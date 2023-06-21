import css from './Modal.module.css';
import PropTypes from 'prop-types';

export const Modal = ({ imageAddress, modalClose }) => {
  window.addEventListener('keydown', e => {
    e.key === 'Escape' && modalClose();
  });

  return (
    <div className={css.Overlay} onClick={modalClose}>
      <div className={css.Modal}>
        <img src={imageAddress} alt="modal" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  imageAddress: PropTypes.string,
  modalClose: PropTypes.func,
};
