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
    <li>
      <div className="group relative">
        <div className="bg-card flex flex-col rounded-lg text-center hover:cursor-pointer">
          {/* Top-Left Corner */}
          <div className="absolute -top-3 -left-3 h-8 w-8 border-t-6 border-l-6 border-white opacity-0 group-hover:scale-125 group-hover:opacity-100 group-hover:transition-all group-hover:duration-300"></div>

          {/* Top-Right Corner */}
          <div className="absolute -top-3 -right-3 h-8 w-8 border-t-6 border-r-6 border-white opacity-0 group-hover:scale-125 group-hover:opacity-100 group-hover:transition-all group-hover:duration-300"></div>

          {/* Bottom-Left Corner */}
          <div className="absolute -bottom-3 -left-3 h-8 w-8 border-b-6 border-l-6 border-white opacity-0 group-hover:scale-125 group-hover:opacity-100 group-hover:transition-all group-hover:duration-300"></div>

          {/* Bottom-Right Corner */}
          <div className="absolute -right-3 -bottom-3 h-8 w-8 border-r-6 border-b-6 border-white opacity-0 group-hover:scale-125 group-hover:opacity-100 group-hover:transition-all group-hover:duration-300"></div>

          <div className="flex flex-1 flex-col pt-3 pb-6">
            <img
              alt=""
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
              className="mx-auto size-32 shrink-0 rounded-full bg-gray-200"
            />
            <h3 className="mt-2 text-sm font-bold text-gray-900 capitalize">{pokemon.name}</h3>
          </div>
        </div>
      </div>
    </li>
  );
};

export default PokemonCard;
