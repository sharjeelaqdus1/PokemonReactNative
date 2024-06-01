import React from 'react';
import {render} from '@testing-library/react-native';
import HomeScreen from '../../../src/screens/Home/Home';

jest.mock('react-native-config', () => ({
  API_URL: 'https://pokeapi.co/api/v2/', // Provide the desired value for API_URL
}));

jest.mock('../../../src/services/network', () => ({
  useGetPokemonListQuery: () => {
    return {data: [], isLoading: false};
  },
}));

describe('HomeScreen', () => {
  it('renders without error', () => {
    const {getByTestId} = render(
      <HomeScreen navigation={{} as any} route={{} as any} />,
    );
    const homeScreen = getByTestId('home-screen');

    expect(homeScreen).toBeDefined();
  });
});
