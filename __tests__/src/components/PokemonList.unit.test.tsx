import React from 'react';
import {render} from '@testing-library/react-native';
import PokemonList from '../../../src/components/PokemonList';

jest.mock('../../../src/hooks/usePokemon', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    pokemonList: {
      results: [
        {name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/'},
      ],
    },
  })),
}));

jest.mock('../../../src/hooks/usePokemonDetail', () => ({
  __esModule: true,
  default: jest.fn(() => ({})),
}));

jest.mock('../../../src/services/network', () => ({
  useGetPokemonDetailsQuery: jest.fn(),
}));

describe('PokemonList Component', () => {
  it('renders list items correctly', () => {
    const {getByTestId, getByText} = render(<PokemonList />);
    expect(getByTestId('PokemonCommonList')).toBeTruthy();
    expect(getByText('bulbasaur')).toBeTruthy(); // Assumes PokemonListItem renders the name
  });

  it('renders with custom onEndReached and onEndReachedThreshold', () => {
    const onEndReached = jest.fn();
    const onEndReachedThreshold = 0.5;
    const {getByTestId} = render(
      <PokemonList
        onEndReached={onEndReached}
        onEndReachedThreshold={onEndReachedThreshold}
      />,
    );
    expect(getByTestId('PokemonCommonList')).toBeTruthy();
    // Test if props are passed down to CommonList
    expect(getByTestId('PokemonCommonList').props.onEndReached).toBe(
      onEndReached,
    );
    expect(getByTestId('PokemonCommonList').props.onEndReachedThreshold).toBe(
      onEndReachedThreshold,
    );
  });
});
