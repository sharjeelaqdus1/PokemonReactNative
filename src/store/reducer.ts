import {pokemonApi} from '../services/network';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [pokemonApi.reducerPath],
};

export const rootReducer = combineReducers({
  [pokemonApi.reducerPath]: pokemonApi.reducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
