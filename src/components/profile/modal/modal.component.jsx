import React from 'react';

import './modal.styles.scss';

const Modal = ({ handleClose, show, children }) => {
    const showOrHideModal = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showOrHideModal}>
        <section className="modal-main">
          {children}
          <button onClick={handleClose}>close</button>
        </section>
      </div>
    );
  };

export default Modal;