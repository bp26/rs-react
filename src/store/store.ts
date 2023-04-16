import { configureStore } from '@reduxjs/toolkit';
import searchSlice from './features/searchSlice';
import formSlice from './features/formSlice';

const store = configureStore({
  reducer: {
    search: searchSlice,
    form: formSlice,
  },
});

export type RootStore = ReturnType<typeof store.getState>;

export default store;
