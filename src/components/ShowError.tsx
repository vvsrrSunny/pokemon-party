import React from 'react';

interface ShowErrorProps {
  error: Error | null;
}
const ShowError: React.FC<ShowErrorProps> = ({ error }) => {
  return (
    <div className="flex h-64 items-center justify-center">
      <p className="text-3xl font-semibold text-red-500">
        {error?.message ? error.message : 'API failed to respond'} !
      </p>
    </div>
  );
};

export default ShowError;
