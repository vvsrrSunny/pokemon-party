const ErrorPage = () => {
  return (
    <div className="bg-body flex min-h-screen items-center justify-center">
      <div className="bg-card max-w-md rounded-lg p-4">
        <h1 className="mb-4 text-4xl font-semibold text-red-500">Error!</h1>
        <p className="text-gray-700">Sorry, something went wrong.</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 rounded bg-red-500 px-4 py-2 text-white hover:cursor-pointer hover:bg-red-600 focus:ring-2 focus:ring-red-400 focus:outline-none"
        >
          Refresh
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
