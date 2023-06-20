export const Modal = ({ imageAddress, modalClose }) => {
  window.addEventListener('keydown', e => {
    e.key === 'Escape' && modalClose();
  });

  return (
    <div className="Overlay" onClick={modalClose}>
      <div className="Modal">
        <img src={imageAddress} alt="" />
      </div>
    </div>
  );
};
