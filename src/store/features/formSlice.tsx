import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootStore } from 'store/store';
import { IFormsCard } from 'types/interfaces';

interface IState {
  cards: IFormsCard[];
}

const initialState: IState = {
  cards: [],
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setCards: (state, actions: PayloadAction<IFormsCard>) => {
      state.cards.push(actions.payload);
    },
  },
});

export const selectCards = (state: RootStore): IFormsCard[] => state.form.cards;

export const { setCards } = formSlice.actions;

export default formSlice.reducer;
