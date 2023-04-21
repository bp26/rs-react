import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './MainPage.module.css';
import Search from '../../components/Search/Search';
import CardsList from '../../components/CardsList/CardsList';
import { joinClassNames } from '../../utils/utils';
import CardModal from '../../components/Modal/CardModal/CardModal';
import Modal from '../../components/Modal/Modal';
import Spinner from '../../components/Spinner/Spinner';
import { selectQuery } from '../../store/features/searchSlice';
import { useGetCharactersByNameQuery } from '../../store/features/apiSlice';

const MainPage = () => {
  const query = useSelector(selectQuery);
  const [isModalOpen, setModalOpen] = useState(false);
  const [cardId, setCardId] = useState(1);
  const { data, isLoading, isError, isFetching } = useGetCharactersByNameQuery(query);

  const openModal = (cardId: number) => {
    setCardId(cardId);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  let content;
  if (isLoading || isFetching) {
    content = <Spinner />;
  } else if (isError) {
    content = <div data-testid="mainpage-error">Error! Please change search query. </div>;
  } else if (data.results) {
    content = <CardsList cards={data.results} openModal={openModal} />;
  }

  return (
    <div className={joinClassNames(styles.main, 'page')}>
      <Search />
      {content}
      {isModalOpen && (
        <Modal closeModal={closeModal}>
          <CardModal closeModal={closeModal} cardId={cardId} />
        </Modal>
      )}
    </div>
  );
};

export default MainPage;
