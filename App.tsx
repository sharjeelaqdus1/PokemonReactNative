/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaView} from 'react-native';

import RootStack from './src/navigation/rootStack';
import {Provider} from 'react-redux';
import {store, persistor} from './src/store';
import {PersistGate} from 'redux-persist/integration/react';

function App(): React.JSX.Element {
  const backgroundStyle = {
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RootStack />
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
}

export default App;
