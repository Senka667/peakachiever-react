export default function NotFound() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-8 text-center">
          <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
          <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
          <p className="text-gray-700 mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <button 
            onClick={() => window.location.href = '#/'}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-200"
          >
            Return to Home
          </button>
        </div>
      </div>
    </main>
  );
}
