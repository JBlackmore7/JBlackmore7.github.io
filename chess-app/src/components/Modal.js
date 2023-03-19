import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const Modal = ({ isShowing, hide, children }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className={styles.modalOverlay} />
          <div className={styles.modalWrapper} aria-modal aria-hidden tabIndex={-1} role="dialog">
            <div className={styles.modal}>
              <div className={styles.modalHeader}>
                <button
                  type="button"
                  className={styles.modalCloseButton}
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              {children}
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default Modal;
