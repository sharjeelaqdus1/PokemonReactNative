// components/PokemonDetail.tsx
import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

import {extractPokemonUrlSegment} from '../helpers/common';
import usePokemonDetail from '../hooks/usePokemonDetail';
import Header from './Header';
import DetailElement from './DetailElement';
import ShouldRender from './ShouldRender';

interface PokemonDetailProps {
  pokemonId: string;
}

const PokemonDetail: React.FC<PokemonDetailProps> = ({pokemonId}) => {
  const {pokemonDetails} = usePokemonDetail(
    extractPokemonUrlSegment(pokemonId),
  );
  const {name, height, weight, types, sprites} = pokemonDetails || {};
  //   console.log('pokemon', pokemon);
  //   if (isLoading) {
  //     return <Text>Loading...</Text>;
  //   }

  //   if (error) {
  //     return <Text>Error: {error?.message}</Text>;
  //   }

  //   if (!pokemon) {
  //     return <Text>No Pokemon data</Text>;
  //   }

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
          <DetailElement label="Name" value={name} />
          <View style={styles.separator} />
        </ShouldRender>
        <ShouldRender condition={!!height}>
          <DetailElement label="Height" value={height + ' cm'} />
          <View style={styles.separator} />
        </ShouldRender>
        <ShouldRender condition={!!weight}>
          <DetailElement label="Weight" value={weight + ' kg'} />
          <View style={styles.separator} />
        </ShouldRender>
        <ShouldRender condition={!!weight}>
          <DetailElement label="Types" value={types} list={true} />
          <View style={styles.separator} />
        </ShouldRender>
      </View>
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
});

export default PokemonDetail;
