import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiLink } from '../../config/config';

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: apiLink }),
  endpoints: (builder) => ({
    getCharactersByName: builder.query({
      query: (name) => `character/?name=${name}`,
    }),
    getCharacterById: builder.query({
      query: (id) => `character/${id}`,
    }),
  }),
});

export const { useGetCharactersByNameQuery, useGetCharacterByIdQuery } = apiSlice;

export default apiSlice;
