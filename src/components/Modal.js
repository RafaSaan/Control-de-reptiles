import "./Modal.css";

const Modal = ({ children, isOpenModal, closeModal }) => {
  return (
    <article className={`modal ${isOpenModal && "is-open"}`}>
      <div className="modal__container">
        <button className="modal__close" onClick={closeModal}>
          X
        </button>
        {children}
      </div>
    </article>
  );
};

export default Modal;
