export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonListResponse {
  results: Pokemon[];
}

export interface PokemonDetails {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: Sprites;
  types: any[];
  // Add other properties as needed
}

export type Sprites = {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
};

export type RootStackParamList = {
  Home: undefined;
  Details: {pokemonId: string};
};
