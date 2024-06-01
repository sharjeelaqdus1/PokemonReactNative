// src/components/PokemonList.tsx

import React from 'react';

import CommonList from './CommonList';
import usePokemon from '../hooks/usePokemon';
import PokemonListItem from './PokemonListItem';
import {Pokemon} from '../types';
import ListSeparator from './ListSeparator';

type PokemonListProps = {
  onEndReached?: (() => void) | null;
  onEndReachedThreshold?: number | null;
};

const PokemonList: React.FC<PokemonListProps> = ({
  onEndReached,
  onEndReachedThreshold,
}) => {
  const {pokemonList} = usePokemon();

  const renderItem = ({item}: {item: Pokemon}) => (
    <PokemonListItem item={item} />
  );

  const keyExtractor = (item: Pokemon) => item.url;

  return (
    <CommonList
      data={pokemonList?.results ?? []}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ListHeaderComponent={<ListSeparator />}
      ItemSeparatorComponent={ListSeparator}
      onEndReached={onEndReached}
      onEndReachedThreshold={onEndReachedThreshold}
      testID="PokemonList"
    />
  );
};

export default PokemonList;
