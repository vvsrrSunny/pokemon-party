import { useEffect, useState } from 'react';
import { PokemonData } from '../types';
import PokemonCard from './PokemonCard';
import axios from 'axios';

const Pokemon: React.FC = () => {
  const [pokemonData, setPokemonData] = useState<PokemonData>({ count: 0, results: [] });
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchData();
  }, []);

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
      {pokemonData?.results.map((pokemon, index) => <PokemonCard key={index} pokemon={pokemon} />)}
    </ul>
  );
};

export default Pokemon;
