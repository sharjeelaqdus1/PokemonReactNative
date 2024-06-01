import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

type DetailElementProps = {
  label: string;
  value: string | number | null | undefined | Array<any | null | undefined>;
  list?: boolean; // Add list prop
};

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
          <Text style={styles.value}>{value}</Text>
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
    justifyContent: 'space-around',
  },
  label: {
    flex: 1,
    fontWeight: 'bold',
    marginRight: 5,
  },
  valueContainer: {},
  value: {},
  listItem: {
    marginBottom: 2, // Adjust as needed
  },
});

export default DetailElement;
