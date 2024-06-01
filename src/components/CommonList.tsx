// src/components/CommonList.tsx

import React from 'react';
import {FlatList, ListRenderItem, StyleProp, ViewStyle} from 'react-native';

type CommonListProps<T> = {
  data: T[];
  renderItem: ListRenderItem<T>;
  keyExtractor: (item: T, index: number) => string;
  style?: StyleProp<ViewStyle>;
  ListHeaderComponent?: React.ComponentType<any> | React.ReactElement | null;
  ListFooterComponent?: React.ComponentType<any> | React.ReactElement | null;
  ItemSeparatorComponent?: React.ComponentType<any> | null;
  onEndReached?: (() => void) | null;
  onEndReachedThreshold?: number | null;
  testID: string;
};

function CommonList<T>({
  data,
  renderItem,
  keyExtractor,
  style,
  ListHeaderComponent,
  ListFooterComponent,
  ItemSeparatorComponent,
  onEndReached,
  onEndReachedThreshold,
}: CommonListProps<T>) {
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      style={style}
      ListHeaderComponent={ListHeaderComponent}
      ListFooterComponent={ListFooterComponent}
      ItemSeparatorComponent={ItemSeparatorComponent}
      onEndReached={onEndReached}
      onEndReachedThreshold={onEndReachedThreshold}
    />
  );
}

export default CommonList;
