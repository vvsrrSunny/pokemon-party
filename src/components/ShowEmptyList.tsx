import { NoSymbolIcon } from '@heroicons/react/24/outline';

const ShowEmptyList: React.FC = () => {
  return (
    <div className="flex h-32 flex-row items-center justify-center space-x-2">
      <NoSymbolIcon className="h-5 text-white" />
      <p className="text-lg font-medium text-white">No Pokemon to Show</p>
    </div>
  );
};

export default ShowEmptyList;
