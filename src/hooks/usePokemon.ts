// src/hooks/usePokemon.ts

import {useGetPokemonListQuery} from '../services/network';

const usePokemon = () => {
  const {
    data: pokemonList,
    isLoading,
    error: pokemonListError,
  } = useGetPokemonListQuery();
  console.log('pokemonList', pokemonList);
  return {
    pokemonList,
    pokemonListError,
    isLoading,
  };
};

export default usePokemon;
