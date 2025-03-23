const PokemonLoader: React.FC = () => {
  return (
    <ul
      role="list"
      className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
    >
      {Array.from({ length: 6 }).map((_, index: number) => (
        <li key={index}>
          <div className="bg-card flex flex-col items-center justify-center rounded-lg py-3 text-center">
            <div className="bg-card size-32 animate-pulse rounded-full"></div>
            <div className="mt-4 h-4 w-20 animate-pulse rounded bg-gray-900"></div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PokemonLoader;
