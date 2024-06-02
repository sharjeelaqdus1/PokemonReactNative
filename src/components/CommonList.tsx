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

// This common component is designed to display list on home page
// for pokemon , but in bigger projects we can consume this at multiple places.

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
  testID,
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
      onEndReached={onEndReached} // we can use this to load more content, but as it is not instructed in the task so i havnt done that for now
      onEndReachedThreshold={onEndReachedThreshold}
      testID={testID}
    />
  );
}

export default CommonList;
