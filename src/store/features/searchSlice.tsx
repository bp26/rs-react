import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootStore } from 'store/store';

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    query: '',
  },
  reducers: {
    setQuery: (state, actions: PayloadAction<string>) => {
      state.query = actions.payload;
    },
  },
});

export const selectQuery = (state: RootStore): string => state.search.query;

export const { setQuery } = searchSlice.actions;

export default searchSlice.reducer;
