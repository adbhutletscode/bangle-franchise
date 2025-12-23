import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Bangle Franchise",
};

export default function Privacy() {
  return (
    <main className="min-h-screen bg-white">
      <div className="section-container max-w-3xl">
        <h1 className="mb-8 text-center">Privacy Policy</h1>

        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold text-maroon mb-4">1. Introduction</h2>
            <p>
              Bangle Store Franchise ("we," "us," or "our") respects your privacy.
              This Privacy Policy explains how we collect, use, and protect your
              personal information when you use our website or submit an enquiry.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-maroon mb-4">
              2. Information We Collect
            </h2>
            <p>We collect the following information when you submit an enquiry:</p>
            <ul className="list-disc list-inside ml-4 space-y-2 mt-3">
              <li>Full Name</li>
              <li>Mobile Number</li>
              <li>City</li>
              <li>Investment Budget Range</li>
              <li>Business Experience (optional)</li>
              <li>Message (optional)</li>
              <li>Timestamp of submission</li>
            </ul>
            <p className="mt-4">
              We also collect basic analytics data through our website (IP address,
              page visits, time spent on site) to improve user experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-maroon mb-4">
              3. How We Use Your Information
            </h2>
            <p>Your information is used solely for the following purposes:</p>
            <ul className="list-disc list-inside ml-4 space-y-2 mt-3">
              <li>To contact you regarding your franchise enquiry</li>
              <li>
                To provide information about our franchise opportunity
              </li>
              <li>To arrange meetings or consultations at your request</li>
              <li>To send you updates about our franchise program</li>
              <li>To improve our website and services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-maroon mb-4">
              4. Data Protection & Security
            </h2>
            <p>
              We implement industry-standard security measures to protect your
              information against unauthorized access, alteration, or disclosure.
              Your data is stored securely and accessed only by authorized personnel
              involved in processing your enquiry.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-maroon mb-4">
              5. Data Sharing
            </h2>
            <p>
              We do NOT share your personal information with third parties for
              marketing purposes. Your data is shared only with:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2 mt-3">
              <li>Our franchise team members who handle enquiries</li>
              <li>IT service providers who maintain our website (under NDA)</li>
            </ul>
            <p className="mt-4">
              We may disclose information if legally required to do so.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-maroon mb-4">
              6. Cookie Policy
            </h2>
            <p>
              Our website may use cookies to enhance your experience. These are
              small files stored on your device that help us remember your
              preferences. You can disable cookies in your browser settings, but
              this may affect website functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-maroon mb-4">
              7. Data Retention
            </h2>
            <p>
              We retain your enquiry information for up to 2 years to maintain
              records of franchise applications and follow-ups. After this period,
              data is securely deleted unless you've become a franchisee (in which
              case it's retained per agreement).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-maroon mb-4">
              8. Your Rights
            </h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside ml-4 space-y-2 mt-3">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information (right to be forgotten)</li>
              <li>Opt-out from marketing communications</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, contact us at franchise@bangles.in.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-maroon mb-4">
              9. Third-Party Links
            </h2>
            <p>
              Our website may contain links to external websites (WhatsApp, Google
              Maps, etc.). We are not responsible for the privacy practices of
              these third-party sites. Please review their privacy policies
              independently.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-maroon mb-4">
              10. Policy Changes
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be
              posted on this page with an updated "Last Updated" date. Continued
              use of our website constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-maroon mb-4">
              11. Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy or our data practices,
              please contact us:
            </p>
            <ul className="list-none space-y-2 mt-3 ml-4">
              <li>
                📧 Email:{" "}
                <a
                  href="mailto:franchise@bangles.in"
                  className="text-maroon font-semibold"
                >
                  franchise@bangles.in
                </a>
              </li>
              <li>
                📞 Phone:{" "}
                <a
                  href="tel:+919876543210"
                  className="text-maroon font-semibold"
                >
                  +91 98765 43210
                </a>
              </li>
            </ul>
          </section>

          <p className="text-center text-gray-600 mt-8">
            Last Updated: December 2024
          </p>
        </div>
      </div>
    </main>
  );
}
