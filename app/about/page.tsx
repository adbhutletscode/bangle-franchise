import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Bangle Franchise",
  description:
    "Learn about our bangle franchise brand, experience, and mission to support ethnic retail entrepreneurs.",
};

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <div className="section-container">
        <h1 className="mb-8 text-center">About Our Bangle Franchise</h1>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="mb-6">Our Brand Story</h2>
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
              For over 15 years, we have been a trusted name in the ethnic
              bangle industry, serving customers across India and diaspora
              communities worldwide. Our journey began with a passion for
              preserving traditional craftsmanship while bringing premium-quality
              bangles to modern customers.
            </p>
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
              From bridal collections to everyday wear, festival specials to
              custom designs, we have built a reputation for quality, trust, and
              unmatched customer service. Today, we are opening doors for
              business-minded entrepreneurs to join our success story.
            </p>
          </div>

          <div className="bg-gradient-to-br from-maroon to-dark-maroon rounded-lg p-8 text-white shadow-xl">
            <h3 className="mb-4 text-gold text-2xl">Why Bangles?</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-gold mr-3 text-xl">✓</span>
                <span>Evergreen demand with seasonal peaks (weddings, festivals)</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3 text-xl">✓</span>
                <span>Diverse customer base across age groups and communities</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3 text-xl">✓</span>
                <span>High profit margins with competitive pricing</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3 text-xl">✓</span>
                <span>Low spoilage rate and easy inventory management</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3 text-xl">✓</span>
                <span>Minimal cold storage or special handling required</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-cream border-l-4 border-gold p-8 mb-16 rounded">
          <h2 className="mb-6">Our Mission & Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-maroon mb-3">🎯 Mission</h3>
              <p className="text-gray-700">
                To empower entrepreneurs by providing a trusted, profitable,
                and sustainable bangle franchise model with complete support,
                premium products, and proven business systems.
              </p>
            </div>
            <div>
              <h3 className="text-maroon mb-3">💎 Quality</h3>
              <p className="text-gray-700">
                We source from the finest artisans and manufacturers, ensuring
                every bangle meets our standards for durability, design, and
                aesthetic appeal.
              </p>
            </div>
            <div>
              <h3 className="text-maroon mb-3">🤝 Trust</h3>
              <p className="text-gray-700">
                Transparency, honesty, and ethical business practices form the
                foundation of our partnerships with franchise partners.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="mb-8 text-center">Our Track Record</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="card text-center">
              <div className="text-4xl font-bold text-gold mb-2">15+</div>
              <p className="text-gray-700">Years in Business</p>
            </div>
            <div className="card text-center">
              <div className="text-4xl font-bold text-gold mb-2">50+</div>
              <p className="text-gray-700">Active Franchisees</p>
            </div>
            <div className="card text-center">
              <div className="text-4xl font-bold text-gold mb-2">10,000+</div>
              <p className="text-gray-700">Daily Customers</p>
            </div>
            <div className="card text-center">
              <div className="text-4xl font-bold text-gold mb-2">25+</div>
              <p className="text-gray-700">Cities Across India</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
