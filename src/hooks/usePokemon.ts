import {useGetPokemonListQuery} from '../services/network';

const usePokemon = () => {
  const {
    data: pokemonList,
    isLoading,
    error: pokemonListError,
  } = useGetPokemonListQuery();

  return {
    pokemonList,
    pokemonListError,
    isLoading,
  };
};

export default usePokemon;
