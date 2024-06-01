import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {PokemonDetails, PokemonListResponse} from '../types';
import {apiUrl} from '../constants/network';

const axiosInstance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  error => {
    console.error('API request error:', error);
    return Promise.reject(error);
  },
);

const axiosRequest = <T>(
  method: string,
  url: string,
  params: object = {},
  config: AxiosRequestConfig = {},
): Promise<T> => {
  const options: AxiosRequestConfig = {
    method,
    url,
    ...config,
  };

  if (method.toLowerCase() === 'get') {
    options.params = params;
  } else {
    options.data = params;
  }

  return axiosInstance(options)
    .then((response: AxiosResponse<T>) => response.data)
    .catch(error => {
      throw error;
    });
};

export const get = <T>(
  url: string,
  params?: object,
  config?: AxiosRequestConfig,
): Promise<T> => axiosRequest<T>('get', url, params, config);
export const post = <T>(
  url: string,
  params?: object,
  config?: AxiosRequestConfig,
): Promise<T> => axiosRequest<T>('post', url, params, config);

export default axiosRequest;

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
