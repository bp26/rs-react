import { configureStore } from '@reduxjs/toolkit';
import searchSlice from './features/searchSlice';
import formSlice from './features/formSlice';
import apiSlice from './features/apiSlice';

const store = configureStore({
  reducer: {
    search: searchSlice,
    form: formSlice,
    api: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootStore = ReturnType<typeof store.getState>;

export default store;
