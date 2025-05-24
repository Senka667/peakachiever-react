export default function About() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-6">About PeakAchiever Pro</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              At PeakAchiever Pro, our mission is to help individuals and teams maximize their productivity, 
              focus, and overall performance. We believe that with the right tools, strategies, and mindset, 
              everyone can achieve their peak potential in both their professional and personal lives.
            </p>
            <p className="text-gray-700">
              We combine cutting-edge research in productivity science, cognitive psychology, and performance 
              optimization to create practical solutions that make a real difference in how people work and live.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              PeakAchiever Pro was founded in 2023 by a team of productivity experts, cognitive scientists, 
              and high-performance coaches who saw a need for more effective, science-based approaches to 
              productivity and performance enhancement.
            </p>
            <p className="text-gray-700">
              What began as a small blog sharing productivity tips has grown into a comprehensive resource 
              offering courses, tools, and strategies used by professionals around the world. Our community 
              now includes thousands of individuals committed to continuous improvement and peak performance.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
            <p className="text-gray-700 mb-4">
              We believe that true productivity isn't about doing more—it's about doing what matters most, 
              with full focus and intention. Our approach emphasizes:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li className="mb-2">Evidence-based strategies backed by scientific research</li>
              <li className="mb-2">Holistic methods that address mind, body, and environment</li>
              <li className="mb-2">Sustainable practices that prevent burnout and promote wellbeing</li>
              <li className="mb-2">Personalized approaches that respect individual differences</li>
              <li>Practical tools that integrate seamlessly into real-world workflows</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
            <p className="text-gray-700 mb-4">
              Whether you're looking to overcome procrastination, achieve deeper focus, or build systems 
              for sustained high performance, we're here to support your journey.
            </p>
            <p className="text-gray-700">
              Subscribe to our newsletter, explore our blog, or try our productivity tools to take the 
              first step toward reaching your peak potential.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
