import React from 'react';
import {Text} from 'react-native';
interface DefaultErrorProps {
  message: string | number;
}
// Common Default Error Component To Keep Code Reusability and Separation
const DefaultError: React.FC<DefaultErrorProps> = ({message}) => {
  return <Text>Error: {message ?? 'Unknown'}</Text>;
};

export default DefaultError;
