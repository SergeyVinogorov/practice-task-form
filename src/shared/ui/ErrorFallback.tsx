export const ErrorFallback = () => {
  return (
    <main className="p-6">
      <h1 className="mt-0">Something went wrong</h1>
      <p className="opacity-75">Try refreshing the page.</p>
      <button
        onClick={() => window.location.reload()}
        className="border border-solid px-2 py-3"
      >
        Reload
      </button>
    </main>
  );
};
