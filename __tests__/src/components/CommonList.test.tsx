import React from 'react';
import {render} from '@testing-library/react-native';
import CommonList from '../../../src/components/CommonList';
import {Text} from 'react-native';

// Mock data for testing
const mockData = [
  {id: '1', name: 'Item 1'},
  {id: '2', name: 'Item 2'},
  {id: '3', name: 'Item 3'},
];

// Mock renderItem function
const renderItem = ({item}: {item: {id: string; name: string}}) => (
  <Text>{item.name}</Text>
);

test('renders correctly', () => {
  const {toJSON} = render(
    <CommonList
      data={mockData}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      testID="commonList"
    />,
  );

  expect(toJSON()).toMatchSnapshot();
});
