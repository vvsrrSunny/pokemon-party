import React, { useEffect, useState } from 'react';
import { Pokemon } from '../types';
import CardAnimation from './CardAnimation';

type PokemonCardProps = {
  pokemon: Pokemon;
  partyIdList: string[];
  addPokemonParty: (id: string) => void;
};

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon, partyIdList, addPokemonParty }) => {
  const [pokemonId, setPokemonId] = useState<string>('0');

  useEffect(() => {
    const urlObj = new URL(pokemon.url);
    const segments = urlObj.pathname.split('/').filter(Boolean);
    const id: string | undefined = segments.pop();
    if (typeof id === 'string') {
      setPokemonId(id);
    }
  }, [pokemon.url]);

  const onCardClick = (): void => {
    addPokemonParty(pokemonId);
  };
  return (
    <li>
      <div className="group relative">
        <div
          className={`${partyIdList.includes(pokemonId) ? 'bg-selected-card' : 'bg-card group-hover:bg-white'} flex flex-col rounded-lg text-center group-hover:duration-300 hover:cursor-pointer`}
          onClick={onCardClick}
        >
          <CardAnimation />

          <div className="flex flex-1 flex-col pt-3 pb-6">
            <img
              alt=""
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
              className="mx-auto size-32 shrink-0 rounded-full bg-gray-200"
            />
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
