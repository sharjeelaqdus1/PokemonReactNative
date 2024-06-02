// ListSeparator.tsx
import React from 'react';
import {View, StyleSheet} from 'react-native';

// Common Separator Component To Keep Code Reusability and Maintainability
const ListSeparator: React.FC = () => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: '#eee',
  },
});

export default ListSeparator;
