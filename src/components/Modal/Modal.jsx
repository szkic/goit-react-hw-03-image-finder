import css from './Modal.module.css';

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
