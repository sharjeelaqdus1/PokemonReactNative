export function extractPokemonUrlSegment(url: string): string {
  // Split the URL by '/' and filter out any empty strings
  const parts = url.split('/').filter(part => part);

  // Get the last two parts to form 'pokemon/1/'
  const desiredPart = parts.slice(-2).join('/');

  // Add the trailing slash
  return desiredPart + '/';
}

export function getFrontImage(pokemonDetails: any): string {
  return pokemonDetails?.sprites.front_default;
}
