import React, { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

const Modal = ({ children }: PropsWithChildren) => {
  return createPortal(
    <div className={styles.backdrop}>
      <div className={styles.modal}>{children}</div>
    </div>,
    document.getElementById('modal-root') as HTMLElement
  );
};

export default Modal;
