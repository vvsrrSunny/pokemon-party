import { useEffect, useState } from 'react';
import { PokemonData } from '../types';
import PokemonCard from './PokemonCard';
import axios from 'axios';

const Pokemon: React.FC = () => {
  const [pokemonData, setPokemonData] = useState<PokemonData>({ count: 0, results: [] });
  const [loading, setLoading] = useState<boolean>(true);
  const [partyIdList, setPartyIdList] = useState<string[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const addPokemonParty = (id: string): void => {
    if (partyIdList.includes(id)) {
      // remove the id from the list
      setPartyIdList((prev) => prev.filter((partyId) => partyId !== id));
      return;
    }
    if (partyIdList.length < 6) {
      setPartyIdList((prev) => [...prev, id]); // Add selected value
    }
  };

  const fetchData = async (): Promise<void> => {
    try {
      const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=150');
      const data = res.data; // Axios stores response data under `data`
      setPokemonData(data);
    } catch (e) {
      console.log('error fetching data', e);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>loading ...</div>;
  }

  return (
    <ul
      role="list"
      className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
    >
      {pokemonData?.results.map((pokemon, index) => (
        <PokemonCard
          key={index}
          partyIdList={partyIdList}
          addPokemonParty={addPokemonParty}
          pokemon={pokemon}
        />
      ))}
    </ul>
  );
};

export default Pokemon;
