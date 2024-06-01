import {renderHook} from '@testing-library/react-hooks';
import {useGetPokemonListQuery} from '../../../src/services/network';
import usePokemon from '../../../src/hooks/usePokemon';

// Mock the useGetPokemonListQuery hook
jest.mock('../../../src/services/network', () => ({
  useGetPokemonListQuery: jest.fn(),
}));
describe('usePokemon', () => {
  it('returns the correct values when data is available', () => {
    // Mock the data returned by useGetPokemonListQuery
    const mockData = {
      data: ['pokemon1', 'pokemon2', 'pokemon3'],
      isLoading: false,
      error: null,
    };
    (useGetPokemonListQuery as jest.Mock).mockReturnValue(mockData);

    // Render the hook
    const {result} = renderHook(() => usePokemon());

    // Assert that the returned values match the mock data
    expect(result.current.pokemonList).toEqual(mockData.data);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.pokemonListError).toBeNull();
  });

  it('handles loading state correctly', () => {
    const mockData = {
      data: null,
      isLoading: true,
      error: null,
    };

    (useGetPokemonListQuery as jest.Mock).mockReturnValue(mockData);

    const {result} = renderHook(() => usePokemon());
    // Assert that isLoading is true
    expect(result.current.isLoading).toBe(true);
    // Assert that other values are null or undefined
  });

  it('handles error state correctly', () => {
    // Render the hook
    const mockErrorData = {
      data: null,
      isLoading: false,
      error: 'Error fetching data',
    };

    (useGetPokemonListQuery as jest.Mock).mockReturnValue(mockErrorData);

    const {result} = renderHook(() => usePokemon());

    expect(result.current.pokemonListError).toBe('Error fetching data');
  });
});
