import { Outlet, Link } from "react-router-dom";
import './App.css';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 to-orange-400">
      <header className="container mx-auto p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">PeakAchiever Pro</h1>
        <nav className="flex gap-4">
          <Link to="/home" className="text-white hover:text-white/80">Home</Link>
          <Link to="/blog" className="text-white hover:text-white/80">Blog</Link>
          <Link to="/products" className="text-white hover:text-white/80">Products</Link>
          <Link to="/about" className="text-white hover:text-white/80">About</Link>
        </nav>
        <div className="flex gap-2">
          <Link to="/subscribe">
            <button className="bg-transparent border border-white text-white px-4 py-2 rounded hover:bg-white/20">
              Subscribe
            </button>
          </Link>
          <Link to="/get-started">
            <button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-white/90">
              Get Started
            </button>
          </Link>
        </div>
      </header>

      <Outlet />
    </div>
  );
}
