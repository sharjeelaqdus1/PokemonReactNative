import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

type DetailElementProps = {
  label: string;
  value: string | number | null | undefined | Array<any | null | undefined>;
  list?: boolean;
};

// This common component is designed to display items on detail pages.
// It's separated into its own component to enhance code organization and maintainability.

const DetailElement: React.FC<DetailElementProps> = ({label, value, list}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.valueContainer}>
        {list && Array.isArray(value) ? (
          value.map((item, index) => (
            <Text key={index} style={styles.listItem}>
              {item?.type?.name}
            </Text>
          ))
        ) : (
          <Text style={styles.value}>{value ?? 'Unknown'}</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 15,
    justifyContent: 'space-around',
  },
  label: {
    flex: 1,
    fontWeight: 'bold',
    marginRight: 5,
    fontSize: 20,
  },
  valueContainer: {},
  value: {},
  listItem: {
    marginBottom: 2, // Adjust as needed
  },
});

export default DetailElement;
