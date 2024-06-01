import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {PokemonDetails, PokemonListResponse} from '../types';
import {apiUrl} from '../constants/network';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({baseUrl: apiUrl}),
  endpoints: builder => ({
    getPokemonDetails: builder.query<PokemonDetails, string>({
      query: url => url,
      transformResponse: (response: any) => {
        // transform the response if needed
        return response as PokemonDetails;
      },
    }),
    getPokemonList: builder.query<PokemonListResponse, void>({
      query: () => 'pokemon',
      transformResponse: (response: any) => {
        // transform the response if needed
        return response as PokemonListResponse;
      },
    }),
  }),
});

// Export hooks for usage in functional components
export const {
  useGetPokemonDetailsQuery,
  useGetPokemonListQuery,
  reducerPath,
  middleware,
  reducer,
} = pokemonApi;
