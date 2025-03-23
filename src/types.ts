export type Pokemon = {
  name: string;
  url: string;
};

export type PokemonData = {
  results: Pokemon[];
  count: number;
  next?: string | null;
  previous?: string | null;
};
