import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer - Bangle Franchise",
};

export default function Disclaimer() {
  return (
    <main className="min-h-screen bg-white">
      <div className="section-container max-w-3xl">
        <h1 className="mb-8 text-center">Disclaimer</h1>

        <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
          <div className="bg-yellow-50 border-l-4 border-gold p-6 rounded mb-8">
            <p className="text-lg font-semibold text-maroon mb-2">
              ⚠️ Important Notice
            </p>
            <p>
              This is a franchise opportunity, NOT a guaranteed income scheme or
              employment. Your success depends on market conditions, location
              quality, business execution, and operational excellence.
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-bold text-maroon mb-4">1. No Income Guarantees</h2>
            <p>
              The income and profit figures mentioned on this website are estimates
              based on industry standards and our experience. These are NOT
              guaranteed. Actual results may vary significantly based on:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2 mt-3">
              <li>Location selection and foot traffic</li>
              <li>Local market demand and competition</li>
              <li>Your business acumen and work ethic</li>
              <li>Operational efficiency and inventory management</li>
              <li>Marketing and customer service quality</li>
              <li>Economic conditions and seasonal variations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-maroon mb-4">
              2. Financial Risk
            </h2>
            <p>
              Franchise investment involves financial risk. There is no guarantee
              of recovering your initial investment or earning a return. You should
              only invest money you can afford to lose without affecting your
              financial stability. Always consult a financial advisor before making
              any investment decision.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-maroon mb-4">
              3. Business Success Depends on Your Effort
            </h2>
            <p>
              While we provide training, support, and systems, the success of your
              franchise ultimately depends on YOUR effort, dedication, and business
              decisions. We cannot control market conditions, local competition, or
              individual performance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-maroon mb-4">
              4. Market Conditions
            </h2>
            <p>
              The ethnic bangle market is dynamic and subject to seasonal
              fluctuations. Demand may vary based on festivals, weddings, cultural
              events, and economic conditions. We provide strategies to manage these
              variations, but cannot guarantee consistent sales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-maroon mb-4">
              5. Location Dependency
            </h2>
            <p>
              Success heavily depends on store location. Even with our guidance,
              location selection carries inherent risks. High foot traffic areas may
              have high rent; affordable locations may have lower customer volume.
              You bear the responsibility of this choice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-maroon mb-4">
              6. No Refund Policy
            </h2>
            <p>
              Once you've invested in store setup, inventory, or franchise fee,
              these are generally non-refundable unless otherwise specified in your
              franchise agreement. Review the agreement thoroughly before signing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-maroon mb-4">
              7. Testimonials Are Not Guarantees
            </h2>
            <p>
              Success stories and testimonials from current franchisees represent
              their individual experiences and results. These do not guarantee that
              you will achieve similar outcomes. Past performance is not indicative
              of future results.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-maroon mb-4">
              8. Regulatory Compliance
            </h2>
            <p>
              You are responsible for complying with all local, state, and national
              regulations, including business registration, tax compliance, labor
              laws, and industry-specific regulations. We provide guidance but
              cannot provide legal or accounting advice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-maroon mb-4">
              9. Third-Party Information
            </h2>
            <p>
              We do not verify the accuracy of testimonials, case studies, or
              data from third parties. While we believe this information to be
              reliable, you should conduct your own due diligence and verification.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-maroon mb-4">
              10. Dispute Resolution
            </h2>
            <p>
              Any disputes arising from this franchise opportunity will be governed
              by the terms outlined in your franchise agreement. We encourage
              communication to resolve issues amicably, but are not liable for
              claims beyond what is specified in the agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-maroon mb-4">
              11. Information Accuracy
            </h2>
            <p>
              While we strive to keep all information current and accurate, we do
              not warrant the completeness or accuracy of any content on this
              website. Information about products, pricing, or business terms may
              change without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-maroon mb-4">
              12. Independent Investigation
            </h2>
            <p>
              We strongly recommend that you conduct independent research and due
              diligence before investing. Speak with existing franchisees, consult
              legal and financial advisors, and verify all claims independently.
            </p>
          </section>

          <div className="bg-maroon text-white p-6 rounded mt-12">
            <p className="text-lg font-semibold mb-3">
              Bottom Line: You Are the Decision Maker
            </p>
            <p>
              This franchise opportunity is presented as-is. You are solely
              responsible for evaluating the opportunity and making an informed
              investment decision. By applying for this franchise, you acknowledge
              that you understand the risks involved and accept full responsibility
              for your business outcomes.
            </p>
          </div>

          <p className="text-center text-gray-600 mt-8">
            Last Updated: December 2024
          </p>
        </div>
      </div>
    </main>
  );
}
