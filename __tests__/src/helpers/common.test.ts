import {
  extractPokemonUrlSegment,
  getFrontImage,
} from '../../../src/helpers/common';

describe('extractPokemonUrlSegment', () => {
  test('returns the correct segment from the URL', () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/25/';
    const result = extractPokemonUrlSegment(url);
    expect(result).toBe('pokemon/25/');
  });

  // Add more test cases as needed
});

describe('getFrontImage', () => {
  test('returns the front image URL from pokemonDetails', () => {
    const pokemonDetails = {
      sprites: {
        front_default: 'https://example.com/front_default.png',
      },
    };
    const result = getFrontImage(pokemonDetails);
    expect(result).toBe('https://example.com/front_default.png');
  });

  test('returns undefined if pokemonDetails is null', () => {
    const pokemonDetails = null;
    const result = getFrontImage(pokemonDetails);
    expect(result).toBeUndefined();
  });

  // Add more test cases as needed
});
