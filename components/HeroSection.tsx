import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-maroon to-dark-maroon text-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-white text-4xl md:text-5xl font-serif font-bold mb-4 leading-tight">
              Start Your Own Bangle Business with Our Proven Franchise Model
            </h1>

            <p className="text-xl text-gray-200 mb-6 leading-relaxed">
              Join 50+ successful franchisees earning consistent income with low
              investment, high demand, and complete business support.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center text-lg">
                <span className="text-gold mr-3 text-2xl">✓</span>
                <span>Investment starting from ₹50,000</span>
              </div>
              <div className="flex items-center text-lg">
                <span className="text-gold mr-3 text-2xl">✓</span>
                <span>Evergreen market with consistent demand</span>
              </div>
              <div className="flex items-center text-lg">
                <span className="text-gold mr-3 text-2xl">✓</span>
                <span>Complete training & ongoing support</span>
              </div>
              <div className="flex items-center text-lg">
                <span className="text-gold mr-3 text-2xl">✓</span>
                <span>15 years of industry expertise</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/enquiry" className="btn-primary text-center">
                Apply for Franchise
              </Link>
              <Link href="/franchise-model" className="btn-outline text-center">
                View Franchise Models
              </Link>
            </div>

            <p className="text-gray-300 text-sm mt-6">
              💡 Tip: No prior experience required. We'll teach you everything!
            </p>
          </div>

          <div className="hidden md:flex justify-center">
            <div className="relative w-64 h-64 bg-gradient-to-br from-gold to-yellow-400 rounded-full flex items-center justify-center shadow-2xl">
              <div className="text-center">
                <div className="text-8xl mb-2">💍</div>
                <p className="text-maroon font-serif font-bold text-2xl">
                  Premium <br /> Bangles
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
