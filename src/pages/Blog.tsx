import { Link } from "react-router-dom";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "10 Productivity Hacks for Busy Professionals",
      excerpt: "Discover time-saving techniques that can transform your workday and help you accomplish more in less time.",
      date: "May 15, 2025",
      author: "Alex Johnson",
      slug: "productivity-hacks"
    },
    {
      id: 2,
      title: "The Science of Deep Work",
      excerpt: "Learn how to cultivate intense focus and produce high-quality work in shorter time periods.",
      date: "May 10, 2025",
      author: "Sarah Williams",
      slug: "deep-work-science"
    },
    {
      id: 3,
      title: "Building a Morning Routine for Success",
      excerpt: "How the first hour of your day can set you up for productivity and achievement.",
      date: "May 5, 2025",
      author: "Michael Chen",
      slug: "morning-routine"
    },
    {
      id: 4,
      title: "Digital Minimalism: Reclaiming Focus",
      excerpt: "Strategies to reduce digital distractions and create a more intentional relationship with technology.",
      date: "April 28, 2025",
      author: "Emma Rodriguez",
      slug: "digital-minimalism"
    },
    {
      id: 5,
      title: "The Pomodoro Technique: Working With Time",
      excerpt: "How breaking work into intervals can dramatically improve your productivity and mental sharpness.",
      date: "April 22, 2025",
      author: "David Kim",
      slug: "pomodoro-technique"
    }
  ];

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-white text-center">Productivity Blog</h1>
      
      <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
        {blogPosts.map((post) => (
          <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
            <div className="text-sm text-gray-600 mb-4">
              {post.date} • By {post.author}
            </div>
            <p className="text-gray-700 mb-4">{post.excerpt}</p>
            <Link to={`/blog/${post.slug}`} className="text-blue-600 font-medium hover:underline">
              Read Full Article →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
