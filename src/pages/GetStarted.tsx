export default function GetStarted() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-6 text-center">Get Started with PeakAchiever Pro</h1>
          
          <p className="text-gray-700 mb-8 text-center">
            Begin your journey to peak productivity and performance with these simple steps.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div className="ml-4">
                <h2 className="text-xl font-bold mb-2">Assess Your Current Productivity</h2>
                <p className="text-gray-700">
                  Take our free productivity assessment to identify your strengths and areas for improvement.
                  This personalized evaluation will help you focus your efforts where they'll have the most impact.
                </p>
                <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200">
                  Take Assessment
                </button>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div className="ml-4">
                <h2 className="text-xl font-bold mb-2">Explore Our Core Resources</h2>
                <p className="text-gray-700">
                  Browse our collection of articles, guides, and tools designed to help you implement effective
                  productivity strategies. Start with the fundamentals and build your knowledge over time.
                </p>
                <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200">
                  Browse Resources
                </button>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div className="ml-4">
                <h2 className="text-xl font-bold mb-2">Choose Your First Tool</h2>
                <p className="text-gray-700">
                  Select a productivity tool that addresses your most pressing need. Whether it's better planning,
                  improved focus, or habit formation, we have solutions designed to help you succeed.
                </p>
                <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200">
                  View Products
                </button>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl">
                4
              </div>
              <div className="ml-4">
                <h2 className="text-xl font-bold mb-2">Join Our Community</h2>
                <p className="text-gray-700">
                  Connect with like-minded individuals who are also on their productivity journey. Share experiences,
                  ask questions, and get support from our community of productivity enthusiasts.
                </p>
                <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200">
                  Join Community
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-10 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-bold mb-3 text-center">Need Personalized Guidance?</h3>
            <p className="text-gray-700 text-center mb-4">
              Schedule a free 15-minute consultation with one of our productivity experts.
            </p>
            <button className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition duration-200">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
