import '@testing-library/jest-native/extend-expect';

jest.mock('@react-navigation/native-stack', () => {
  return {
    createNativeStackNavigator: jest.fn().mockReturnValue({
      Navigator: ({children}) => children,
      Screen: () => null,
    }),
  };
});

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: jest.fn(),
  };
});

jest.mock('@reduxjs/toolkit/query/react', () => {
  const actualModule = jest.requireActual('@reduxjs/toolkit/query/react');

  return {
    ...actualModule,
    createApi: () => ({
      useQuery: jest.fn(),
      useMutation: jest.fn(),
      reducerPath: 'mockedApi',
      reducer: jest.fn(),
      middleware: jest.fn(),
      endpoints: {
        getPokemonDetails: () => ({
          useQuery: jest.fn(),
        }),
        getPokemonList: () => ({
          useQuery: jest.fn(),
        }),
      },
    }),
  };
});

describe('Mock Test', () => {
  it('always passes', () => {
    // Mock test logic that always passes
    expect(true).toBe(true);
  });
});
