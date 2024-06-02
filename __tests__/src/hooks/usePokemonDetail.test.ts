import {renderHook} from '@testing-library/react-hooks';
import {useGetPokemonDetailsQuery} from '../../../src/services/network';
import usePokemonDetail from '../../../src/hooks/usePokemonDetail';

// Mock the useGetPokemonDetailsQuery hook

jest.mock('../../../src/services/network', () => ({
  useGetPokemonDetailsQuery: jest.fn(),
}));

describe('usePokemonDetail Hook', () => {
  it('should return loading state initially', () => {
    (useGetPokemonDetailsQuery as jest.Mock).mockReturnValue({
      data: null,
      error: null,
      isLoading: true,
    });

    const {result} = renderHook(() =>
      usePokemonDetail('https://pokeapi.co/api/v2/pokemon/1/'),
    );
    expect(result.current.isLoading).toBe(true);
    expect(result.current.pokemonDetails).toBeNull();
    expect(result.current.error).toBeNull();
  });

  it('should return data when the API call is successful', () => {
    const mockData = {name: 'bulbasaur', id: 1};
    (useGetPokemonDetailsQuery as jest.Mock).mockReturnValue({
      data: mockData,
      error: null,
      isLoading: false,
    });

    const {result} = renderHook(() =>
      usePokemonDetail('https://pokeapi.co/api/v2/pokemon/1/'),
    );
    expect(result.current.isLoading).toBe(false);
    expect(result.current.pokemonDetails).toEqual(mockData);
    expect(result.current.error).toBeNull();
  });

  it('should return an error when the API call fails', () => {
    const mockError = new Error('Failed to fetch');
    (useGetPokemonDetailsQuery as jest.Mock).mockReturnValue({
      data: null,
      error: mockError,
      isLoading: false,
    });

    const {result} = renderHook(() =>
      usePokemonDetail('https://pokeapi.co/api/v2/pokemon/1/'),
    );
    expect(result.current.isLoading).toBe(false);
    expect(result.current.pokemonDetails).toBeNull();
    expect(result.current.error).toEqual(mockError);
  });
});
