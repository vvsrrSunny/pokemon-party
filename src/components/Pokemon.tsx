const pokemons = [
  {
    name: 'bulbasaur',
    url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  },
  {
    name: 'ivysaur',
    url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
  },
  {
    name: 'venusaur',
    url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
  },
  {
    name: 'charmander',
    url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
  },
  {
    name: 'charmeleon',
    url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
  },
  {
    name: 'charizard',
    url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
  },
  {
    name: 'squirtle',
    url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
  },
  {
    name: 'wartortle',
    url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png',
  },
  {
    name: 'blastoise',
    url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
  },
  {
    name: 'weedle',
    url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png',
  },
  {
    name: 'kakuna',
    url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png',
  },
  {
    name: 'beedrill',
    url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png',
  },
  {
    name: 'pidgey',
    url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png',
  },
  {
    name: 'pidgeotto',
    url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png',
  },
  {
    name: 'pidgeot',
    url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png',
  },
  {
    name: 'rattata',
    url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png',
  },
  {
    name: 'raticate',
    url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png',
  },
  {
    name: 'spearow',
    url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png',
  },
  {
    name: 'fearow',
    url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png',
  },
  {
    name: 'ekans',
    url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png',
  },
  {
    name: 'arbok',
    url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png',
  },
  {
    name: 'arbok',
    url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png',
  },

  // More people...
];

export default function Pokeman() {
  return (
    <ul
      role="list"
      className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
    >
      {pokemons.map((pokemon) => (
        <li
          key={pokemon.name}
          className="bg-card flex flex-col rounded-lg text-center hover:cursor-pointer"
        >
          <div className="flex flex-1 flex-col pt-3 pb-6">
            <img
              alt=""
              src={pokemon.url}
              className="mx-auto size-32 shrink-0 rounded-full bg-gray-200"
            />
            <h3 className="mt-2 text-sm font-bold text-gray-900 capitalize">{pokemon.name}</h3>
          </div>
        </li>
      ))}
    </ul>
  );
}
