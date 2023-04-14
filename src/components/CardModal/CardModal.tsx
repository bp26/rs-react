import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './CardModal.module.css';
import { IMainCard } from 'types/interfaces';

interface Props {
  openModal: (setOpen: boolean, cardId: number) => void;
  cardId: number;
}

const CardModal = ({ openModal, cardId }: Props) => {
  const [data, setData] = useState<IMainCard>();

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch('https://rickandmortyapi.com/api/character/' + cardId);
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
