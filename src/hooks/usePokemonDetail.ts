// src/hooks/usePokemon.ts

import {useGetPokemonDetailsQuery} from '../services/network';

const usePokemonDetail = (pokemonUrl: string) => {
  const {
    data: pokemonDetails,
    error,
    isLoading,
  } = useGetPokemonDetailsQuery(pokemonUrl); // Call the hook directly

  return {
    pokemonDetails,
    error,
    isLoading,
  };
};

export default usePokemonDetail;
