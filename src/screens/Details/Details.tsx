import * as React from 'react';
import {View} from 'react-native';

import styles from './Details.styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types';
import PokemonDetail from '../../components/PokemonDetail';

type PokemonDetailProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

const PokemonDetailScreen: React.FC<PokemonDetailProps> = ({route}) => {
  const {pokemonId} = route.params;
  return (
    <View style={styles.container}>
      <PokemonDetail pokemonId={pokemonId} />
    </View>
  );
};

export default PokemonDetailScreen;
