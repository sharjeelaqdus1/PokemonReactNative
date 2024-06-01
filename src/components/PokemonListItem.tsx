// src/components/RenderItem.tsx

import React from 'react';
import {Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Pokemon, RootStackParamList} from '../types';

import {extractPokemonUrlSegment, getFrontImage} from '../helpers/common';
import usePokemonDetail from '../hooks/usePokemonDetail';
import {useNavigation} from '@react-navigation/native';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type RenderItemProps = {
  item: Pokemon;
};
type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

const PokemonListItem: React.FC<RenderItemProps> = ({item}) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const {name, url} = item;
  const {pokemonDetails} = usePokemonDetail(extractPokemonUrlSegment(url));
  const onPress = () =>
    navigation.navigate('Details', {pokemonId: extractPokemonUrlSegment(url)});

  return (
    <TouchableOpacity
      testID="navigate-to-details-button"
      onPress={onPress}
      style={styles.container}>
      <Image
        source={{uri: getFrontImage(pokemonDetails)}}
        style={styles.image}
      />
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  text: {
    fontSize: 16,
    flexShrink: 1,
  },
});

export default PokemonListItem;
