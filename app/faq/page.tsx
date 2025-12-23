import type { Metadata } from "next";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "FAQ - Bangle Franchise",
  description:
    "Find answers to common questions about our franchise opportunity.",
};

export default function FAQ() {
  const faqItems = [
    {
      question: "Is prior retail or bangle business experience required?",
      answer:
        "No, prior experience is not mandatory. Our comprehensive 7-10 day training program covers everything from product knowledge to sales techniques, inventory management, and customer service. Many of our successful franchisees started without retail experience. What matters is your commitment, willingness to learn, and business mindset.",
    },
    {
      question: "How long does it typically take to set up the store?",
      answer:
        "Timeline varies by format: Home-based businesses can start in 1-2 weeks, counter setups in 2-4 weeks, and small shops in 4-8 weeks. Flagship stores may take 8-12 weeks depending on location finalization and store design customization. Our team will guide you through each step.",
    },
    {
      question: "What support does the franchise provide after opening?",
      answer:
        "We provide ongoing support including: monthly training workshops, supply chain management, inventory assistance, marketing strategies, design guidance, staff training, and a dedicated franchise manager for your queries. We also maintain a network where franchisees can share best practices.",
    },
    {
      question: "Is the income guaranteed?",
      answer:
        "NO. Income is NOT guaranteed in any way. Your success depends on factors like location quality, local market demand, your business execution, operational efficiency, customer service, and competitive dynamics. While we provide tools, training, and support, the results depend entirely on your effort and market conditions. We maintain transparency about this.",
    },
    {
      question:
        "What is the franchise fee and what does it cover?",
      answer:
        "The franchise fee varies by format (₹50,000 - ₹5,00,000) and covers brand licensing, training, operational support, initial marketing materials, and system setup. This is separate from your investment in store setup, inventory, and working capital. Detailed breakdown will be provided during your consultation.",
    },
    {
      question: "Can I open multiple stores or expand later?",
      answer:
        "Yes! Many franchisees start with a counter and upgrade to a standalone shop. Some open multiple locations. We support multi-unit franchisees and provide scalability options. Expansion is possible once you've stabilized your first unit and demonstrated operational capability.",
    },
    {
      question: "What happens if my store is not profitable?",
      answer:
        "We provide support through troubleshooting, operational optimization, and strategic changes. However, we cannot guarantee profitability. If you face consistent losses, it usually indicates location, market fit, or execution issues that we'll help address. You're responsible for your business outcome.",
    },
    {
      question: "What is the typical investment for each format?",
      answer:
        "Home-based: ₹50,000 - ₹1,50,000 | Counter: ₹1,50,000 - ₹3,00,000 | Small Shop: ₹3,00,000 - ₹6,00,000 | Flagship: ₹6,00,000 - ₹12,00,000. These estimates include franchise fee, store setup, initial inventory, and working capital.",
    },
    {
      question: "Are there additional costs after opening?",
      answer:
        "Yes. Monthly costs include rent, utilities, staff salaries, inventory replenishment, and local marketing. We provide guidance on managing these costs efficiently. Monthly operational costs typically range from ₹30,000 - ₹2,00,000+ depending on format and location.",
    },
    {
      question: "Do I get exclusive territory rights?",
      answer:
        "Territory availability depends on location density and market potential. We typically provide semi-exclusive territories to ensure market viability while maintaining network growth. Exact terms will be discussed during franchise agreement negotiations.",
    },
    {
      question: "How often will I receive new products and collections?",
      answer:
        "We release new collections weekly and seasonal specials for festivals and occasions. You'll have access to our exclusive product catalog and can order based on customer demand. Regular product updates keep your inventory fresh and competitive.",
    },
    {
      question: "What is the franchise agreement duration?",
      answer:
        "Standard franchise agreement is for 3 years with an option to renew. You can renew at the end of the term if both parties agree. Early termination clauses exist in case of non-compliance with franchise terms.",
    },
    {
      question: "What happens to my inventory if I decide to exit?",
      answer:
        "Upon exit, we have a buyback option for unsold inventory in good condition at 70-75% of cost price. This is outlined in your franchise agreement. Proper inventory management throughout your tenure helps minimize losses.",
    },
    {
      question: "Do I need staff, or can I run it alone?",
      answer:
        "Home-based businesses can be solo operations. Counters might need 1-2 part-time staff depending on location traffic. Small shops need 2-3 staff members, and flagship stores typically require 3-5 staff. We provide hiring and training guidance for all formats.",
    },
    {
      question: "What's the estimated break-even period?",
      answer:
        "Most franchisees break even in 12-18 months with consistent operations and good location choice. Factors affecting this include location quality, foot traffic, marketing effectiveness, and operational efficiency. Some achieve it earlier with ideal conditions.",
    },
    {
      question: "Is there ongoing royalty or commission?",
      answer:
        "Yes, there is a monthly royalty fee (typically 3-5% of revenue) that covers ongoing support, product development, brand marketing, and system maintenance. Exact terms will be in your franchise agreement.",
    },
    {
      question: "What are the estimated profit margins?",
      answer:
        "Typical retail margins range from 35-50% depending on product mix, pricing strategy, and market position. Actual profit after all expenses varies widely. We'll share detailed financial projections from existing franchisees during your consultation.",
    },
    {
      question: "Do you provide financing assistance?",
      answer:
        "We don't directly provide financing, but we can guide you toward bank partnerships and loan programs suitable for franchise startups. Many banks recognize our franchise model as a low-risk investment.",
    },
    {
      question: "What if I have a complaint about products or supply?",
      answer:
        "We have a dedicated quality assurance team and supply chain manager. Complaints are addressed within 48 hours. We maintain high standards and have a return/replacement policy for defective products.",
    },
    {
      question: "How do I apply for the franchise?",
      answer:
        "Start by filling out our enquiry form on this website. Our franchise team will contact you, discuss your goals, send franchise documentation, and guide you through the entire process. There's no obligation or hidden agenda—just transparent communication.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="section-container max-w-3xl">
        <h1 className="mb-4 text-center">Frequently Asked Questions</h1>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Find answers to common questions about our franchise opportunity. If you
          have additional questions, feel free to contact us directly.
        </p>

        <FAQAccordion items={faqItems} />

        <div className="mt-16 bg-cream rounded-lg p-8 text-center">
          <h2 className="mb-4">Didn't find your answer?</h2>
          <p className="text-gray-700 mb-6">
            Our franchise team is ready to answer any specific questions you might
            have about the opportunity.
          </p>
          <div className="space-y-3">
            <p className="text-lg">
              📞{" "}
              <a href="tel:+919876543210" className="text-maroon font-semibold">
                +91 98765 43210
              </a>
            </p>
            <p className="text-lg">
              ✉️{" "}
              <a
                href="mailto:franchise@bangles.in"
                className="text-maroon font-semibold"
              >
                franchise@bangles.in
              </a>
            </p>
            <p className="text-lg">
              💬{" "}
              <a
                href="https://wa.me/919876543210"
                className="text-maroon font-semibold"
              >
                WhatsApp: +91 98765 43210
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
