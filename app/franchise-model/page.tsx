import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Franchise Model Details - Bangle Store Franchise",
  description:
    "Explore our franchise formats, investment ranges, and complete support system.",
};

export default function FranchiseModel() {
  const models = [
    {
      name: "Counter Setup",
      investment: "₹1,50,000 - ₹3,00,000",
      area: "80-150 sq ft",
      location: "Shopping malls, high street areas",
      description:
        "Compact counter-based setup perfect for malls and busy retail locations.",
      benefits: [
        "Lower initial investment",
        "Flexible lease terms",
        "Foot traffic advantage",
        "Quick setup (1-2 weeks)",
      ],
    },
    {
      name: "Small Shop",
      investment: "₹3,00,000 - ₹6,00,000",
      area: "150-300 sq ft",
      location: "Main streets, shopping centers",
      description:
        "Independent small retail store with dedicated storefront and display.",
      benefits: [
        "Brand visibility",
        "More inventory space",
        "Standalone operation",
        "Medium-term profitability",
      ],
    },
    {
      name: "Flagship Store",
      investment: "₹6,00,000 - ₹12,00,000",
      area: "300-500+ sq ft",
      location: "Prime locations, markets",
      description:
        "Full-service store with premium design and complete product range.",
      benefits: [
        "Maximum market presence",
        "Complete product range",
        "Premium customer experience",
        "Higher revenue potential",
      ],
    },
    {
      name: "Home-Based Business",
      investment: "₹50,000 - ₹1,50,000",
      area: "Home-based",
      location: "Your residence",
      description:
        "Start from home with online + direct delivery model (minimal inventory).",
      benefits: [
        "Lowest investment",
        "Zero rent",
        "Flexible hours",
        "Community selling",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="section-container">
        <h1 className="mb-4 text-center">Franchise Model & Formats</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Choose the format that best suits your investment capacity and business
          goals. All models include our complete support system.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {models.map((model, index) => (
            <div key={index} className="card border-l-4 border-gold">
              <h3 className="mb-2">{model.name}</h3>
              <div className="mb-4 space-y-2">
                <p className="text-gold font-bold text-lg">{model.investment}</p>
                <p className="text-sm text-gray-600">📍 {model.location}</p>
                <p className="text-sm text-gray-600">📏 {model.area}</p>
              </div>
              <p className="text-gray-700 mb-4">{model.description}</p>
              <div className="space-y-2">
                {model.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start text-sm">
                    <span className="text-maroon mr-2">✓</span>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-cream rounded-lg p-8 mb-16 border-l-4 border-gold">
          <h2 className="mb-8">What's Included in Your Franchise Package?</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-maroon mb-4 flex items-center">
                <span className="text-2xl mr-3">🏢</span> Operational Support
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Location selection assistance</li>
                <li>✓ Store design & layout planning</li>
                <li>✓ Supplier introduction & negotiations</li>
                <li>✓ POS system & billing setup</li>
                <li>✓ Inventory management training</li>
              </ul>
            </div>

            <div>
              <h3 className="text-maroon mb-4 flex items-center">
                <span className="text-2xl mr-3">📚</span> Training & Development
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ 7-10 day initial training program</li>
                <li>✓ Product knowledge & styling guidance</li>
                <li>✓ Sales & customer service training</li>
                <li>✓ Staff onboarding support</li>
                <li>✓ Ongoing monthly workshops</li>
              </ul>
            </div>

            <div>
              <h3 className="text-maroon mb-4 flex items-center">
                <span className="text-2xl mr-3">📦</span> Product & Supply Chain
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Exclusive product catalog access</li>
                <li>✓ Weekly new collection updates</li>
                <li>✓ Guaranteed supply chain</li>
                <li>✓ Return & exchange policy</li>
                <li>✓ Quality assurance support</li>
              </ul>
            </div>

            <div>
              <h3 className="text-maroon mb-4 flex items-center">
                <span className="text-2xl mr-3">📢</span> Marketing & Branding
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Co-branded marketing materials</li>
                <li>✓ Social media content templates</li>
                <li>✓ Local promotional campaigns</li>
                <li>✓ Festival & seasonal strategies</li>
                <li>✓ Digital marketing support</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-maroon text-white rounded-lg p-8 mb-16">
          <h2 className="mb-6">Financial Expectations</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-gold mb-4">Estimated Margins*</h3>
              <p className="mb-4">
                Typical retail margins on bangle products range from 35-50%,
                depending on:
              </p>
              <ul className="space-y-2">
                <li>• Store format & location</li>
                <li>• Product mix & pricing strategy</li>
                <li>• Volume of sales</li>
                <li>• Operational efficiency</li>
              </ul>
            </div>
            <div>
              <h3 className="text-gold mb-4">Typical Break-Even Period*</h3>
              <p className="mb-4">
                Most franchisees achieve break-even in 12-18 months with:
              </p>
              <ul className="space-y-2">
                <li>• Consistent daily sales</li>
                <li>• Proper inventory management</li>
                <li>• Local marketing efforts</li>
                <li>• Good customer service</li>
              </ul>
            </div>
          </div>
          <p className="text-sm mt-6 text-gray-300 italic">
            *These are estimates based on industry standards. Actual results vary
            based on location, market conditions, and operational excellence. No
            income is guaranteed.
          </p>
        </div>

        <div className="bg-yellow-50 border-l-4 border-gold p-6 rounded mb-12">
          <h3 className="text-maroon mb-3">⚠️ Important Disclaimer</h3>
          <p className="text-gray-700">
            This franchise opportunity is NOT a guaranteed income scheme. Your
            success depends on market conditions, location quality, business
            acumen, hard work, and adherence to our systems. We provide tools,
            training, and support, but the outcome is ultimately your
            responsibility. Always consult a financial advisor before investing.
          </p>
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Ready to explore this opportunity further?
          </p>
          <Link href="/enquiry" className="btn-primary">
            Submit Franchise Enquiry
          </Link>
        </div>
      </div>
    </main>
  );
}
