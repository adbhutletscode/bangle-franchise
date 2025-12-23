export default function FranchiseHighlights() {
  return (
    <section className="section-container bg-cream divider-gold">
      <div className="grid md:grid-cols-4 gap-6 mb-12">
        <div className="text-center card bg-white">
          <div className="text-5xl font-bold text-gold mb-2">15+</div>
          <p className="text-gray-700 font-semibold">Years in Business</p>
          <p className="text-sm text-gray-600 mt-2">
            Industry experience and trust
          </p>
        </div>

        <div className="text-center card bg-white">
          <div className="text-5xl font-bold text-gold mb-2">50+</div>
          <p className="text-gray-700 font-semibold">Active Franchisees</p>
          <p className="text-sm text-gray-600 mt-2">Growing network of partners</p>
        </div>

        <div className="text-center card bg-white">
          <div className="text-5xl font-bold text-gold mb-2">25+</div>
          <p className="text-gray-700 font-semibold">Cities Across India</p>
          <p className="text-sm text-gray-600 mt-2">Pan-India presence</p>
        </div>

        <div className="text-center card bg-white">
          <div className="text-5xl font-bold text-gold mb-2">98%</div>
          <p className="text-gray-700 font-semibold">Satisfaction Rate</p>
          <p className="text-sm text-gray-600 mt-2">Happy franchisees</p>
        </div>
      </div>

      <div className="bg-white rounded-lg p-8 shadow-lg">
        <h2 className="mb-8 text-center">Our Complete Support System</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex items-start">
            <div className="text-3xl mr-4">📍</div>
            <div>
              <h3 className="font-semibold text-maroon mb-2">Location Assistance</h3>
              <p className="text-gray-700">
                Expert guidance in selecting high-traffic, profitable locations
                for your store format.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="text-3xl mr-4">🏗️</div>
            <div>
              <h3 className="font-semibold text-maroon mb-2">Store Setup</h3>
              <p className="text-gray-700">
                Complete design, layout planning, and vendor coordination for
                quick setup.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="text-3xl mr-4">📦</div>
            <div>
              <h3 className="font-semibold text-maroon mb-2">Supply Chain</h3>
              <p className="text-gray-700">
                Guaranteed product availability with weekly new collections and
                competitive pricing.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="text-3xl mr-4">👥</div>
            <div>
              <h3 className="font-semibold text-maroon mb-2">Staff Training</h3>
              <p className="text-gray-700">
                Complete training for your team on products, sales, and customer
                service excellence.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="text-3xl mr-4">📱</div>
            <div>
              <h3 className="font-semibold text-maroon mb-2">Digital Tools</h3>
              <p className="text-gray-700">
                Modern POS system, inventory management, and online ordering
                platform included.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="text-3xl mr-4">📢</div>
            <div>
              <h3 className="font-semibold text-maroon mb-2">Marketing Support</h3>
              <p className="text-gray-700">
                Co-branded materials, social media content, and promotional
                campaign strategies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
