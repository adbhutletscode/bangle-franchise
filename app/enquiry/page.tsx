import type { Metadata } from "next";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Franchise Enquiry Form - Bangle Store Franchise",
  description:
    "Submit your franchise enquiry and get in touch with our franchise team.",
};

export default function Enquiry() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-cream to-white">
      <div className="section-container max-w-2xl">
        <h1 className="mb-4 text-center">Franchise Enquiry Form</h1>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Take the first step toward your entrepreneurial journey. Fill out the
          form below and our franchise team will get back to you within 24 hours.
        </p>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <EnquiryForm />
        </div>

        <div className="mt-12 p-6 bg-yellow-50 rounded-lg border-l-4 border-gold">
          <h3 className="text-maroon mb-3 font-semibold">What happens next?</h3>
          <ol className="space-y-2 text-gray-700">
            <li>
              <span className="text-maroon font-semibold">1.</span> We'll review
              your enquiry within 24 hours
            </li>
            <li>
              <span className="text-maroon font-semibold">2.</span> Our franchise
              manager will call you to discuss your goals
            </li>
            <li>
              <span className="text-maroon font-semibold">3.</span> We'll share
              detailed franchise documentation
            </li>
            <li>
              <span className="text-maroon font-semibold">4.</span> Schedule a
              meeting at your convenience
            </li>
            <li>
              <span className="text-maroon font-semibold">5.</span> Begin your
              journey toward business ownership!
            </li>
          </ol>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            Prefer to connect directly? Reach out to us anytime:
          </p>
          <div className="space-y-2">
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
