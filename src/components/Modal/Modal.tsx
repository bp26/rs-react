import React, { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

interface Props {
  closeModal?: () => void;
}

const Modal = ({ children, closeModal }: PropsWithChildren<Props>) => {
  return createPortal(
    <div className={styles.backdrop} onClick={closeModal}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root') as HTMLElement
  );
};

export default Modal;
