import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './CardModal.module.css';
import { IMainCard } from 'types/interfaces';

interface Props {
  closeModal: () => void;
  id: number;
}

const CardModal = ({ closeModal, id }: Props) => {
  const [data, setData] = useState<IMainCard>();

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch('https://rickandmortyapi.com/api/character/' + id);
      const data = await res.json();
      setData(data);
    };
    loadData();
  });

  return createPortal(
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <div>Loading...</div>
      </div>
    </div>,
    document.getElementById('modal-root') as HTMLElement
  );
};

export default CardModal;
