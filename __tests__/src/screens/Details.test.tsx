import React from 'react';
import {render} from '@testing-library/react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import PokemonDetail from '../../../src/components/PokemonDetail';
import PokemonDetailScreen from '../../../src/screens/Details/Details';
import {RootStackParamList} from '../../../src/types';

jest.mock('../../../src/components/PokemonDetail', () => {
  return jest.fn(() => null);
});

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

describe('PokemonDetailScreen', () => {
  const route: Props['route'] = {
    key: 'test-key',
    name: 'Details',
    params: {
      pokemonId: 'pokemon/1/',
    },
  };

  const navigation = {} as Props['navigation'];

  it('renders correctly', () => {
    const {toJSON} = render(
      <PokemonDetailScreen route={route} navigation={navigation} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('passes the correct pokemonId to PokemonDetail component', () => {
    render(<PokemonDetailScreen route={route} navigation={navigation} />);
    expect(PokemonDetail).toHaveBeenCalledWith(
      expect.objectContaining({
        pokemonId: 'pokemon/1/',
      }),
      {},
    );
  });
});
