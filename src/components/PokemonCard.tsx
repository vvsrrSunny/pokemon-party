import React, { useEffect, useState } from 'react';
import { Pokemon } from '../types';

type PokemonCardProps = {
  pokemon: Pokemon;
};
const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  const [pokemonId, setPokemonId] = useState<string>('0');
  useEffect(() => {
    const urlObj = new URL(pokemon.url);
    const segments = urlObj.pathname.split('/').filter(Boolean);
    const id: string | undefined = segments.pop();
    if (typeof id === 'string') {
      setPokemonId(id);
    }
  }, [pokemon.url]);
  return (
    <li className="bg-card flex flex-col rounded-lg text-center hover:cursor-pointer">
      <div className="flex flex-1 flex-col pt-3 pb-6">
        <img
          alt=""
          // src={pokemon.url}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
          className="mx-auto size-32 shrink-0 rounded-full bg-gray-200"
        />
        <h3 className="mt-2 text-sm font-bold text-gray-900 capitalize">{pokemon.name}</h3>
      </div>
    </li>
  );
};

export default PokemonCard;
