import { Link } from "react-router-dom";

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Productivity Planner",
      description: "A daily planner designed to help you prioritize tasks and track your productivity.",
      price: 29.99,
      slug: "productivity-planner"
    },
    {
      id: 2,
      name: "Focus Timer",
      description: "A specialized timer that helps you implement the Pomodoro Technique for maximum focus.",
      price: 39.99,
      slug: "focus-timer"
    },
    {
      id: 3,
      name: "Digital Detox Guide",
      description: "A comprehensive guide to reducing digital distractions and reclaiming your attention.",
      price: 19.99,
      slug: "digital-detox-guide"
    },
    {
      id: 4,
      name: "Peak Performance Course",
      description: "A 6-week online course teaching you how to achieve peak performance in your work.",
      price: 149.99,
      slug: "peak-performance-course"
    },
    {
      id: 5,
      name: "Habit Tracker",
      description: "A beautiful habit tracking journal to help you build consistent productive habits.",
      price: 24.99,
      slug: "habit-tracker"
    },
    {
      id: 6,
      name: "Mindfulness Meditation App",
      description: "A premium app subscription with guided meditations for improved focus and productivity.",
      price: 59.99,
      slug: "mindfulness-app"
    }
  ];

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-white text-center">Productivity Products</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="h-48 bg-gray-200"></div>
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{product.name}</h2>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-blue-600">${product.price.toFixed(2)}</span>
                <Link to={`/products/${product.slug}`}>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
