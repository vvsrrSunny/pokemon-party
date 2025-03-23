import React, { useEffect, useState } from 'react';
import { Pokemon } from '../types';
import CardAnimation from './CardAnimation';
import CardImage from './CardImage';

type PokemonCardProps = {
  pokemon: Pokemon;
  partyIdList: string[];
  failedPokemonIdToJoinParty: string | null;
  addPokemonParty: (id: string) => void;
};

const PokemonCard: React.FC<PokemonCardProps> = ({
  pokemon,
  partyIdList,
  failedPokemonIdToJoinParty,
  addPokemonParty,
}) => {
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
        <div
          className={`${partyIdList.includes(pokemonId) ? 'bg-selected-card' : 'bg-card group-hover:bg-white'} ${failedPokemonIdToJoinParty === pokemonId ? 'animate-cancel' : ''} flex flex-col rounded-lg text-center group-hover:duration-300 hover:cursor-pointer`}
          onClick={() => addPokemonParty(pokemonId)}
        >
          <CardAnimation />
          <p className="absolute top-3.5 left-2 text-sm text-gray-400 sm:left-10 md:left-7 lg:left-5 xl:left-4 2xl:left-2.5">
            #{pokemonId}
          </p>
          <div className="flex flex-1 flex-col items-center pt-3 pb-6">
            <CardImage pokemonId={pokemonId} />
            <h3
              className={`${partyIdList.includes(pokemonId) ? 'text-white' : 'text-gray-900'} mt-2 text-sm font-bold text-gray-900 capitalize`}
            >
              {pokemon.name}
            </h3>
          </div>
        </div>
      </div>
    </li>
  );
};

export default PokemonCard;
