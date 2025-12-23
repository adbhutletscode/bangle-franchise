import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Choose Us - Bangle Franchise",
  description:
    "Discover our unique selling points, support system, and what makes our franchise opportunity the best choice.",
};

export default function WhyChooseUs() {
  const usp = [
    {
      icon: "🎯",
      title: "Proven Business Model",
      description:
        "15+ years of operational excellence with 50+ successful franchisees generating consistent revenue.",
    },
    {
      icon: "👥",
      title: "Dedicated Support Team",
      description:
        "Personal mentorship, 24/7 operational helpline, and regular on-site visits to ensure your success.",
    },
    {
      icon: "💎",
      title: "Premium Product Range",
      description:
        "Exclusive collections from master artisans, carefully curated for quality and design excellence.",
    },
    {
      icon: "📊",
      title: "Transparent Operations",
      description:
        "Clear terms, honest communication, and no hidden charges. Complete financial transparency.",
    },
    {
      icon: "🌟",
      title: "Continuous Training",
      description:
        "Monthly workshops, product updates, sales techniques, and industry insights to keep you ahead.",
    },
    {
      icon: "🚀",
      title: "Growth Opportunities",
      description:
        "Expand from counter to standalone store, add complementary products, or franchise further.",
    },
    {
      icon: "📱",
      title: "Digital Integration",
      description:
        "Modern POS system, inventory management software, and online ordering platform included.",
    },
    {
      icon: "🌍",
      title: "National Network",
      description:
        "Join a community of 50+ franchisees, share best practices, and grow together as a network.",
    },
  ];

  const testimonials = [
    {
      name: "Priya Kapoor",
      location: "Mumbai",
      quote:
        "The franchise model is simple yet effective. I started with a mall counter and opened my flagship store in just 18 months. The support team guided me every step of the way.",
      time: "2 years in business",
    },
    {
      name: "Rajesh Patel",
      location: "Bangalore",
      quote:
        "Best decision I made for my family. The business is profitable, and the flexibility allows me to balance with my other commitments. The training was exceptional.",
      time: "1.5 years in business",
    },
    {
      name: "Meera Singh",
      location: "Delhi",
      quote:
        "I had no prior retail experience, but the comprehensive training and ongoing support made all the difference. Now managing two stores with growing profit margins.",
      time: "2.5 years in business",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="section-container">
        <h1 className="mb-4 text-center">Why Choose Our Bangle Franchise?</h1>
        <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto text-lg">
          We're not just offering a business—we're offering a partnership built
          on trust, excellence, and your success.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {usp.map((item, index) => (
            <div key={index} className="card hover:border-gold hover:border-l-4">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="mb-3">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-cream rounded-lg p-10 mb-20 divider-gold">
          <h2 className="mb-10 text-center">Our Support Philosophy</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="mb-3">Partnership First</h3>
              <p className="text-gray-700">
                We win when you win. Your success is our success, so we invest
                fully in your growth and profitability.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📈</div>
              <h3 className="mb-3">Continuous Growth</h3>
              <p className="text-gray-700">
                Access to new collections, expanded product lines, and market
                insights to keep your business fresh and competitive.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="mb-3">Knowledge Sharing</h3>
              <p className="text-gray-700">
                Learn from 15 years of industry experience and tap into a
                network of successful franchisees.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="mb-12 text-center">Franchisee Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-maroon">
                <div className="flex items-start mb-4">
                  <div className="text-4xl text-gold mr-4">❝</div>
                </div>
                <p className="text-white mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-yellow-100 pt-4">
                  <p className="font-semibold text-gold">{testimonial.name}</p>
                  <p className="text-sm text-gray-200">{testimonial.location}</p>
                  <p className="text-xs text-gray-300 mt-1">{testimonial.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-maroon to-dark-maroon rounded-lg p-10 text-white mb-12">
          <h2 className="mb-6 text-white">What Sets Us Apart?</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <span className="text-gold text-2xl mr-4">✓</span>
              <div>
                <p className="font-semibold mb-1">Established Brand Reputation</p>
                <p className="text-gray-100">
                  15+ years in the ethnic bangle business with a loyal customer
                  base and trusted name in the industry.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-gold text-2xl mr-4">✓</span>
              <div>
                <p className="font-semibold mb-1">Flexible Investment Options</p>
                <p className="text-gray-100">
                  From ₹50,000 home-based to ₹12,00,000 flagship stores—choose
                  what fits your budget.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-gold text-2xl mr-4">✓</span>
              <div>
                <p className="font-semibold mb-1">Honest Communication</p>
                <p className="text-gray-100">
                  No unrealistic promises. We clearly state that results depend
                  on execution and market conditions.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-gold text-2xl mr-4">✓</span>
              <div>
                <p className="font-semibold mb-1">Evergreen Product Category</p>
                <p className="text-gray-100">
                  Bangles are a timeless product with consistent demand across
                  festivals, weddings, and daily wear.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="mb-6">Ready to Join Our Success Story?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect with us today to learn more about this opportunity and take
            the first step toward building your own profitable bangle business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/enquiry" className="btn-primary">
              Submit Enquiry Now
            </a>
            <a href="/contact" className="btn-secondary">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
