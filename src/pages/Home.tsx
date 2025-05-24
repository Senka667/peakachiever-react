import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="py-12 text-center text-white">
        <h1 className="text-5xl font-bold mb-6">Achieve Your Peak Performance</h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Discover strategies, tools, and insights to maximize your productivity and reach your full potential.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/get-started">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-white/90">
              Get Started
            </button>
          </Link>
          <Link to="/learn-more">
            <button className="bg-transparent border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/20">
              Learn More
            </button>
          </Link>
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-bold mb-8 text-white text-center">Featured Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Productivity Technique #{item}</h3>
                <p className="text-gray-700 mb-4">
                  Learn how to boost your productivity with these proven techniques and strategies.
                </p>
                <Link to={`/blog/article-${item}`} className="text-blue-600 font-medium hover:underline">
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-bold mb-8 text-white text-center">Popular Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-40 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-1">Product #{item}</h3>
                <p className="text-gray-700 text-sm mb-2">
                  Essential tool for productivity enthusiasts.
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-blue-600">${(19.99 * item).toFixed(2)}</span>
                  <Link to={`/products/product-${item}`}>
                    <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
