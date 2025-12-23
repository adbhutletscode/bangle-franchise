export default function BenefitsSection() {
  const benefits = [
    {
      icon: "💼",
      title: "Low Initial Investment",
      description:
        "Start from ₹50,000 with our home-based model or ₹1,50,000+ for retail locations. Flexible options to suit your budget.",
    },
    {
      icon: "📈",
      title: "High Profit Margins",
      description:
        "Typical retail margins of 35-50% with an evergreen product category that maintains consistent demand.",
    },
    {
      icon: "🎓",
      title: "Comprehensive Training",
      description:
        "7-10 day intensive training program covering product knowledge, sales, operations, and customer service.",
    },
    {
      icon: "🤝",
      title: "Dedicated Support",
      description:
        "Personal franchise manager, 24/7 helpline, monthly workshops, and on-site guidance throughout your journey.",
    },
    {
      icon: "🌟",
      title: "Premium Products",
      description:
        "Access to exclusive collections from master artisans, ensuring quality and customer satisfaction.",
    },
    {
      icon: "🚀",
      title: "Proven System",
      description:
        "15+ years in business with 50+ successful franchisees across 25+ cities in India.",
    },
  ];

  return (
    <section className="section-container bg-white">
      <h2 className="mb-4 text-center">Why Choose Our Franchise?</h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
        We combine industry expertise, proven systems, and dedicated support to
        help you succeed.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="card hover:shadow-xl hover:border-gold hover:border-t-4 transition-all"
          >
            <div className="text-5xl mb-4">{benefit.icon}</div>
            <h3 className="mb-3 text-maroon">{benefit.title}</h3>
            <p className="text-gray-700">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
