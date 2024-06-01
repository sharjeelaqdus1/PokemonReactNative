// src/screens/HomeScreen.tsx

import * as React from 'react';
import {View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import styles from './Home.styles';
import PokemonList from '../../components/PokemonList';
import {RootStackParamList} from '../../types';
import Header from '../../components/Header';

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;

const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <View testID="home-screen" style={styles.container}>
      <Header title="PokeReact" />
      <PokemonList />
    </View>
  );
};

export default HomeScreen;
