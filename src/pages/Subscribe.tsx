export default function Subscribe() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-6 text-center">Subscribe to Our Newsletter</h1>
          
          <p className="text-gray-700 mb-6 text-center">
            Join thousands of productivity enthusiasts receiving our weekly insights, tips, and exclusive content.
          </p>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your full name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email address"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Interests (Select all that apply)
              </label>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="productivity-tips"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="productivity-tips" className="ml-2 text-sm text-gray-700">
                    Productivity Tips & Strategies
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="focus-techniques"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="focus-techniques" className="ml-2 text-sm text-gray-700">
                    Focus & Concentration Techniques
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="digital-tools"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="digital-tools" className="ml-2 text-sm text-gray-700">
                    Digital Tools & Resources
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="mindfulness"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="mindfulness" className="ml-2 text-sm text-gray-700">
                    Mindfulness & Mental Clarity
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="product-updates"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="product-updates" className="ml-2 text-sm text-gray-700">
                    Product Updates & Special Offers
                  </label>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition duration-200"
              >
                Subscribe Now
              </button>
            </div>
            
            <p className="text-xs text-gray-500 text-center mt-4">
              By subscribing, you agree to receive email communications from PeakAchiever Pro.
              We respect your privacy and will never share your information. You can unsubscribe at any time.
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}
