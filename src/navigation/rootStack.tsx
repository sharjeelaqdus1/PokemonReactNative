// App.tsx

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, Theme} from '@react-navigation/native';

import PokemonDetail from '../screens/Details/Details';
import {RootStackParamList} from '../types';
import HomeScreen from '../screens/Home/Home';

interface CustomNavigationContainerProps {
  theme?: Theme;
}
const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack: React.FC<CustomNavigationContainerProps> = ({theme}) => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Details"
          component={PokemonDetail}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootStack;
