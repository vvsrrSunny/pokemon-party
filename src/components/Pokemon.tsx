import { useEffect, useState } from 'react';
import { PokemonData, Status } from '../types';
import PokemonCard from './PokemonCard';
import axios from 'axios';
import PartyNotification from './PartyNotification';
import PokemonLoader from './PokemonLoader';
import ShowEmptyList from './ShowEmptyList';
import ShowError from './ShowError';
import { MAX_PARTY_SIZE } from '../constants';

const Pokemon: React.FC = () => {
  const [pokemonData, setPokemonData] = useState<PokemonData>({ count: 0, results: [] });
  const [status, setStatus] = useState<Status>('idle'); // status can be one of these 'loading' | 'idle' | 'failed'
  const [error, setError] = useState<Error | null>(null);
  const [partyIdList, setPartyIdList] = useState<string[]>([]);
  const [failedPokemonIdToJoinParty, setFailedPokemonIdToJoinParty] = useState<string | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const addPokemonParty = (id: string): void => {
    const isAtMaxCapacity: boolean = partyIdList.length >= MAX_PARTY_SIZE;
    const isAlreadyInParty: boolean = partyIdList.includes(id);

    if (isAtMaxCapacity === true && isAlreadyInParty === false) {
      setFailedPokemonIdToJoinParty(id);
      setTimeout(() => setFailedPokemonIdToJoinParty(null), 500);
      return;
    }

    if (isAlreadyInParty) {
      // remove the id from the list
      setPartyIdList((prev) => prev.filter((partyId) => partyId !== id));
      return;
    }

    setPartyIdList((prev) => [...prev, id]); // Add selected value
  };

  const fetchData = async (): Promise<void> => {
    try {
      setStatus('loading');
      const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=150');
      setPokemonData(res.data);
      setStatus('idle');
    } catch (error) {
      if (error instanceof Error) {
        setError(error); // e is now guaranteed to be an Error object
      } else {
        setError(new Error('An unknown error occurred'));
      }
      setStatus('failed');
    }
  };

  if (status === 'loading') {
    return <PokemonLoader />;
  }

  if (status === 'failed') {
    return <ShowError error={error} />;
  }

  if (status === 'idle' && pokemonData.results.length === 0) {
    return <ShowEmptyList />;
  }

  return (
    <>
      <ul
        role="list"
        className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
      >
        {pokemonData?.results.map((pokemon, index: number) => (
          <PokemonCard
            key={index}
            partyIdList={partyIdList}
            addPokemonParty={addPokemonParty}
            failedPokemonIdToJoinParty={failedPokemonIdToJoinParty}
            pokemon={pokemon}
          />
        ))}
      </ul>
      <PartyNotification selectedList={partyIdList}></PartyNotification>
    </>
  );
};

export default Pokemon;
