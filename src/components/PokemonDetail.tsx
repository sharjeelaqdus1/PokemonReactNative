import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

import {extractPokemonUrlSegment} from '../helpers/common';
import usePokemonDetail from '../hooks/usePokemonDetail';
import Header from './Header';
import DetailElement from './DetailElement';
import ShouldRender from './ShouldRender';
import DefaultError from './DefaultError';
import {strings} from '../constants/strings';

interface PokemonDetailProps {
  pokemonId: string;
}

const PokemonDetail: React.FC<PokemonDetailProps> = ({pokemonId}) => {
  const {pokemonDetails, error, isLoading} = usePokemonDetail(
    extractPokemonUrlSegment(pokemonId),
  );
  const {name, height, weight, types, sprites} = pokemonDetails || {};

  if (isLoading) {
    return <Text>{strings.loading}</Text>;
  }

  if (error) {
    if ('status' in error) {
      return <DefaultError message={error?.status} />;
    } else {
      return <DefaultError message={strings.failedToLoad} />;
    }
  }

  return (
    <View style={styles.container}>
      <Header showBackButton title={pokemonDetails?.name ?? ''} />
      <View style={styles.detailContainer}>
        <ShouldRender condition={!!sprites?.front_default}>
          <Image
            source={{uri: sprites?.front_default ?? ''}}
            style={styles.image}
          />
        </ShouldRender>
        <ShouldRender condition={!!name}>
          <View style={styles.separator} />
          <DetailElement label={strings.name} value={name} />
        </ShouldRender>
        <ShouldRender condition={!!height}>
          <View style={styles.separator} />
          <DetailElement label={strings.height} value={height + ' cm'} />
        </ShouldRender>
        <ShouldRender condition={!!weight}>
          <View style={styles.separator} />
          <DetailElement label={strings.weight} value={weight + ' kg'} />
        </ShouldRender>
        <ShouldRender condition={!!weight}>
          <View style={styles.separator} />
          <DetailElement label={strings.types} value={types} list={true} />
        </ShouldRender>
      </View>
      <View style={styles.separator2} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#fff',
  },
  detailContainer: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
  info: {
    fontSize: 18,
    marginVertical: 8,
  },
  type: {
    fontSize: 16,
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 8,
  },
  separator2: {
    height: 1,
    backgroundColor: 'gray',
    marginVertical: 8,
  },
});

export default PokemonDetail;
