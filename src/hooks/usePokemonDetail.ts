// src/hooks/usePokemon.ts

import {useGetPokemonDetailsQuery} from '../services/network';

const usePokemonDetail = (pokemonUrl: string) => {
  const {data: pokemonDetails, error} = useGetPokemonDetailsQuery(pokemonUrl); // Call the hook directly

  return {
    pokemonDetails,
    error,
  };
};

export default usePokemonDetail;
