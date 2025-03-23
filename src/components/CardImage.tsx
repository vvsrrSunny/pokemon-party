import { useState } from 'react';

type CardImageProps = {
  pokemonId: string;
};

const CardImage: React.FC<CardImageProps> = ({ pokemonId }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isError, setIsError] = useState(false); // Track image load errors

  return (
    <>
      {isImageLoaded === false && isError === false && (
        <div className="bg-card size-32 animate-pulse rounded-full"></div>
      )}

      {!isError ? (
        <img
          alt="pokemon"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
          className={`mx-auto size-32 shrink-0 rounded-full bg-gray-200 ${
            isImageLoaded ? 'block' : 'hidden'
          }`}
          onLoad={() => setIsImageLoaded(true)}
          onError={() => {
            setIsImageLoaded(false);
            setIsError(true);
          }}
        />
      ) : (
        <div className="bg-card flex size-32 items-center justify-center rounded-full text-sm text-gray-500">
          Failed to load image!
        </div>
      )}
    </>
  );
};

export default CardImage;
