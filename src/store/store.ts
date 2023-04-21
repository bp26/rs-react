import { configureStore } from '@reduxjs/toolkit';
import searchSlice from './features/searchSlice';
import formSlice from './features/formSlice';
import apiSlice from './features/apiSlice';

export const createStore = () =>
  configureStore({
    reducer: {
      search: searchSlice,
      form: formSlice,
      api: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  });

const store = createStore();

export type RootStore = ReturnType<typeof store.getState>;

export default store;
